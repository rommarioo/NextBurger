import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/raiting">Rating</Link>
        </li>
        <li>
          <Link href="/burgers">Burgers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
