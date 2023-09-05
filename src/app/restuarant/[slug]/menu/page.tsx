import Header from "../components/Header";
import Reservation from "../components/Reservation";
import ResturantNavbar from "../components/RestaurantNavbar";
import Menu from "./components/Menu";
export default function Resturant() {
  return (
    <div className="-mt-20 max-w-7xl mx-auto p-6 grid gap-[5%] grid-cols-[67.5%,27.5%]">
      <div className="bg-white rounded-lg border-[1px] p-4">
        <ResturantNavbar />
        <hr className="my-4" />
        <Menu />
      </div>
      <Reservation />
    </div>
  );
}
