import { Restuarant } from "../../../types/global";
import ResturantItem from "./ResturantItem";
import prisma from "../backend/prisma";

const fetchRestauarants = async (): Promise<Restuarant[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
  });

  return restaurants;
}

export default async function ResturantListing() {
  const restaurants = await fetchRestauarants();
  return (
    <section className="max-w-7xl mx-auto p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {restaurants.map((restaurant) => (
          <ResturantItem restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}
