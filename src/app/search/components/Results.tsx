import React from "react";
import ResultItem from "./ResultItem";
import { PrismaClient } from "@prisma/client";
import { Restuarant } from "../../../../types/global";

const prisma = new PrismaClient();

const fetchRestaurants = async (city: string): Promise<Restuarant[]> => {
  const select = {
    id: true,
    name: true,
    description: true,
    main_image: true,
    slug: true,
    price: true,
    cuisine: true,
    location: true,
  }

  if (!city)
    return await prisma.restaurant.findMany({select});

  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select
  });

  return restaurants;
};

export default async function Results({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const restaurants = await fetchRestaurants(searchQuery);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        {restaurants.length ? restaurants.map((restaurant) => (
          <ResultItem restaurant={restaurant} />
        )) : <p>Sorry no restaurants have been found!</p>}
      </div>
    </div>
  );
}
