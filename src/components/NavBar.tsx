import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="py-3 border">
      <nav className="flex items-center justify-between max-container ">
        <Link to="/" className="text-2xl font-bold shadow-lg text-mintGreen">
          PROMOVIES
        </Link>
        <ul className="hidden text-gray-200 sm:flex sm:items-center sm:space-x-5 md:space-x-8">
          <li>
            <Link
              to="trending"
              className="hover:font-semibold hover:text-mintGreen"
            >
              Trending
            </Link>
          </li>
          <li>
            <Link
              to="movies"
              className="hover:font-semibold hover:text-mintGreen"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="tvshows"
              className="hover:font-semibold hover:text-mintGreen"
            >
              TV Shows
            </Link>
          </li>
        </ul>
        <input
          className="px-2 py-1 text-gray-200 bg-transparent border rounded-3xl border-catedGray caret-catedGray focus: right-2 focus:ring-catedGray indent-2 "
          type="text"
          placeholder="Search movies..."
        />
      </nav>
    </header>
  );
};

export default NavBar;
