import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import Moviecard from "../components/Moviecard";

function App() {
  const movies = [
    {
      title: "Avengers Endgame",
      year: "2019",
      type: "Movie",
      poster: "",
    },
    {
      title: "Batman Begins",
      year: "2005",
      type: "Movie",
      poster: "",
    },
  ];

  const [movieName, setMovieName] = useState("");
  const [filterMovies, setFilterMovies] = useState(movies);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(movieName.toLowerCase())
    );

    setFilterMovies(filtered);
  }, [movieName]);

  return (
    <div className="container">
      <h1>Movie Search App</h1>

      <Searchbar
        movieName={movieName}
        setMovieName={setMovieName}
      />

      <div className="movie-container">
        {filterMovies.length > 0 ? (
          filterMovies.map((movie, index) => (
            <Moviecard key={index} movie={movie} />
          ))
        ) : (
          <h2>No Movie Found</h2>
        )}
      </div>
    </div>
  );
}

export default App;