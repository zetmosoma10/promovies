import { Link } from "react-router-dom";
import { navLinks } from "../constance";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Logo";

type Props = {
  className: string;
  onClose: () => void;
};

const SideBar = ({ className, onClose }: Props) => {
  return (
    <aside
      className={`${className} flex flex-col justify-between md:hidden py-5 text-gray-50 bg-surfaceColor`}
    >
      <div>
        <div className="flex items-center justify-end pr-5">
          <RxCross2 onClick={onClose} className="text-xl text-gray-50" />
        </div>
        <ul className="mt-6 text-lg  space-y-3">
          {navLinks.map((link) => (
            <li className="px-5" key={link.label}>
              <Link
                to={link.path}
                onClick={onClose}
                className="active:text-mintGreen"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="self-center">
        <Logo />
      </div>
    </aside>
  );
};

export default SideBar;
