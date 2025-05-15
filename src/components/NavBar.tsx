import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constance";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "./Search";
import SideBar from "./SideBar";

const NavBar = () => {
  return (
    <header className="relative py-3 border-b border-b-surfaceColor">
      <SideBar className="absolute top-0 left-0 h-screen w-[60%]" />
      <nav className="flex items-center justify-between max-container ">
        <div className="flex items-center space-x-3">
          <GiHamburgerMenu className="text-xl text-gray-200" />
          <Link to="/" className="text-2xl font-bold text-mintGreen">
            PROMOVIES
          </Link>
        </div>
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
