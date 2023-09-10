import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default async function Header() {
  const session =  await getServerSession(options);
  
  return (
    <section>
      <div className="hero bg-[#FB8500] h-[60vh]">
        <div className="flex flex-col justify-start py-12 items-center gap-4 h-full">
          <Navbar session={session}/>
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
