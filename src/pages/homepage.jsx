import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import "/src/views/homepage.css";
import Footer from "../components/footer";
import MovieCard from "../components/movie-card";

function HomePage() {
  // Array of movie data
  const movies = [
    {
      image: "/movie image/interstellar.png",
      name: "Interstellar",
      year: "2014",
    },
    {
      image: "/movie image/johnwick4.png",
      name: "John Wick: Chapter 4",
      year: "2023",
    },
    { image: "/movie image/moana2.png", name: "Moana 2", year: "2024" },
    {
      image: "/movie image/venom.png",
      name: "Venom: The Last Dance",
      year: "2024",
    },
    { image: "/movie image/terrifier3.png", name: "Terrifier 3", year: "2024" },
    {
      image: "/movie image/theapprentice.png",
      name: "The Apprentice",
      year: "2024",
    },
    {
      image: "/movie image/despicableme4.png",
      name: "Despicable Me 4",
      year: "2024",
    },
    { image: "/movie image/smile2.png", name: "Smile 2", year: "2024" },
    { image: "/movie image/romulus.png", name: "Alien: Romulus", year: "2024" },
    {
      image: "/movie image/thebikeriders.png",
      name: "The Bikeriders",
      year: "2024",
    },
    { image: "/movie image/thegorge.png", name: "The Gorge", year: "2025" },
    {
      image: "/movie image/sonic3.png",
      name: "Sonic The Hedge Dog 3",
      year: "2025",
    },
  ];

  // Array of TV show data
  const tvShows = [
    {
      image: "/movie image/daredevil.png",
      name: "Daredevil: Born Again",
      year: "2025",
    },
    {
      image: "/movie image/youngsheldon.png",
      name: "Young Sheldon",
      year: "2017-2024",
    },
    { image: "/movie image/suits.png", name: "Suits", year: "2011-2019" },
    {
      image: "/movie image/squidgame.png",
      name: "Squid Game",
      year: "2021-2024",
    },
    {
      image: "/movie image/outerbanks.png",
      name: "Outer Banks",
      year: "2020-2024",
    },
    {
      image: "/movie image/tsitp.png",
      name: "The Summer I Turned Pretty",
      year: "2022",
    },
    {
      image: "/movie image/ehc.png",
      name: "Everybody Hates Chris",
      year: "2005-2009",
    },
    {
      image: "/movie image/thesimpsons.png",
      name: "The Simpsons",
      year: "1989-2024",
    },
    {
      image: "/movie image/rickandmorty.png",
      name: "Rick and Morty",
      year: "2013-2023",
    },
    { image: "/movie image/teampølsa.png", name: "Team Pølsa", year: "2025" },
    { image: "/movie image/vgs.png", name: "VGS", year: "2022-2024" },
    { image: "/movie image/skam.png", name: "SKAM", year: "2015-2017" },
  ];

  // Array of trending items
  const trendings = [
    {
      image: "/movie image/cabnw.png",
      name: "Captain America: Brave New World",
      year: "2025",
    },
    { image: "/movie image/thegorge.png", name: "The Gorge", year: "2025" },
    {
      image: "/movie image/sonic3.png",
      name: "Sonic the Hedgedog 3",
      year: "2025",
    },
    { image: "/movie image/loveable.png", name: "Loveable", year: "2024" },
  ];

  // Shuffle the movies, TV shows, and trending items arrays
  let shuffledMovies = movies.sort(() => Math.random() - 0.5);
  let shuffledTvShows = tvShows.sort(() => Math.random() - 0.5);
  let shuffledTrendings = trendings.sort(() => Math.random() - 0.5);

  // Generate JSX for movies using a for loop
  let movieCards = [];
  for (let i = 0; i < shuffledMovies.length; i++) {
    movieCards.push(
      <MovieCard
        key={i}
        image={shuffledMovies[i].image}
        name={shuffledMovies[i].name}
        year={shuffledMovies[i].year}
      />
    );
  }

  // Generate JSX for TV shows using a for loop
  let tvShowCards = [];
  for (let i = 0; i < shuffledTvShows.length; i++) {
    tvShowCards.push(
      <MovieCard
        key={i}
        image={shuffledTvShows[i].image}
        name={shuffledTvShows[i].name}
        year={shuffledTvShows[i].year}
      />
    );
  }

  // Generate JSX for trending items using a for loop
  let trendingCards = [];
  for (let i = 0; i < shuffledTrendings.length; i++) {
    trendingCards.push(
      <MovieCard
        key={i}
        image={shuffledTrendings[i].image}
        name={shuffledTrendings[i].name}
        year={shuffledTrendings[i].year}
      />
    );
  }

  return (
    <>
      <Navigation />
      <section className="first-section">
        <img src="/background.png" />
        <div className="first-section-div">
          <div className="first-section-content">
            <h1 id="header-text">Spider-Man: Across the Spider-Verse</h1>
            <p>2023 Action/Sci-Fi 2h 20m 9/10</p>
            <p>
              Teen Miles Morales teams up with Gwen Stacy on a new adventure,
              facing sinister foe The Spot and a vast legion of parallel heroes
              in the Multiverse.
            </p>
            <button id="watch-btn">Watch Trailer</button>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="second-section-content">
          <Link to="/action">Action</Link>
          <Link to="/adventure">Adventure</Link>
          <Link to="/drama">Drama</Link>
          <Link to="/comedy">Comedy</Link>
          <Link to="/more">More...</Link>
        </div>
      </section>
      <section className="third-section">
        <div className="third-section-content1">
          <div className="third-section-content1-movies">
            <h2>Movies</h2>
            <div className="movies-box">{movieCards}</div>
          </div>
          <div className="third-section-content1-tvshows">
            <h2>Tv Shows</h2>
            <div className="tvshows-box">{tvShowCards}</div>
          </div>
        </div>
        <div className="third-section-content2">
          <h2>Trendings</h2>
          <div className="third-section-content2-trendings">
            {trendingCards}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
