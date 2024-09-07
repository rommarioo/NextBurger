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

export const getAllBurgers = async (): Promise<Burger[]> => {
  const res = await fetch("http://localhost:8000/item");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const BurgerMenu = async () => {
  const burgers = await getAllBurgers();

  return (
    <div className="grid grid-cols-3 gap-8 max-w-7xl max-lg:grid-cols-2 p-4">
      {burgers.map((el: Burger) => {
        return (
          <div
            key={el.id}
            className="flex flex-col rounded-lg pb-10 border  relative bg-white hover:scale-105  duration-300 "
          >
            <Image
              className="self-center rounded-t-lg w-full"
              width={350}
              height={200}
              src={`/burgers/${el.image}`}
              alt="asd"
            ></Image>
            <div className="p-2">
              <p className="font-extrabold text-center">{el.name}</p>
              <p className="font-bold ">
                price: {el.price}
                {"$"}
              </p>
            </div>

            <button className=" w-full bg-green-700 py-1 px-2 rounded-b-lg hover:text-white  hover:bg-green-600 duration-300 absolute right-0 bottom-0">
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BurgerMenu;
