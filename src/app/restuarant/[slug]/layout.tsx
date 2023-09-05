import React from "react";
import Header from "./components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alfonso Restuarant | Yummy Foods",
  description: "Online Reservation System",
};

export default function RestuarantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
