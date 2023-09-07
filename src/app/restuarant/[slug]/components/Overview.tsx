import Description from "./Description";
import Rating from "./Rating";
import Images from "./Images";
import { RestuarantInfo } from "../../../../../types/global";

export default function Overview({restaurant}:{restaurant: RestuarantInfo}) {
  return (
    <div className="flex flex-col gap-4 bg-white">
      <div className="prose text-xs">
        <h1>{restaurant.name}</h1>
      </div>
      <Description description = {restaurant.description}/>
      <Rating />
      <hr/>
      <Images images={restaurant.images}/>
    </div>
  );
}
