"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="flex gap-2 sm:w-2/3 md:w-1/2 xl:w-1/3">
      <input
        name="search"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="rounded p-2.5 w-full"
        placeholder="Search Resturants"
      />
      <button
        className="bg-[#FFB703] hover:bg-yellow-500 hover:text-white p-2.5 rounded"
        onClick={() => {
          if (location === "") return;
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Search
      </button>
    </div>
  );
}
