import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  return (
    <header className="py-3 border-b border-b-surfaceColor">
      <nav className="flex items-center justify-between max-container ">
        <Link to="/" className="text-2xl font-bold text-mintGreen">
          PROMOVIES
        </Link>
        <ul className="hidden text-gray-200 md:flex md:items-center md:space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-mintGreen"
                  : "text-lightGray hover:text-mintGreen hover:font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="trending"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-mintGreen"
                  : "text-lightGray hover:text-mintGreen hover:font-semibold"
              }
            >
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink
              to="movies"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-mintGreen"
                  : "text-lightGray hover:text-mintGreen hover:font-semibold"
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tv-shows"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-mintGreen"
                  : "text-lightGray hover:text-mintGreen hover:font-semibold"
              }
            >
              TV Shows
            </NavLink>
          </li>
        </ul>
        <Search />
      </nav>
    </header>
  );
};

export default NavBar;
