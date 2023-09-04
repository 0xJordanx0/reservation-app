import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-8">
      <nav>
        <ul className="flex gap-4">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/search" className="hover:text-white">
            Search
          </Link>
          <Link href="/resturants" className="hover:text-white">
            Resturants
          </Link>
          <Link href="/#" className="hover:text-white">
            Contact Us
          </Link>
        </ul>
      </nav>
      <div className="prose text-center">
        <h1 className="capitalize mb-12">yummy foods</h1>
      </div>
    </div>
  );
}
