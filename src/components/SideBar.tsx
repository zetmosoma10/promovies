import { Link } from "react-router-dom";
import { navLinks } from "../constance";
import { RxCross2 } from "react-icons/rx";

type Props = {
  className: string;
};

const SideBar = ({ className }: Props) => {
  return (
    <aside
      className={`${className} flex flex-col justify-between py-5 text-gray-50 bg-surfaceColor`}
    >
      <div>
        <div className="flex items-center justify-end pr-5">
          <RxCross2 className="text-xl text-gray-50" />
        </div>
        <ul className="mt-6 text-lg  space-y-3">
          {navLinks.map((link) => (
            <li className="px-5" key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/" className=" self-center text-2xl font-bold text-mintGreen">
        PROMOVIES
      </Link>
    </aside>
  );
};

export default SideBar;
