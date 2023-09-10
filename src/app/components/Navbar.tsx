'use client';
import NavLinks from "./NavLinks";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function Navbar({session}:{session: Session}) {
  return (
    <div className="max-w-7xl flex flex-col gap-8 w-full items-center">
      <div className="flex w-full justify-around items-center">
        <div>
          <NavLinks />
        </div>
        {session && (
          <div>
            <button
              className="btn bg-white p-2 px-3 rounded-lg"
              onClick={()=>signOut()}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
      <div className="prose text-center">
        <h1 className="capitalize mb-12">yummy foods</h1>
      </div>
    </div>
  );
}
