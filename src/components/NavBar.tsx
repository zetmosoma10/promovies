import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constance";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "./Search";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const onOpen = () => {
    setIsSideBarOpen(true);
  };

  const onClose = () => {
    setIsSideBarOpen(false);
  };

  return (
    <header className="relative py-3 border-b border-b-surfaceColor">
      <nav className="flex items-center justify-between max-container ">
        <div className="flex items-center space-x-3">
          <GiHamburgerMenu
            onClick={onOpen}
            className="text-xl text-gray-200 md:hidden"
          />
          <Logo />
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
      {isSideBarOpen && (
        <div
          onClick={onClose}
          className="absolute inset-0 w-full h-screen z-40 bg-black bg-opacity-40 "
        ></div>
      )}
      <SideBar
        onClose={onClose}
        className={`absolute top-0 left-0 h-screen w-[60%] transition-transform duration-300 ease-in-out z-50 ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      />
    </header>
  );
};

export default NavBar;
