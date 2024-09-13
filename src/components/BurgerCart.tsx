"use client";
import { useAppContext } from "@/context";
import Image from "next/image";
import React from "react";

const BurgerCart = () => {
  const { state, setState } = useAppContext();
  return (
    <div className="flex flex-col items-center text p-4 max-w-4xl ">
      <h2 className="text-4xl">Cart</h2>
      {state.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        state.map((el, index) => {
          return (
            <div
              className="w-full flex items-center bg-slate-300 p-2 m-2 rounded-lg gap-x-4 shadow-md"
              key={el.id}
            >
              {index + 1}
              <Image
                src={`/burgers/${el.image}`}
                width={200}
                height={200}
                alt={el.burgerName}
              ></Image>
              <div className="flex flex-col w-full">
                <p className="font-bold">{el.burgerName}</p>
                <p>
                  price:{el.price}
                  {"$"}
                </p>
                <p>count:{el.count}</p>
              </div>
            </div>
          );
        })
      )}
      <div className="flex">
        Total:
        {state.reduce((acc, el) => {
          return acc + el.price * el.count!;
        }, 0) + "$"}
      </div>
    </div>
  );
};

export default BurgerCart;
