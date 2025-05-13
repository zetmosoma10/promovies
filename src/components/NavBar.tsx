import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRef, type FormEvent } from "react";
import useMovieStore from "../store";

const NavBar = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useMovieStore((s) => s.setSearch);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const input = ref.current;

    if (input && input.value !== "") {
      setSearch("search", input.value);
      const encoded = encodeURIComponent(input.value);
      navigate(`/search?query=${encoded}`);
      input.value = "";
    }
  };

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
        <form onSubmit={onSubmit}>
          <input
            ref={ref}
            className="px-2 py-1 text-gray-200 bg-transparent border rounded-3xl border-catedGray caret-catedGray focus: right-2 focus:ring-catedGray indent-2 "
            type="text"
            placeholder="Search movies..."
          />
        </form>
      </nav>
    </header>
  );
};

export default NavBar;
