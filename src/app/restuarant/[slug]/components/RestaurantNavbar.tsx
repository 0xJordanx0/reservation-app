import Link from "next/link";
import React from "react";

interface Props {
  slug: string
}

export default function RestaurantNavbar({slug}:Props) {
  return (
    <div className="flex gap-4">
      <Link href={`/restuarant/${slug}`}>Overview</Link>
      <Link href={`/restuarant/${slug}/menu`}>Menu</Link>
    </div>
  );
}
