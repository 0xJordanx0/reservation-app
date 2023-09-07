import React from "react";
import Header from "./components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alfonso Restuarant | Yummy Foods",
  description: "Online Reservation System",
};

export default function RestuarantLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {slug: string}
}) {
  return (
    <section>
      <Header name={params.slug}/>
      {children}
    </section>
  );
}
