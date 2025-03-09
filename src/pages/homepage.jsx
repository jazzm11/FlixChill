import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import "/src/views/homepage.css";
import Footer from "../components/footer";
import MovieCard from "../components/movie-card";

function HomePage() {
  return (
    <>
      <Navigation />
      <section className="first-section">
        <img src="/public/background.png" />
        <div className="first-section-div">
          <div className="first-section-content">
            <h1 id="header-text">Spider-Man: Across the Spider-Verse</h1>
            <p>2023 Action/Sci-Fi 2h 20m 9/10</p>
            <p>
              Teen Miles Morales teams up with Gwen Stacy on a new adventure,
              facing sinister foe The Spot and a vast legion of parallel heroes
              in the Multiverse. hello
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
            <div className="movies-box">
              <MovieCard
                image="/movie image/interstellar.png"
                name="Interstellar"
                year="2014"
              />
              <MovieCard
                image="/movie image/johnwick4.png"
                name="John Wick: Chapter 4"
                year="2023"
              />
              <MovieCard
                image="/movie image/moana2.png"
                name="Moana 2"
                year="2024"
              />
              <MovieCard
                image="/movie image/venom.png"
                name="Venom: The Last Dance"
                year="2024"
              />
              <MovieCard
                image="/movie image/terrifier3.png"
                name="Terrifier 3"
                year="2024"
              />
              <MovieCard
                image="/movie image/theapprentice.png"
                name="The Apprentice"
                year="2024"
              />
              <MovieCard
                image="/movie image/despicableme4.png"
                name="Despicable Me 4"
                year="2024"
              />
              <MovieCard
                image="/movie image/smile2.png"
                name="Smile 2"
                year="2024"
              />
              <MovieCard
                image="/movie image/romulus.png"
                name="Alien: Romulus"
                year="2024"
              />
              <MovieCard
                image="/movie image/thebikeriders.png"
                name="The Bikeriders"
                year="2024"
              />
              <MovieCard
                image="/movie image/thegorge.png"
                name="The Gorge"
                year="2025"
              />
              <MovieCard
                image="/movie image/sonic3.png"
                name="Sonic The Hedge Dog 3"
                year="2025"
              />
            </div>
          </div>
          <div className="third-section-content1-tvshows">
            <h2>Tv Shows</h2>
            <div className="tvshows-box">
              <MovieCard
                image="/movie image/daredevil.png"
                name="Daredevil: Born Again"
                year="2025"
              />
              <MovieCard
                image="/movie image/youngsheldon.png"
                name="Young Sheldon"
                year="2017-2024"
              />
              <MovieCard
                image="/movie image/suits.png"
                name="Suits"
                year="2011-2019"
              />
              <MovieCard
                image="/movie image/squidgame.png"
                name="Squid Game"
                year="2021-2024"
              />
              <MovieCard
                image="/movie image/outerbanks.png"
                name="Outer Banks"
                year="2020-2024"
              />
              <MovieCard
                image="/movie image/tsitp.png"
                name="The Summer I Turned Pretty"
                year="2022"
              />
              <MovieCard
                image="/movie image/ehc.png"
                name="Everybody Hates Chris"
                year="2005-2009"
              />
              <MovieCard
                image="/movie image/thesimpsons.png"
                name="The Simpsons"
                year="1989-2024"
              />
              <MovieCard
                image="/movie image/rickandmorty.png"
                name="Rick and Morty"
                year="2013-2023"
              />
              <MovieCard
                image="/movie image/teampølsa.png"
                name="Team Pølsa"
                year="2025"
              />
              <MovieCard
                image="/movie image/vgs.png"
                name="VGS"
                year="2022-2024"
              />
              <MovieCard
                image="/movie image/skam.png"
                name="SKAM"
                year="2015-2017"
              />
            </div>
          </div>
        </div>
        <div className="third-section-content2">
          <h2>Trendings</h2>
          <div className="third-section-content2-trendings">
            <MovieCard
              image="/movie image/cabnw.png"
              name="Captain America: Brave New World"
              year="2025"
            />
            <MovieCard
              image="/movie image/thegorge.png"
              name="The Gorge"
              year="2025"
            />
            <MovieCard
              image="/movie image/sonic3.png"
              name="Sonic the Hedgedog 3"
              year="2025"
            />
            <MovieCard
              image="/movie image/loveable.png"
              name="Loveable"
              year="2024"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
