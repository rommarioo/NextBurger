import React from "react";
import BurgerDisplay from "../../../components/BurgerDisplay";
import { getBurgerbyId } from "@/helpers/getBurgerById";
import ModalBurger from "@/components/ModalBurger";

const Burger = async ({ params }: { params: { id: string } }) => {
  console.log(params);
  const burger = await getBurgerbyId(params.id);
  return (
    <ModalBurger>
      <BurgerDisplay burger={burger} />
    </ModalBurger>
  );
};

export default Burger;
