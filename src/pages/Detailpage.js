//import shit
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
//misc
/*
TO DO:
- fetch data from url
- put data in state
- display details
*/
const API_KEY = "756cb58a";
//component function
export default function Detailpage() {
  const params = useParams();
  const [detail, setDetail] = useState({});

  console.log(detail);
  const fetchDetail = async () => {
    console.log("is this working");
    console.log(params);
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${params.id}&apikey=${API_KEY}` // don't forget the apikey and the &
    );
    console.log(response.data);
    setDetail(response.data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div>
      <div>
        <h2>Movie details</h2>
        <h3>{detail.Title}</h3>
        <p>{detail.Plot}</p>
        <img src={detail.Poster} alt="Poster" />
      </div>
    </div>
  ); // is object so no mapping
}
