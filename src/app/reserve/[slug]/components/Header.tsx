import React from "react";
import NavLinks from "@/app/components/NavLinks";
import SearchBar from "@/app/components/SearchBar";

export default function Header() {
  return (
    <div className="flex justify-center bg-[#FB8500] p-4 gap-2 items-center">
      <NavLinks />
      <SearchBar />
    </div>
  );
}
