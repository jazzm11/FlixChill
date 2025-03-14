import Navigation from "../components/navigation";
import Footer from "../components/footer";
import MovieCard from "../components/movie-card";

function MorePage() {
  return (
    <>
      <Navigation />
      <section className="movie-section">
        <div className="container">
          <h1>More</h1>
          <div className="movie-shows-container">
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MorePage;
