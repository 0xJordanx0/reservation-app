"use client";

import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <section>
      <div className="hero bg-[#FB8500] h-[60vh]">
        <div className="flex flex-col justify-start py-12 items-center gap-4 h-full">
          <Navbar />
          <div className="text-center">
            <img src="/food.png" className="w-60" />
            <div className="prose">
              <h2 className="text-xl font-semibold">Online Foods Booking</h2>
            </div>
          </div>
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
                if (location === "alfonso") return router.push("/search");
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
