import { getRatings } from "@/helpers/getRatings";
import Image from "next/image";
import React from "react";

const Rating = async () => {
  const ratings = await getRatings();
  return (
    <div>
      {ratings.map((rating) => (
        <div
          className="flex max-w-7xl p-2 my-4 items-center gap-4 border rounded-xl"
          key={rating.id}
        >
          <Image
            width={50}
            height={50}
            src={`/avatar.png`}
            alt="avatar"
          ></Image>
          <div className="flex flex-col p-2 border-l-2">
            <span className="font-bold">{rating.email}</span>
            <span className="text-justify font-light">{rating.body}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rating;
