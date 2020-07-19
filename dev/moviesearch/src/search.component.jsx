import React, {useState} from "react";
import "./search.styles.css";

import MovieCard from './moviecard.component';


function SearchMovies() {
// states - input query, movies

const [query, setQuery] = useState('');

const [movies, setMovies] = useState([]);

const searchMovies = async (e) => {
  e.preventDefault();

  const url = `https://api.themoviedb.org/3/search/movie?api_key=144eb28e03f9fe0a965b68309759e825&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  } catch (err) {
    console.error(err);
  }
};

return (
    <>
  <form className="form" onSubmit={searchMovies}>
    <label
      className="label"
      id="myLabel"
      for="search"
      htmlFor="query"
      class="label"
    >
      Movie name
    </label>
    <input
      className="input"
      type="text"
      name="query"
      placeholder="i.e Jurassic Park"
      value={query} onChange={(e) => setQuery(e.target.value)}
    ></input>
    <button className="button" type="submit">
      Search
    </button>
  </form>

  <div className="card-list">
    {movies.filter(movie => movie.poster_path).map(movie => (
<MovieCard movie={movie} key={movie.id}/>
))}
</div>

  </>
);
}
export default SearchMovies;
