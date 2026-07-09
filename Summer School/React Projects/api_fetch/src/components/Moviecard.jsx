import "../css/Moviecard.css"
function Moviecard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />

      <h2>{movie.Title}</h2>

      <p>Year: {movie.Year}</p>

      <p>Type: {movie.Type}</p>
    </div>
  );
}

export default Moviecard;