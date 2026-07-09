function Moviecard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.poster}
        alt={movie.title}
      />

      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Type: {movie.type}</p>
    </div>
  );
}

export default Moviecard;