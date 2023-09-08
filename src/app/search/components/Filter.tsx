import React from "react";
import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../../../../types/global";

type Props = {
  locations: Location[]
  cuisines: Cuisine[];
  searchParams: SearchParams
};

export default function Filter({locations, cuisines, searchParams}:Props) {
  return (
    <form className="hidden lg:block">
      <h3 className="mb-2 font-bold text-lg">Locations</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        {locations.map((location) => (
          <li key={location.name}>
            <Link className="capitalize" href={{query: {...searchParams, city: location.name}}}>{location.name}</Link>
          </li>
        ))}
      </ul>
      <h3 className="my-2 font-bold text-lg">Cuisines</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        {cuisines.map((cuisine) => (
          <li key={cuisine.name}>
            <Link className="capitalize" href={{query: {...searchParams, cuisine: cuisine.name}}}>{cuisine.name}</Link>
          </li>
        ))}
      </ul>
    </form>
  );
}
