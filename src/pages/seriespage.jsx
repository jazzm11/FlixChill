import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "/src/views/movie_shows.css";
import MovieCard from "../components/movie-card";

function SeriesPage() {
  return (
    <>
      <Navigation />
      <section className="movie-section">
        <div className="container">
          <h1>Series</h1>
          <div className="movie-shows-container">
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/ehc.png"
              name="Everybody Hates Chris"
              year="2005-2009"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/tsitp.png"
              name="The Summer I Turned Pretty"
              year="2022"
            />
            <MovieCard
              image="/movie image/skam.png"
              name="SKAM"
              year="2015-2017"
            />
            <MovieCard
              image="/movie image/outerbanks.png"
              name="Outer Banks"
              year="2020-2024"
            />
            <MovieCard
              image="/movie image/vgs.png"
              name="VGS"
              year="2022-2024"
            />
            <MovieCard
              image="/movie image/squidgame.png"
              name="Squid Game"
              year="2021-2024"
            />
            <MovieCard
              image="/movie image/teampølsa.png"
              name="Team Pølsa"
              year="2025"
            />
            <MovieCard
              image="/movie image/suits.png"
              name="Suits"
              year="2011-2019"
            />
            <MovieCard
              image="/movie image/rickandmorty.png"
              name="Rick and Morty"
              year="2013-2023"
            />
            <MovieCard
              image="/movie image/youngsheldon.png"
              name="Young Sheldon"
              year="2017-2024"
            />
            <MovieCard
              image="/movie image/thesimpsons.png"
              name="The Simpsons"
              year="1989-2024"
            />
            <MovieCard
              image="/movie image/daredevil.png"
              name="Daredevil: Born Again"
              year="2025"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SeriesPage;
