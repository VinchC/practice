import MovieList from "./components/MovieList";
import MovieProvider from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
}

export default App;
