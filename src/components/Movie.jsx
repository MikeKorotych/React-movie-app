import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ data }) => {
  const { title, poster_path, overview, vote_average, release_date } = data;
  // console.log(data);

  const rate = (vote) => {
    if (vote >= 7) {
      return "green";
    } else if (vote > 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
        }
        alt={title}
      />
      <div className="descr">
        <div className="title">{title}</div>
        <span className={`${rate(vote_average)}`}>{vote_average}</span>
      </div>
      <div className="overview">
        <div className="overview-title">{title}</div>
        <div className="overview-text">{overview}</div>
        <div className="overview-date">Release: {release_date}</div>
      </div>
    </div>
  );
};

export default Movie;
