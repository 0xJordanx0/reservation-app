import React from "react";

export default function Images({images}:{images: string[]}) {
  return (
    <div>
      <div className="prose text-xs mb-4">
        <h1>Photos ({images.length})</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <img className="rounded-md" src={image} />
        ))}
      </div>
    </div>
  );
}
