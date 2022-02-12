import { Outlet } from "remix";

export default function jokesRoute() {
  return (
    <div>
      <h1>Jokes</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
