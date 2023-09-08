import Results from "./components/Results";
import Header from "./components/Header";
import Filter from "./components/Filter";
import FilterToggle from "./components/FilterToggle";
import Sort from "./components/Sort";
import { Location, Cuisine, PrismaClient } from "@prisma/client";
import { Restuarant, SearchParams } from "../../../types/global";

const prisma = new PrismaClient();

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const fetchRestaurants = async (searchParams: SearchParams): Promise<Restuarant[]> => {
  const select = {
    id: true,
    name: true,
    description: true,
    main_image: true,
    slug: true,
    price: true,
    cuisine: true,
    location: true,
  }

  const where: any = {}

  if (searchParams.city){
    const location = {
      name: {
        equals: searchParams.city.toLowerCase()
      }
    }
    where.location = location;
  }

  if(searchParams.cuisine){
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase()
      }
    }
    where.cuisine = cuisine;
  }

  const restaurants = await prisma.restaurant.findMany({
    where,
    select
  });
  
  return restaurants;
};

const fetchLocations = async():Promise<Location[]> => {
  const locations = await prisma.location.findMany();
  return locations;
}

const fetchCuisines= async():Promise<Cuisine[]> => {
  const cuisines = await prisma.cuisine.findMany();
  return cuisines;
}

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurants(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Results
            </h1>
            <div className="flex items-center">
              <Sort sortOptions={sortOptions}/>
              <FilterToggle locations={locations} cuisines={cuisines} />
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <Filter locations={locations} cuisines={cuisines} searchParams={searchParams} />
              <div className="lg:col-span-3">
                <Results restaurants={restaurants}/>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
