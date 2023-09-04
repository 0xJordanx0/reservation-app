import ResturantItem from "./ResturantItem";
export default function ResturantListing() {
  return (
    <section className="max-w-7xl mx-auto p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {Array.from({length:3}, () => (
            <ResturantItem />
        ))}
      </div>
    </section>
  );
}
