import Rating from "@/components/Rating";
import React from "react";

const Ratings = () => {
  return (
    <main className="flex min-h[100%] flex-col items-center justify-between p-20 bg-white text">
      <h1 className="text-4xl">Отзывы</h1>
      <Rating />
    </main>
  );
};

export default Ratings;
