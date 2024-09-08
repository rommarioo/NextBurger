import React from "react";
import BurgerDisplay from "./BurgerDisplay";
import { getBurgerbyId } from "@/helpers/getBurgerById";

const Burger = async ({ params }: { params: { id: string } }) => {
  console.log(params);
  const burger = await getBurgerbyId(params.id);
  return (
    <div>
      <BurgerDisplay burger={burger} />
    </div>
  );
};

export default Burger;
