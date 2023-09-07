import { Cuisine, Location, PRICE } from "@prisma/client";


type SubCategory = {
    name: string;
    href: string;
};

type FilterOption = {
    value: string;
    label: string;
    checked: boolean;
};
  
type Filter = {
    id: string;
    name: string;
    options: FilterOption[];
};

//Interfaces

interface Restuarant{
    id: number,
    name: string,
    description: string,
    main_image: string,
    cuisine: Cuisine,
    location: Location,
    price: PRICE,
    slug: string
}

interface RestuarantInfo {
    id: number,
    name: string,
    description: string,
    images: string[],
    slug: string
}

export {SubCategory, FilterOption, Filter, Restuarant, RestuarantInfo};