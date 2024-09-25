import React, { useState } from "react";
import Card from "../Card/Card";
import "./GameList.css";
const GameList = ({ games, query ,rating,sortBy}) => {
  // console.log(games);
   console.log(sortBy);

  // const filtergames = games.filter((indgame) =>
  //   indgame.attributes.name.toLowerCase().includes(`query`)
  // );
  // console.log(filtergames);

  return (
    <div className="list-container">
      {games
        .filter((indgame) =>
          (!query || indgame.attributes.name.toLowerCase().includes(query) ) &&
          indgame.attributes.rating > rating
        )
        .sort((a, b) => {
          if (sortBy === 'name') {
            return b.attributes.name.localeCompare(a.attributes.name); // Sort by name in descending order
          } else if (sortBy === 'score') {
            return b.attributes.rating - a.attributes.rating; // Sort by rating in descending order
          }
          return 0; // If no sorting criteria is provided
        })
        .map((game, index) => (
          <Card key={index} game={game} />
        ))}

      {/*    
   
      {
        games.filter((indgame)=> indgame.attributes.name.toLowerCase().includes('SEGA'))
      }
      {games.map((game, index) => (
        <Card key={index} game={game} />
      ))}
     */}
    </div>
  );
};

export default GameList;
