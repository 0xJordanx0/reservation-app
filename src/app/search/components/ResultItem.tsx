import React from "react";
import Link from "next/link";

export default function ResultItem() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
      <img className="rounded-l w-96" src="/resturant.webp" alt="" />
      <div className="max-w-sm bg-white border border-gray-200 rounded-r shadow-md">
        <div className="flex flex-col h-full p-4 sm:px-6 sm:py-0 justify-center">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Alfonso Restuarant
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            magnam animi magni eum deleniti laudantium!
          </p>
          <Link
            href="#"
            className="inline-flex items-center w-full justify-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-0 focus:outline-none"
          >
            View Food
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
