import Description from "./Description";
import Rating from "./Rating";
import Images from "./Images";

export default function Overview() {
  return (
    <div className="flex flex-col gap-4 bg-white">
      <div className="prose text-xs">
        <h1>Alfonso Resturant</h1>
      </div>
      <Description />
      <Rating />
      <hr/>
      <Images />
    </div>
  );
}
