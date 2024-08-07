"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [time, setTime] = useState(5);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h[100%] flex-col items-center justify-between p-20 bg-white text">
      <h1 className="text-3xl p-2 mb-4">404 Page Not Found</h1>
      <Link
        href="/"
        className="font-bold text-2xl duration-500 hover:scale-125 "
      >
        Перейти на главную
      </Link>
      или автоматически через {time} сек
    </main>
  );
};

export default NotFound;
