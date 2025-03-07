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
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
            <MovieCard
              image="/movie image/interstellar.png"
              name="Interstellar"
              year="2014"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MoviePage;
