import BurgerMenu from "@/components/BurgerMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description",
  keywords: ["home", "page"],
  authors: [{ name: "Roman Larionov" }],
};

export default function Home() {
  return (
    <div className="flex min-h[100%] flex-col items-center justify-between py-4  text">
      <h1 className="text-3xl p-2 font-bold">Welcome to world of Burgers</h1>
      <BurgerMenu />
    </div>
  );
}
