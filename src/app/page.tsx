import BurgerMenu from "@/components/BurgerMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description",
  keywords: ["home", "page"],
  authors: [{ name: "Roman Larionov" }],
};

type Burger = {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
};

export const getAllBurgers = async (): Promise<Burger[]> => {
  const res = await fetch("http://localhost:8000/item", {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const burgers = await getAllBurgers();
  return (
    <div className="flex  flex-col items-center justify-between  text">
      <h1 className="text-3xl p-4 font-bold">Welcome to world of Burgers</h1>
      <BurgerMenu burgers={burgers} />
    </div>
  );
}
