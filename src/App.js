import { useEffect, useState } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const getMovies1 = async (url) => {
  const moviesResp = await fetch(url);
  const moviesJson = await moviesResp.json();
  const { results } = moviesJson;
  return results;
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await getMovies1(FEATURED_API);
      setMovies(res);
    };
    load();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const load = async () => {
      const res = await getMovies1(SEARCH_API + search);
      setMovies(res);
    };
    if (search.length > 0) load();
    setSearch("");
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const onClickHandler = () => {
    const load = async () => {
      const res = await getMovies1(FEATURED_API);
      setMovies(res);
    };
    load();
  };

  return (
    <>
      <header>
        <div className="popular" onClick={onClickHandler}>
          Popular
        </div>
        <form onSubmit={submitHandler}>
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="container">
        {movies.map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      </div>
    </>
  );
};

export default App;
