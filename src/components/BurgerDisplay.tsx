"use client";
import { useAppContext } from "@/context";
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
  const { state, setState } = useAppContext();
  const onClick = () => {
    setState([
      ...state,
      {
        burgerName: burger.name,
        image: burger.image,
        price: burger.price,
      },
    ]);
    console.log(state);
  };
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

        <button
          className="font-bold text-left border self-end px-6 py-2 rounded-lg bg-green-600 hover:text-white mt-4 
         hover:bg-green-700 duration-300 max-lg:self-center "
          onClick={onClick}
        >
          {"Buy for "}
          {burger.price}
          {"$"}
        </button>
      </div>
    </div>
  );
};

export default BurgerDisplay;
