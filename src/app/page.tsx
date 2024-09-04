import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description",
  keywords: ["home", "page"],
  authors: [{ name: "Roman Larionov" }],
};

export default function Home() {
  return (
    <main className="flex min-h[100%] flex-col items-center justify-between p-20 bg-white text">
      <h1 className="text-4xl p-2">Добро пожаловать в мир бургеров!</h1>

      <p className="text-2xl">
        В нашей бургерной мы знаем, что настоящий бургер — это не просто еда,
        это искусство! Каждый наш бургер создан с любовью и страстью, чтобы
        подарить вам незабываемые вкусовые ощущения. Мы используем только самые
        свежие и качественные ингредиенты, чтобы каждая котлета, каждая булочка
        и каждый соус были на высшем уровне.
      </p>
    </main>
  );
}
