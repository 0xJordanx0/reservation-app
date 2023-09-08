import { notFound } from "next/navigation";
import { RestuarantInfo } from "../../../../types/global";
import Overview from "./components/Overview";
import Reservation from "./components/Reservation";
import RestuarantNavbar from "./components/RestaurantNavbar";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fetchRestaurant = async(slug: string): Promise<RestuarantInfo> => {
  const restaurant = await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      slug: true
    }
  })

  if(!restaurant){
    notFound()
  }
  return restaurant;
} 


export default async function Resturant({params}:{params: {slug: string}}) {
  const restaurant = await fetchRestaurant(params.slug);
  return (
    <div className="-mt-20 max-w-7xl mx-auto p-6 grid gap-[5%] grid-cols-[67.5%,27.5%]">
      <div className="bg-white rounded-lg border-[1px] p-4">
        <RestuarantNavbar slug={restaurant.slug} />
        <hr className="my-4" />
        <Overview restaurant={restaurant}/>
      </div>
      <Reservation />
    </div>
  );
}
