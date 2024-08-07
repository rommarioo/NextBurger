import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <Link href="/">На главную</Link>
        </li>
        <li>
          <Link href="/about">О нас</Link>
        </li>
        <li>
          <Link href="/raiting">Отзывы</Link>
        </li>
        <li>
          <Link href="/burgers">Бургеры</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
