import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <section>
      <div className="hero bg-[#FB8500] h-[60vh]">
        <div className="flex flex-col justify-start py-12 items-center gap-4 h-full">
          <Navbar />
          <div className="text-center">
            <img src="/food.png" className="w-60" />
            <div className="prose">
              <h2 className="text-xl font-semibold">Online Food Reservation</h2>
            </div>
          </div>
         <SearchBar />
        </div>
      </div>
    </section>
  );
}
