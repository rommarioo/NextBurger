import Rating from "@/components/Rating";
import React from "react";

const Ratings = () => {
  return (
    <div className="flex min-h[100%] flex-col items-center p-20 bg-white text">
      <h1 className="text-4xl">Ratings</h1>
      <Rating />
    </div>
  );
};

export default Ratings;
