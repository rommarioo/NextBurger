import Link from "next/link";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-black ">
      <div className="flex items-center justify-between w-full ">
        <Link href="/">
          <FaHamburger size={40} />
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
