import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constance";
import Search from "./Search";

const NavBar = () => {
  return (
    <header className="py-3 border-b border-b-surfaceColor">
      <nav className="flex items-center justify-between max-container ">
        <Link to="/" className="text-2xl font-bold text-mintGreen">
          PROMOVIES
        </Link>
        <ul className="hidden text-gray-200 md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-mintGreen"
                    : "text-lightGray hover:text-mintGreen hover:font-semibold"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Search />
      </nav>
    </header>
  );
};

export default NavBar;
