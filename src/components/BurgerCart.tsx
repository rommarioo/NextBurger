"use client";
import { useAppContext } from "@/context";
import { Burger } from "@/helpers/types";
import Image from "next/image";
import React from "react";

const BurgerCart = () => {
  const { state, setState } = useAppContext();

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
    <div className="flex flex-col items-center text p-4 max-w-4xl ">
      <h2 className="text-4xl">Cart</h2>
      {state.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        state.map((el, index) => {
          return (
            <div
              className="w-full flex items-center justify-around  p-4 m-2 rounded-lg gap-x-8 shadow-md"
              key={el.id}
            >
              {index + 1}
              <Image
                className="rounded-lg"
                src={`/burgers/${el.image}`}
                width={300}
                height={100}
                alt={el.name}
              ></Image>
              <div className="flex flex-col w-full">
                <p className="font-bold">{el.name}</p>
                <p>
                  Price:{el.price}
                  {"$"}
                </p>
                <p>Quantity:{el.count}</p>
              </div>
              <div className="flex flex-col gap-y-2 text-2xl">
                <button
                  className="p-2 border rounded-lg hover:bg-gray-400 duration-300"
                  onClick={() => addMoreBurgers(el)}
                >
                  +
                </button>
                <button
                  className=" border p-2 rounded-lg hover:bg-gray-400 duration-300"
                  onClick={() => removeBurgers(el)}
                >
                  -
                </button>
              </div>
            </div>
          );
        })
      )}
      <div className="flex text-2xl font-bold">
        Total price:
        {Math.round(
          state.reduce((acc, el) => {
            return acc + el.price * el.count!;
          }, 0)
        ) + "$"}
      </div>
    </div>
  );
};

export default BurgerCart;
