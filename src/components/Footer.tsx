import { Link } from "react-router-dom";
import { navLinks } from "../constance";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex justify-center mt-16 py-10 text-gray-50 bg-surfaceColor">
      <div className="flex flex-col items-center">
        <Logo />
        <p className="mt-2 text-sm text-gray-50 text-opacity-50">
          Just pick and watch
        </p>
        <ul className="flex items-center space-x-5 mt-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.label}
                className="hover:text-mintGreen duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-base mt-2 text-gray-50 text-opacity-50">
          &copy; {new Date().getFullYear()} promovies. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
