import "../css/Searchbar.css"
function Searchbar(props) {
  async function searchMovie() {
    if (props.movieName.trim() === "") {
      alert("Please enter a movie name");
      return;
    }

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=86b7eb44&s=${props.movieName}`
    );

    const data = await response.json();

    if (data.Response === "True") {
      props.setFilteredMovies(data.Search);
    } else {
      props.setFilteredMovies([]);
      alert(data.Error);
    }
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search movies..."
        value={props.movieName}
        onChange={(e) => props.setMovieName(e.target.value)}
      />

      <button onClick={searchMovie}>Search</button>
    </div>
  );
}

export default Searchbar;