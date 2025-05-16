import useMovieStore from "../store";
import type { Category } from "../types/Category";

type Props = {
  category: Category;
};

const SortSelector = ({ category }: Props) => {
  const setSort = useMovieStore((s) => s.setSort);
  const selectedSort = useMovieStore((s) => s.movieQuery[category].sort_by);

  const sortSelectors = [
    {
      label: "Newest",
      value: "primary_release_date.desc",
    },
    {
      label: "Name (A - Z)",
      value: "title.desc",
    },
    {
      label: "Most viewed",
      value: "popularity.dec",
    },
    {
      label: "Top rated",
      value: "vote_average.desc",
    },
  ];

  return (
    <div className="text-sm sm:text-base">
      <label className="block text-gray-50" id="sort" htmlFor="sort">
        Sort by
      </label>
      <select
        onChange={(event) => setSort(category, event.target.value)}
        value={selectedSort ?? ""}
        id="sort"
        className="p-2 font-medium rounded-md cursor-pointer text-gray-50 focus:outline-none bg-surfaceColor focus:border focus:border-mintGreen "
      >
        <option value="">--Choose--</option>
        {sortSelectors.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelector;
