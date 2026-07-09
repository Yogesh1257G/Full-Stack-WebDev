function Searchbar({ movieName, setMovieName }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={movieName}
      onChange={(e) => setMovieName(e.target.value)}
    />
  );
}

export default Searchbar;