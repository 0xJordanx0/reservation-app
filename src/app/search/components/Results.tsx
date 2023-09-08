import React from "react";
import ResultItem from "./ResultItem";
import { PrismaClient } from "@prisma/client";
import { Restuarant } from "../../../../types/global";

const prisma = new PrismaClient();

export default async function Results({
  restaurants,
}: {
  restaurants: Restuarant[];
}) {
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
