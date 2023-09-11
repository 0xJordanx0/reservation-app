import { notFound } from "next/navigation";
import { RestuarantInfo } from "../../../../types/global";
import Overview from "./components/Overview";
import RestuarantNavbar from "./components/RestaurantNavbar";
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

export default async function Resturant({params}:{params: {slug: string}}) {
  const restaurant = await fetchRestaurant(params.slug);
  return (
    <div className="bg-white rounded-lg border-[1px] p-4">
      <RestuarantNavbar slug={restaurant.slug} />
      <hr className="my-4" />
      <Overview restaurant={restaurant} />
    </div>
  );
}
