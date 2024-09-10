import Image from "next/image";
import React from "react";

type Burger = {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
};

const BurgerDisplay = ({ burger }: { burger: Burger }) => {
  return (
    <div className="text-black flex items-center justify-center gap-x-4">
      <Image
        src={`/burgers/${burger.image}`}
        alt="asd"
        width={400}
        height={200}
      ></Image>
      <div className="text-balance">
        <p>{burger.name}</p>
        <p>Description: {burger.description}</p>
        <p>Price: {burger.price}</p>
        <p>Weight: {burger.weight}</p>
      </div>
    </div>
  );
};

export default BurgerDisplay;
