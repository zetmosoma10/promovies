import useMovies from "../hooks/useMovies";

const MoviesPage = () => {
  const { data } = useMovies();

  return (
    <ul>
      {data?.results.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MoviesPage;
