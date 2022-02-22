import { Joke } from "@prisma/client";
import { db } from "~/utils/db.server";
import { LoaderFunction, useLoaderData, Link } from "remix";

type LoaderData = { joke: Joke | null };

export let loader: LoaderFunction = async ({ params }) => {
  let data: LoaderData = {
    joke: await db.joke.findUnique({
      where: { id: params.jokeId },
    }),
  };
  return data;
};

export default function JokeRoute() {
  let data = useLoaderData<LoaderData>();
  return (
    <div>
      <h1> here is your joke</h1>
      <p>{data.joke?.content}</p>
    </div>
  );
}
