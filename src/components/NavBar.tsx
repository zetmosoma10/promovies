const NavBar = () => {
  return (
    <header className="py-3 border">
      <nav className="flex items-center justify-between max-container ">
        <a href="#" className="text-2xl font-bold shadow-lg text-gray-50">
          PROMOVIES
        </a>
        <ul className="hidden text-gray-200 sm:flex sm:items-center sm:space-x-5 md:space-x-8">
          <li>
            <a href="#" className="hover:font-semibold hover:text-mintGreen">
              Trending
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-semibold hover:text-mintGreen">
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-semibold hover:text-mintGreen">
              TV Shows
            </a>
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
