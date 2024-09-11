import Image from "next/image";
import React from "react";
import Link from "next/link";
type Burger = {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
};

const BurgerMenu = ({ burgers }: { burgers: Burger[] }) => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-7xl max-lg:grid-cols-2 p-4">
      {burgers.map((el: Burger) => {
        return (
          <div
            key={el.id}
            className="flex flex-col rounded-lg border bg-white "
          >
            <Link href={`/burgers/${el.id}`}>
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
              <button className=" w-full bg-green-700 py-1 px-2 rounded-b-lg hover:text-white  hover:bg-green-600 duration-300 ">
                Add to cart
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BurgerMenu;
