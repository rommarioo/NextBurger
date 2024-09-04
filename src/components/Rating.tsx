import { getRatings } from "@/helpers/getRatings";
import Image from "next/image";
import React from "react";

const Rating = async () => {
  const randomAvatar = Math.floor(Math.random() * 4);
  console.log(randomAvatar);
  const ratings = await getRatings();
  return (
    <div>
      {ratings.map((rating) => (
        <div
          className="flex max-w-7xl p-2 my-4 items-center gap-x-2 border rounded-xl"
          key={rating.id}
        >
          <Image
            className="hover:scale-125 duration-500"
            width={50}
            height={50}
            src={`/avatars/${Math.floor(Math.random() * (4 - 1) + 1)}.svg`}
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
