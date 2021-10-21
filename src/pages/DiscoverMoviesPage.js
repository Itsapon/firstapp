//imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
  const searchText = "star";
  const [movies, setMovies] = useState([]);
  console.log("this is movies", movies);

  const fetchData = async () => {
    // console.log(searchText);
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`
    );
    console.log(response.data.Search);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Get ready to discover</p>
    </div>
  );
}
