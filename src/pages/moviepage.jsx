import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "/src/views/movie_shows.css";
import MovieCard from "../components/movie-card";

function MoviePage() {
  return (
    <>
      <Navigation />
      <section className="movie-section">
        <div className="container">
          <h1>Movies</h1>
          <div className="movie-shows-container">
            <MovieCard
              image="/movie image/sonic3.png"
              name="Sonic The Hedge Dog 3"
              year="2025"
            />
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
              image="/movie image/romulus.png"
              name="Alien: Romulus"
              year="2024"
            />
            <MovieCard
              image="/movie image/despicableme4.png"
              name="Despicable Me 4"
              year="2024"
            />
            <MovieCard
              image="/movie image/thegorge.png"
              name="The Gorge"
              year="2025"
            />
            <MovieCard
              image="/movie image/theapprentice.png"
              name="The Apprentice"
              year="2024"
            />
            <MovieCard
              image="/movie image/thebikeriders.png"
              name="The Bikeriders"
              year="2024"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
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
              image="/movie image/loveable.png"
              name="Loveable"
              year="2024"
            />
            <MovieCard
              image="/movie image/moana2.png"
              name="Moana 2"
              year="2024"
            />
            <MovieCard
              image="/movie image/cabnw.png"
              name="Captain America: Brave New World"
              year="2025"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MoviePage;
