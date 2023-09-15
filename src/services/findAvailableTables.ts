import prisma from "@/app/backend/prisma";
import { times } from "@/data/times";
import { NextResponse } from "next/server";

export const findAvailableTables = async (
  day: string,
  time: string,
  restaurant: {
    tables: {
      id: number;
      seats: number;
      restaurant_id: number;
      created_at: Date;
      updated_at: Date;
    }[];
    open_time: string;
    close_time: string;
  }
) => {
  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes) {
    return NextResponse.json({ status: 400 });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`).toISOString(),
        lte: new Date(
          `${day}T${searchTimes[searchTimes.length - 1]}`
        ).toISOString(),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });

  const bookingsTableObj: { [key: string]: { [key: number]: true } } = {};
  bookings.forEach((booking) => {
    bookingsTableObj[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const tables = restaurant.tables;

  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingsTableObj[t.date.toISOString()]) {
        if (bookingsTableObj[t.date.toISOString()][table.id]) return false;
      }
      return true;
    });
  });

  return searchTimesWithTables;
};
