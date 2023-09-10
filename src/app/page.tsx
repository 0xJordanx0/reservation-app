import ResturantListing from "./components/ResturantListing";
import Header from "./components/Header";
import { Suspense } from "react";
import LoadingRestaurants from "./components/LoadingRestaurants";


export default async function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingRestaurants />}>
        <ResturantListing />
      </Suspense>
    </>
  );
}
