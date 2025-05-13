import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMovieStore from "../store";

const SearchPage = () => {
  const { search } = useLocation();
  const setSearch = useMovieStore((s) => s.setSearch);

  useEffect(() => {
    return () => setSearch("search", ""); // Clear search on unmount
  }, []);

  return (
    <section className="text-5xl font-semibold max-container text-gray-50">
      SearchPage - {search}
    </section>
  );
};

export default SearchPage;
