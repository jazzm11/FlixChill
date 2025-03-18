import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/src/views/search.css";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const API_KEY = "498da734"; // Replace with your OMDb API key

  const searchMovie = async () => {
    if (!query) return; // Don't fetch if input is empty

    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search); // Store movie results
    } else {
      setMovies([]); // Clear results if no movie found
    }
  };

  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
        <h1>Movie Search</h1>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovie}>Search</button>

        <div>
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <h2 className="font-bold">
                {movie.Title} ({movie.Year})
              </h2>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
