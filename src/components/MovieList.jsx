import { useTheme } from "../contexts/MovieContext";

function MovieList() {
  const { movies, setMovies } = useTheme();

  return (
    <>
      <h1>Movie List</h1>
      {movies && (
        <section>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                {movie.title} ({movie.release_year})
              </li>
            ))}
          </ul>
        </section>
      )}
      {movies.length < 4 && (
        <button
          onClick={() =>
            setMovies([
              ...movies,
              {
                movie_id: 4,
                title: "Harry Potter and the Goblet of Fire",
                release_year: 2004,
              },
            ])
          }
        >
          More
        </button>
      )}
    </>
  );
}

export default MovieList;
