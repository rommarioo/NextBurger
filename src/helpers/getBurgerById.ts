type Burger = {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
};

export const getBurgerbyId = async (id: string): Promise<Burger> => {
  const res = await fetch(`http://localhost:8000/item/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
