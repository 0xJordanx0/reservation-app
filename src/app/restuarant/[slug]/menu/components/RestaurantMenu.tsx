import React from "react";
import MenuItem from "./MenuItem";
import { Item } from "@prisma/client";
export default function RestaurantMenu({
  restaurantMenu
}: {
  restaurantMenu: Item[];
}) {
  return (
    <div>
      <div className="prose text-xs">
        <h1>Menu</h1>
      </div>
      <div className="grid grid-cols-2 py-2 gap-4">
        {restaurantMenu.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </div>
  );
}
