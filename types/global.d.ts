import { Cuisine, Location, PRICE } from "@prisma/client";

type SortOption = {
    name: string,
    href: string,
    current: boolean
}

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

interface SearchParams {
    city?: string, 
    cuisine?: string, 
    price?: PRICE 
}

export {SortOption, Restuarant, RestuarantInfo, SearchParams};