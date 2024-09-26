import React, { useEffect, useState } from "react";
import GameList from "../GameList/GameList";
import Filter from "../Filter/Filter";
import "./Home.css";
import Card from "../Card/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const[query,setQuery]=useState('');
  const [rating,setRating]=useState('');
  const [sortBy,setSortBy] = useState('');

  // console.log(rating);
  
  useEffect(() => {

  
    const fetchData = async () => {
      try {
        const response = await fetch("https://spa.api.logicloop.io/api/games");
        const jsonData = await response.json();

        // Assuming the API response has a 'games' array
        if (Array.isArray(jsonData.data)) {
          setData(jsonData.data); // Set the array of games
        } else {
          console.error("Expected an array but got:", jsonData);
        }

         console.log(jsonData); // Log the data to the console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div className="main-container">
      <Filter setQuery={setQuery} setRating={setRating} setSortBy={setSortBy}/>
      <GameList games={data} query={query} rating={rating} sortBy={sortBy}/>
    </div>
  );
};

export default Home;
