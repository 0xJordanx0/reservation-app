export default function Header({name}:{name: string}) {
  const renderTitle = () => {
    const nameArray = name.split("-");
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`
    return nameArray.join(" ");
  }

  return (
    <div className="flex items-center justify-center bg-orange h-[30vh]">
      <div className="prose max-w-none text-center">
        <h1 className="text-center text-white capitalize text-7xl">{renderTitle()}</h1>
      </div>
    </div>
  );
}
