import React from "react";
import Header from "./components/Header";
import { Metadata } from "next";
import "react-datepicker/dist/react-datepicker.css";
import { notFound } from "next/navigation";
import { RestuarantInfo } from "../../../../types/global";
import Reservation from "./components/Reservation";
import prisma from "@/app/backend/prisma";

const fetchRestaurant = async (slug: string): Promise<RestuarantInfo> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      open_time: true,
      close_time: true,
      slug: true,
    },
  });

  if (!restaurant) {
    notFound();
  }
  return restaurant;
};

export const metadata: Metadata = {
  title: "Alfonso Restuarant | Yummy Foods",
  description: "Online Reservation System",
};

export default async function RestuarantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurant(params.slug);
  return (
    <section>
      <Header name={params.slug} />
      <div className="-mt-20 max-w-7xl mx-auto p-6 grid gap-[5%] grid-cols-[67.5%,27.5%]">
        {children}
        <Reservation
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
        />
      </div>
    </section>
  );
}
