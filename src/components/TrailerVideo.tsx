import type { Movie } from "../types/Movie";

type Props = {
  movie?: Movie;
};

const TrailerVideo = ({ movie }: Props) => {
  const trailer = movie?.videos?.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  if (!trailer) return null;

  return (
    <div className="mt-8">
      <iframe
        width="100%"
        height="400px"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerVideo;
