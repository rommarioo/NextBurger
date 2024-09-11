import BurgerDisplay from "@/components/BurgerDisplay";
import ModalBurger from "@/components/ModalBurger";
import { getBurgerbyId } from "@/helpers/getBurgerById";
import React from "react";

const Burger = async ({ params }: { params: { id: string } }) => {
  const burger = await getBurgerbyId(params.id);
  return (
    <ModalBurger>
      <BurgerDisplay burger={burger} />
    </ModalBurger>
  );
};

export default Burger;
