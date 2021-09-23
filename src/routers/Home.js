import React from "react";
import Axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await Axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              const { id, title, year, summary, medium_cover_image, genres } =
                movie;
              return (
                <Movie
                  key={id}
                  id={id}
                  title={title}
                  year={year}
                  summary={summary}
                  poster={medium_cover_image}
                  genres={genres}
                />
              );
            })}
            )
          </div>
        )}
      </section>
    );
  }
}

export default Home;
