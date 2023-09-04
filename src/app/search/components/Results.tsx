import React from "react";
import ResultItem from "./ResultItem";
export default function Results() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }, (item, index) => (
          <ResultItem />
        ))}
      </div>
    </div>
  );
}
