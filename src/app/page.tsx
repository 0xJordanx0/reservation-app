"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <>
      <section>
        <div className="hero bg-[#FB8500] h-[60vh]">
          <div className="flex flex-col justify-start py-12 items-center gap-4 h-full">
            <div className="flex flex-col gap-8">
              <nav>
                <ul className="flex gap-4">
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                  <Link href="/search" className="hover:text-white">
                    Search
                  </Link>
                  <Link href="/resturants" className="hover:text-white">
                    Resturants
                  </Link>
                  <Link href="/#" className="hover:text-white">
                    Contact Us
                  </Link>
                </ul>
              </nav>
              <div className="prose text-center">
                <h1 className="capitalize mb-12">yummy foods</h1>
              </div>
            </div>
            <div className="text-center">
              <img src="/food.png" className="w-60" />
              <div className="prose">
                <h2 className="text-xl font-semibold">Online Foods Booking</h2>
              </div>
            </div>
            <div className="flex gap-2 sm:w-2/3 md:w-1/2 xl:w-1/3">
              <input
                name="search"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="rounded p-2.5 w-full"
                placeholder="Search Resturants"
              />
              <button className="bg-[#FFB703] hover:bg-yellow-500 hover:text-white p-2.5 rounded"
              onClick={()=> {
                if(location === "alfonso") return router.push("/search");
              }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
              <img className="rounded-t-lg" src="/resturant.webp" alt="" />
            </a>
            <div className="p-5">
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
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
              <img className="rounded-t-lg" src="/resturant.webp" alt="" />
            </a>
            <div className="p-5">
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
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <a href="#">
              <img className="rounded-t-lg" src="/resturant.webp" alt="" />
            </a>
            <div className="p-5">
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
      </section>
    </>
  );
}
