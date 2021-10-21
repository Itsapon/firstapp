//imports
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//misc
const API_KEY = "756cb58a";

// 1. Write an async function
// 2. Make a request with axios
// 3. Console.log the response
// 4. Call the function inside useEffect
// 5. Check the console.log to find the data
// 6. Put the data in the state (setState(response.blabla))

//component function
export default function DiscoverMoviesPage() {
  const searchText = "Marvel";
  const [movies, setMovies] = useState([]);
  // console.log("this is movies", movies);

  const fetchData = async () => {
    // console.log(searchText);
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`
    );
    console.log(response.data.Search);
    setMovies(response.data.Search);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Get ready to discover:</h2>
      <div>
        {!movies
          ? "loading..."
          : movies.map((q) => {
              return (
                <div key={q.imdbID}>
                  <Link to={`/movie/${q.imdbID}`}>
                    <h3>{q.Title}</h3>
                  </Link>{" "}
                  <h3>{q.Year}</h3>
                  <img src={q.Poster} alt="Poster" />
                </div>
              );
            })}
      </div>
    </div>
  );
}
