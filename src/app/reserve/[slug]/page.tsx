import { Metadata } from "next";
import Header from "./components/Header";
export const metadata: Metadata = {
  title: "Menu Of Alfonso Restuarant | Yummy Foods",
  description: "Online Reservation System",
};

export default function Reserve() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-4">
        <div className="prose">
          <h3>You're almost done!</h3>
        </div>
        <div className="flex flex-col gap-4 py-4 w-fit">
          <div className="flex">
            <img className="w-80 rounded-lg" src="/resturant.webp" />
            <div className="p-4 pt-0">
              <div className="prose">
                <h4>Alfonso Restuarant</h4>
              </div>
              <div className="flex gap-4">
                <span>Sep 5, 2023</span>
                <span>7:30 PM</span>
                <span>3 People</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <input
                className="border-2 rounded-md p-2 w-full"
                placeholder="First name"
              />
              <input
                className="border-2 rounded-md p-2 w-full"
                placeholder="Last name"
              />
            </div>
            <div className="flex gap-4 my-2">
              <input
                className="border-2 rounded-md p-2 w-full"
                placeholder="Phone Number"
              />
              <input className="border-2 rounded-md p-2 w-full" placeholder="Email" />
            </div>
            <div className="flex gap-4">
              <input
                className="border-2 rounded-md p-2 w-full"
                placeholder="Occasion (Optional)"
              />
              <input
                className="border-2 rounded-md p-2 w-full"
                placeholder="Requests (Optional)"
              />
            </div>
          </div>
          <button className="bg-orange p-2 text-white rounded-md hover:text-black">Complete Reservation</button>
        </div>
      </div>
    </>
  );
}
