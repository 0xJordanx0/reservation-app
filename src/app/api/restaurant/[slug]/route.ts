import { NextRequest, NextResponse } from "next/server";
import { findAvailableTables } from "@/services/findAvailableTables";
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


  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      open_time: true,
      close_time: true,
      tables: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json({ status: 400 });
  }
  
  const searchTimesWithTables = await findAvailableTables(day, time, restaurant)
  
  if (!Array.isArray(searchTimesWithTables)) {
    return NextResponse.json({ status: 400 });
  }
  
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
