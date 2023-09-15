import { NextRequest, NextResponse } from "next/server";
import { times } from "@/data/times";
import prisma from "@/app/backend/prisma";

export async function GET(req: NextRequest, {params}:{params: {slug: string}}) {
  const { searchParams } = new URL(req.url);

  const slug = params.slug;
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");

  if (!day || !time || !partySize) {
    return NextResponse.json({ Error: "Invalid Data Provided" }, {status: 400});
  }
 
  const searchTimes = times.find(t => {
    return t.time === time
  })?.searchTimes;

  if(!searchTimes) {
    return NextResponse.json({status: 400});
  }

  const bookings = await prisma.booking.findMany({
    where: {
        booking_time: {
            gte: new Date(`${day}T${searchTimes[0]}`).toISOString(),
            lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`).toISOString()
        }
    },
    select: {
        number_of_people: true,
        booking_time: true,
        tables: true
    }
  })

  const bookingsTableObj: {[key: string]: {[key: number]: true}} = {}
  bookings.forEach(booking => {
    bookingsTableObj[booking.booking_time.toISOString()] = booking.tables.reduce((obj, table) => {
        return {
            ...obj,
            [table.table_id]: true
        }
    },{})
  })

  const restaurant = await prisma.restaurant.findUnique({
    where: {
        slug
    },
    select: {
        open_time: true,
        close_time: true,
        tables: true
    }
  });

  if(!restaurant){
    return NextResponse.json({status: 400});
  }

  const tables = restaurant.tables;

  const searchTimesWithTables =  searchTimes.map(searchTime => {
    return {
        date: new Date(`${day}T${searchTime}`),
        time: searchTime,
        tables
    }
  })

  searchTimesWithTables.forEach(t => {
    t.tables = t.tables.filter(table => {
        if(bookingsTableObj[t.date.toISOString()]){
            if(bookingsTableObj[t.date.toISOString()][table.id]) return false 
        }
        return true;
    })
  })

  const availability = searchTimesWithTables.map(t => {
    const sumSeats = t.tables.reduce((sum, table) => {
        return sum + table.seats
    }, 0)

    return {
        time: t.time,
        available: sumSeats >= parseInt(partySize)
    }
  }).filter(availability => {
    const timeIsAfterOpeningHour = new Date(`${day}T${availability.time}`) >= new Date(`${day}T${restaurant.open_time}`)
    const timeIsBeforeClosingHour = new Date(`${day}T${availability.time}`) <= new Date(`${day}T${restaurant.close_time}`)
    return timeIsAfterOpeningHour && timeIsBeforeClosingHour;
})


  return NextResponse.json(availability); 
}
