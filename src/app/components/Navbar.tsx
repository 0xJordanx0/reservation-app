import NavLinks from "./NavLinks"

export default function Navbar() {
  return (
    <div className="flex flex-col gap-8">
     <NavLinks />
      <div className="prose text-center">
        <h1 className="capitalize mb-12">yummy foods</h1>
      </div>
    </div>
  );
}
