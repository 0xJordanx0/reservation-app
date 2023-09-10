import Link from "next/link";
import { Restuarant } from "../../../types/global";

interface Props {
  restaurant: Restuarant;
}
export default function ResturantItem({ restaurant }: Props) {
  return (
    <div className="max-w-sm bg-white border border-orange rounded-lg shadow-md h-fit">
      <Link href={`/restuarant/${restaurant.slug}`}>
        <img className="rounded-t-lg h-56 w-full" src={restaurant.main_image} />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {restaurant.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 line-clamp-3">
          {restaurant.description}
        </p>
        <Link
          href={`/restuarant/${restaurant.slug}`}
          className="inline-flex items-center w-full justify-center px-3 py-2 text-sm font-medium text-center text-white bg-orange rounded-lg focus:ring-0 focus:outline-none"
        >
          View Food
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
