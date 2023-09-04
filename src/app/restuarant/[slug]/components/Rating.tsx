import { StarIcon } from "@heroicons/react/24/solid";
export default function Rating() {
  return (
    <div className="flex gap-4">
      <div className="flex">
        <StarIcon className="h-6 w-6 text-orange" />
        <StarIcon className="h-6 w-6 text-orange" />
        <StarIcon className="h-6 w-6 text-orange" />
        <StarIcon className="h-6 w-6 text-orange" />
        <StarIcon className="h-6 w-6 text-orange" />
      </div>
      <span>4.98</span>
     <span>109 Reviews</span>
    </div>
  );
}
