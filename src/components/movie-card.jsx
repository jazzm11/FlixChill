import "/src/views/movie-card.css";

function MovieCard(props) {
  return (
    <div className="card-box" src="/seriespage">
      <img src={props.image} id="card-img" />
      <div id="description">
        <h4>{props.name}</h4>
        <p>{props.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
