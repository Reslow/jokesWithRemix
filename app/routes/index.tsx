import type { LinksFunction } from "remix";
import { Link } from "remix";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <section className="conatiner">
      <section className="content">
        <h1>
          Remix <span>jokes</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes"> Read jokes</Link>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
}
