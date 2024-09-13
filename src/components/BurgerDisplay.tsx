import Image from "next/image";
import React from "react";

type Burger = {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
  count?: number;
};

const BurgerDisplay = ({ burger }: { burger: Burger }) => {
  return (
    <div className="text-black flex items-center gap-x-4 w-fit max-lg:flex-col ">
      <Image
        className="self-center rounded-t-lg w-1/2 max-lg:w-full"
        src={`/burgers/${burger.image}`}
        alt="asd"
        width={500}
        height={200}
      ></Image>
      <div className=" flex flex-col self-start  max-lg:self-center max-lg:w-full">
        <p className="font-extrabold text-center text-2xl mb-2">
          {burger.name}
        </p>
        <p>Description: {burger.description}</p>
        <div>
          <p className="font-bold">Nutritional value</p>
          <div className="flex flex-wrap gap-1">
            <p className="text-left mt-2">
              Weight: {burger.weight}
              {"g"}
            </p>
            <p className="text-left mt-2">
              Weight: {burger.weight}
              {"g"}
            </p>
            <p className="text-left mt-2">
              Weight: {burger.weight}
              {"g"}
            </p>
            <p className="text-left mt-2">
              Weight: {burger.weight}
              {"g"}
            </p>
            <p className="text-left mt-2">
              Weight: {burger.weight}
              {"g"}
            </p>
            <p className="text-left mt-2">
              Weight: {burger.weight}
              {"g"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerDisplay;
