import React from "react";
import NavLinks from "../../components/NavLinks";

export default function Header() {
  return (
    <div className="flex justify-center bg-[#FB8500] p-4 gap-2 items-center">
      <NavLinks />
      <div className="flex gap-2 justify-center w-1/2">
        <input
          name="search"
          className="rounded p-2.5 w-1/2"
          placeholder="Search Resturants"
        />
        <button className="bg-[#FFB703] hover:bg-yellow-500 hover:text-white p-2.5 rounded">
          Search
        </button>
      </div>
    </div>
  );
}
