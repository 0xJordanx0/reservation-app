"use client";

import React, { useState } from "react";
import ResturantListing from "./components/ResturantListing";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <ResturantListing />
    </>
  );
}
