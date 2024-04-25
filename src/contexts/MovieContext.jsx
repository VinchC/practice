import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([
    {
      movie_id: 1,
      title: "Harry Potter and the Sorcerers Stone",
      release_year: 2001,
    },
    {
      movie_id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      release_year: 2002,
    },
    {
      movie_id: 3,
      title: "Harry Potter and the Prison of Azkaban",
      release_year: 2004,
    },
  ]);
  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

MovieProvider.propTypes = {
  children: PropTypes.shape({
    movie_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_year: PropTypes.number.isRequired,
  }).isRequired,
};

export const useTheme = () => useContext(MovieContext);
