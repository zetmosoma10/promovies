import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import useMovieStore from "../store";

type Props = {
  page: number;
};

const Pagination = ({ page }: Props) => {
  const setNextPage = useMovieStore((s) => s.setNextPage);
  const setPrevPage = useMovieStore((s) => s.setPrevPage);
  const pageNumber = useMovieStore((s) => s.movieQuery.page);
  console.log(pageNumber);

  return (
    <div className="flex items-center space-x-4">
      {pageNumber > 1 && (
        <button
          onClick={() => setPrevPage()}
          className="flex items-center space-x-2 text-gray-50 bg-surfaceColor px-4 py-2 rounded-3xl group active:bg-mintGreen font-medium"
        >
          <span className="text-gray-50">
            <FaAngleLeft />{" "}
          </span>
          <span>Prev</span>
        </button>
      )}
      <button
        onClick={() => setNextPage()}
        className="flex items-center space-x-2 text-gray-50 bg-surfaceColor px-4 py-2 rounded-3xl group active:bg-mintGreen font-medium"
      >
        <span>Next</span>
        <span className="text-gray-50">
          <FaAngleRight />{" "}
        </span>
      </button>
    </div>
  );
};

export default Pagination;
