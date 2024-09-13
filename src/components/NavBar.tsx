"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { state, setState } = useAppContext();
  return (
    <nav>
      <ul className="flex gap-5 text-base">
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer relative">
          <Link href="/cart">Shopping Cart</Link>
          <div className="absolute -top-3 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex justify-center items-center">
            {state.reduce((acc, el) => acc + el.count!, 0)}
          </div>
        </li>
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/raiting">Ratings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
