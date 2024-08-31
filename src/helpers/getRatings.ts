interface Ratings {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export async function getRatings(): Promise<Ratings[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=20"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
