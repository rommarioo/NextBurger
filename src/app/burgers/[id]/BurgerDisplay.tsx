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
  return (
    <div className="text-black">
      <h3>{burger.name}</h3>
      <p>{burger.description}</p>
      <p>{burger.price}</p>
      <p>{burger.weight}</p>
      <p>{burger.image}</p>
    </div>
  );
};

export default BurgerDisplay;
