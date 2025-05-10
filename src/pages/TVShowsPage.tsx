import MovieCard from "../components/MovieCard";
import useTVShows from "../hooks/useTVShows";

const TVShowsPage = () => {
  const { data, isError, error } = useTVShows();

  if (isError) throw error;

  return (
    <section>
      <h2 className="figtree text-gray-50 font-medium text-3xl  mt-6">
        TV Shows
      </h2>
      <div className="grid-container mt-5">
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TVShowsPage;
