import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-5 text-base">
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/about">Shopping Cart</Link>
        </li>
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/raiting">Ratings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
