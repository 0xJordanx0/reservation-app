import Header from "./components/Header";
import Overview from "./components/Overview";
import Reservation from "./components/Reservation";
import RestuarantNavbar from "./components/RestaurantNavbar";
export default function Resturant() {
  return (
    <section>
      <Header />
      <div className="-mt-20 max-w-7xl mx-auto p-6 grid gap-[5%] grid-cols-[67.5%,27.5%]">
        <div className="bg-white rounded-lg border-[1px] p-4">
          <RestuarantNavbar />
          <hr className="my-4" />
          <Overview />
        </div>
        <Reservation />
      </div>
    </section>
  );
}
