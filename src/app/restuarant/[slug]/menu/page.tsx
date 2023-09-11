import { Metadata } from "next";
import Reservation from "../components/Reservation";
import ResturantNavbar from "../components/RestaurantNavbar";
import RestaurantMenu from "./components/RestaurantMenu";
import { Item } from "@prisma/client";
import prisma from "@/app/backend/prisma";

export const metadata: Metadata = {
  title: "Menu Of Alfonso Restuarant | Yummy Foods",
  description: "Online Reservation System",
};

const fetchItems = async (slug: string): Promise<Item[]> => {
  const restaurant = await prisma.restaurant.findUnique({
    where:
    {
      slug
    },
    select: {
      open_time: true,
      close_time: true,
      items: true
    }
  })

  if(!restaurant){
    throw new Error("null");
  }

  return restaurant.items;
}

export default async function ResturantMenu({params}:{params: {slug:string}}) {
  const restaurantMenu = await fetchItems(params.slug);
  return (
      <div className="bg-white rounded-lg border-[1px] p-4">
        <ResturantNavbar slug={params.slug} />
        <hr className="my-4" />
        <RestaurantMenu restaurantMenu={restaurantMenu} />
      </div>
  );
}
