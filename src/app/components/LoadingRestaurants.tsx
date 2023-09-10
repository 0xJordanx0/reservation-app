import React from "react";

export default function LoadingRestaurants() {
  return (
    <section className="max-w-7xl mx-auto p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {Array.from({ length: 3 }, () => (
          <div className="w-full bg-gray-200 border border-gray-300 rounded-lg shadow-md h-fit animate-pulse">
            <div className="h-56 bg-gray-300 rounded-t-lg"></div>
            <div className="p-5">
              <div className="h-6 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 mb-3"></div>
              <div className="h-8 w-3/4 bg-gray-300 mb-3"></div>
              <div className="h-10 w-1/2 bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
