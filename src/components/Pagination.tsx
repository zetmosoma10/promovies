import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className="flex items-center space-x-4 ">
      <button className="flex items-center space-x-2 text-gray-50 bg-surfaceColor px-4 py-2 rounded-3xl group active:bg-mintGreen font-medium">
        <span className="text-gray-50">
          <FaAngleLeft />{" "}
        </span>
        <span>Prev</span>
      </button>
      <button className="flex items-center space-x-2 text-gray-50 bg-surfaceColor px-4 py-2 rounded-3xl group active:bg-mintGreen font-medium">
        <span>Next</span>
        <span className="text-gray-50">
          <FaAngleRight />{" "}
        </span>
      </button>
    </div>
  );
};

export default Pagination;
