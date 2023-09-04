import React from "react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div>
      <div className="prose text-xs">
        <h1>Menu</h1>
      </div>
      <div className="grid grid-cols-2 py-2">
       <MenuItem />
      </div>
    </div>
  );
}
