import Navigation from "../components/navigation";
import Footer from "../components/footer";
import MovieCard from "../components/movie-card";

function DramaPage() {
  return (
    <>
      <Navigation />
      <section className="movie-section">
        <div className="container">
          <h1>Drama</h1>
          <div className="movie-shows-container">
            <MovieCard
              image="/movie image/cabnw.png"
              name="Captain America: Brave New World"
              year="2025"
            />
            <MovieCard
              image="/movie image/cabnw.png"
              name="Captain America: Brave New World"
              year="2025"
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

export default DramaPage;
