import { Cuisine, Location, PRICE } from "@prisma/client";

// types

type User = {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
};

type SortOption = {
  name: string;
  href: string;
  current: boolean;
};

//Interfaces

interface Restuarant {
  id: number;
  name: string;
  description: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

interface RestuarantInfo {
  id: number;
  name: string;
  description: string;
  images: string[];
  slug: string;
}

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

export { SortOption, User, Restuarant, RestuarantInfo, SearchParams };
