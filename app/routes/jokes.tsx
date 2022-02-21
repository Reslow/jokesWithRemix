import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import styleUrl from "../styles/jokes.css";
import { Outlet, Link } from "remix";
import { db } from "~/utils/db.server";
import { Joke } from "@prisma/client";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleUrl,
    },
  ];
};

type LoaderData = { jokes: Array<Joke> };

export let loader: LoaderFunction = async () => {
  let jokes = await db.joke.findMany();

  let data: LoaderData = { jokes };
  return data;
};

export default function jokesRoute() {
  let data = useLoaderData<LoaderData>();
  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random Jokes</Link>
            <p>here are a few jokes to check out:</p>
            <ul>
              {data.jokes.map((j) => (
                <li key={j.id}>{j.name}</li>
              ))}
            </ul>
            <Link to="new" className="button">
              add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
