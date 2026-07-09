import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import Moviecard from "./components/Moviecard";
import "./App.css"

function App() {
  const [movieName, setMovieName] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  async function getDefaultMovies() {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=86b7eb44"
    );

    const data = await response.json();

    if (data.Response === "True") {
      setFilteredMovies(data.Search);
    }
  }

  useEffect(() => {
    getDefaultMovies();
  }, []);

  return (
    <div className="container">
      <h1>Movie Search App</h1>

      <Searchbar
        movieName={movieName}
        setMovieName={setMovieName}
        setFilteredMovies={setFilteredMovies}
      />

      <div className="movie-container">
        {filteredMovies.map((movie) => (
          <Moviecard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;