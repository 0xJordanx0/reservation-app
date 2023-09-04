import React from "react";

export default function Images() {
  return (
    <div>
      <div className="prose text-xs mb-4">
        <h1>Photos</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <img className="rounded-md" src="/resturant.webp" />
        <img className="rounded-md" src="/resturant.webp" />
        <img className="rounded-md" src="/resturant.webp" />
      </div>
    </div>
  );
}
