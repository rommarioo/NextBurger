"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const ModalBurger = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="flex justify-center text-center text-white fixed top-[-80px] bottom-0 left-0 right-0 z-30  backdrop-blur-sm backdrop-brightness-50">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2    bg-white p-4 z-40  text-black rounded-lg flex items-center max-md:w-5/6  ">
        <button
          className="w-8 h-8 flex text-xl justify-center items-center bg-white p-5 absolute top-[-40px] right-[-40px] rounded-full shadow-md opacity-90 max-md:right-0 max-md:top-[-45px] "
          onClick={() => router.back()}
        >
          X
        </button>

        {children}
      </div>
    </div>
  );
};

export default ModalBurger;
