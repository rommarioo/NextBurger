import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/">На главную</Link>
        </li>
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/about">О нас</Link>
        </li>
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/raiting">Отзывы</Link>
        </li>
        <li className="hover:translate-y-[-3px] duration-500 cursor-pointer">
          <Link href="/burgers">Бургеры</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
