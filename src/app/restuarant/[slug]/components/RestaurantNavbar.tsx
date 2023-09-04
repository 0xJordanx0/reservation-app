import Link from "next/link";
import React from "react";

export default function RestaurantNavbar() {
  return (
    <div className="flex gap-4">
      <Link href="/restuarant/name">Overview</Link>
      <Link href="/restuarant/name/menu">Menu</Link>
    </div>
  );
}
