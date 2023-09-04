import Link from "next/link";

export default function NavLinks() {
  return (
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
  );
}
