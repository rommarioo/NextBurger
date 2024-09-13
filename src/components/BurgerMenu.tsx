"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/context";

type Burger = {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
  count?: number;
};

const BurgerMenu = ({ burgers }: { burgers: Burger[] }) => {
  const { state, setState } = useAppContext();
  const onClick = (burger: Burger) => {
    setState([
      ...state,
      {
        id: burger.id,
        burgerName: burger.name,
        image: burger.image,
        price: burger.price,
        count: 1,
      },
    ]);
  };

  const addMoreBurgers = (burger: Burger) => {
    setState(
      state.map((el) => {
        if (el.id === burger.id) {
          return {
            ...el,
            count: el.count ? el.count + 1 : 1,
          };
        }
        return el;
      })
    );
  };

  const removeBurgers = (burger: Burger) => {
    if (state.find((el) => el.id === burger.id)?.count === 1) {
      setState(state.filter((el) => el.id !== burger.id));
    } else {
      setState(
        state.map((el) => {
          if (el.id === burger.id) {
            return {
              ...el,
              count: el.count ? el.count - 1 : 1,
            };
          }
          return el;
        })
      );
    }
  };

  return (
    <div className="grid grid-cols-3 gap-8 max-w-7xl max-lg:grid-cols-2 p-4">
      {burgers.map((el: Burger) => {
        return (
          <div
            key={el.id}
            className="flex flex-col rounded-lg border bg-white "
          >
            <Link href={`/burgers/${el.id}`} scroll={false}>
              <Image
                className="self-center rounded-t-lg w-full"
                width={350}
                height={200}
                src={`/burgers/${el.image}`}
                alt="asd"
              ></Image>
              <div className="p-2">
                <p className="font-extrabold text-center">{el.name}</p>
                <p className="font-bold">
                  price: {el.price}
                  {"$"}
                </p>
              </div>
            </Link>
            {state.find((item) => item.id === el.id) ? (
              <div className="flex">
                <button
                  onClick={() => removeBurgers(el)}
                  className=" w-[50%] bg-red-700 py-1 px-2 rounded-bl-lg hover:text-white  hover:bg-red-600 duration-300 "
                >
                  Remove
                </button>
                <button
                  onClick={() => addMoreBurgers(el)}
                  className="w-[50%] bg-green-700 py-1 px-2 rounded-br-lg hover:text-white  hover:bg-green-600 duration-300 "
                >
                  Add more {state.find((item) => item.id === el.id)?.count}
                </button>
              </div>
            ) : (
              <button
                onClick={() => onClick(el)}
                className=" w-full bg-green-700 py-1 px-2 rounded-b-lg hover:text-white  hover:bg-green-600 duration-300 "
              >
                Add to cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BurgerMenu;
