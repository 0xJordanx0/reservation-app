import { Item } from "@prisma/client";

export default function MenuItem({item}:{item: Item}) {
  return (
    <div className="flex flex-col border-[1px] rounded-md p-4 gap-4">
      <div>
        <div className="prose">
          <h4>{item.name}</h4>
        </div>
        <p>{item.description}</p>
      </div>
      <span className="font-bold">${item.price}</span>
    </div>
  );
}
