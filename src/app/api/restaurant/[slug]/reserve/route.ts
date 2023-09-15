import { NextRequest, NextResponse } from "next/server";
import { findAvailableTables } from "@/services/findAvailableTables";
import prisma from "@/app/backend/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(req.url);
  const slug = params.slug;
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json({ status: 400 });
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return NextResponse.json({
      message: "Restaurant is not open at this time",
      status: 400,
    });
  }

  if (day && time && partySize) {
    const searchTimesWithTables = await findAvailableTables(
      day,
      time,
      restaurant
    );

    if (Array.isArray(searchTimesWithTables)) {
      const searchTimesWithTablesTime = searchTimesWithTables.find((t) => {
        return (
          t.date.toISOString() === new Date(`${day}T${time}`).toISOString()
        );
      });

      if (!searchTimesWithTablesTime) {
        return NextResponse.json({
          message: "No availability, cannot book",
          status: 400,
        });
      }

      const tablesCount: {
        2: number[];
        4: number[];
      } = {
        2: [],
        4: [],
      };

      searchTimesWithTablesTime.tables.forEach((table) => {
        if (table.seats === 2) {
          tablesCount[2].push(table.id);
        } else {
          tablesCount[4].push(table.id);
        }
      });

      const tablesToBooks: number[] = [];
      let seatsRemaining = parseInt(partySize);

      while (seatsRemaining > 0) {
        if (seatsRemaining >= 3) {
          if (tablesCount[4].length) {
            tablesToBooks.push(tablesCount[4][0]);
            tablesCount[4].shift();
            seatsRemaining = seatsRemaining - 4;
          } else {
            tablesToBooks.push(tablesCount[2][0]);
            tablesCount[2].shift();
            seatsRemaining = seatsRemaining - 2;
          }
        } else {
          if (tablesCount[2].length) {
            tablesToBooks.push(tablesCount[2][0]);
            tablesCount[2].shift();
            seatsRemaining = seatsRemaining - 2;
          } else {
            tablesToBooks.push(tablesCount[4][0]);
            tablesCount[4].shift();
            seatsRemaining = seatsRemaining - 4;
          }
        }
      }

      return NextResponse.json(searchTimesWithTablesTime);
    }
  } else {
    return NextResponse.json({ status: 400 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(req.url);
  const slug = params.slug;
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");

  const {
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequest,
  } = await req.json();

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json({ status: 400 });
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return NextResponse.json({
      message: "Restaurant is not open at this time",
      status: 400,
    });
  }

  if (day && time && partySize) {
    const searchTimesWithTables = await findAvailableTables(
      day,
      time,
      restaurant
    );

    if (Array.isArray(searchTimesWithTables)) {
      const searchTimesWithTablesTime = searchTimesWithTables.find((t) => {
        return (
          t.date.toISOString() === new Date(`${day}T${time}`).toISOString()
        );
      });

      if (!searchTimesWithTablesTime) {
        return NextResponse.json({
          message: "No availability, cannot book",
          status: 400,
        });
      }

      const tablesCount: {
        2: number[];
        4: number[];
      } = {
        2: [],
        4: [],
      };

      searchTimesWithTablesTime.tables.forEach((table) => {
        if (table.seats === 2) {
          tablesCount[2].push(table.id);
        } else {
          tablesCount[4].push(table.id);
        }
      });

      const tablesToBooks: number[] = [];
      let seatsRemaining = parseInt(partySize);

      while (seatsRemaining > 0) {
        if (seatsRemaining >= 3) {
          if (tablesCount[4].length) {
            tablesToBooks.push(tablesCount[4][0]);
            tablesCount[4].shift();
            seatsRemaining = seatsRemaining - 4;
          } else {
            tablesToBooks.push(tablesCount[2][0]);
            tablesCount[2].shift();
            seatsRemaining = seatsRemaining - 2;
          }
        } else {
          if (tablesCount[2].length) {
            tablesToBooks.push(tablesCount[2][0]);
            tablesCount[2].shift();
            seatsRemaining = seatsRemaining - 2;
          } else {
            tablesToBooks.push(tablesCount[4][0]);
            tablesCount[4].shift();
            seatsRemaining = seatsRemaining - 4;
          }
        }
      }

      const booking = await prisma.booking.create({
        data: {
          number_of_people: parseInt(partySize),
          booking_time: new Date(`${day}T${time}`),
          booker_first_name: bookerFirstName,
          booker_last_name: bookerLastName,
          booker_email:bookerEmail,
          booker_phone: bookerPhone,
          booker_occasion: bookerOccasion,
          booker_request: bookerRequest, 
          restaurant_id: restaurant.id,
        }
      })

      const bookingsOnTablesData = tablesToBooks.map(table_id => {
        return {
          table_id,
          booking_id: booking.id
        }
      })

      await prisma.bookingsOnTable.createMany({
        data:  bookingsOnTablesData
      });

      return NextResponse.json(searchTimesWithTablesTime);
    }
  } else {
    return NextResponse.json({ status: 400 });
  }
}
