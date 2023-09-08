"use client";

import React, { useState } from "react";
import MobileFilter from "./MobileFilter";
import { FunnelIcon } from "@heroicons/react/20/solid";
import { Cuisine, Location } from "@prisma/client";
import { SearchParams } from "../../../../types/global";

export default function FilterToggle({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[],
  cuisines: Cuisine[],
  searchParams: SearchParams
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div>
      <MobileFilter
        locations={locations}
        cuisines={cuisines}
        searchParams={searchParams}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />

      <button
        type="button"
        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="sr-only">Filters</span>
        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
