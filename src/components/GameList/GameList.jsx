import React, { useState } from "react";
import Card from "../Card/Card";
import "./GameList.css";

const GameList = ({ games, query, rating, sortBy }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = games.slice(firstIndex, lastIndex);
  const npage = Math.ceil(games.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


  function nextPage(){
    if(currentPage!==lastIndex)
    {
      setCurrentPage(currentPage+1)
    }
    else if(currentPage===lastIndex-1)
    {
      setCurrentPage(firstIndex)
    }
  }
  function prePage()
  {
    if(currentPage!==firstIndex)
    {
      setCurrentPage(currentPage-1)
    }
    else if(currentPage==firstIndex+1)
    {
      setCurrentPage(lastIndex);
    }
    
  }

  return (
    <div className="list-container">


      {
        records
          .filter((indgame) =>
            (!query || indgame.attributes.name.toLowerCase().includes(query)) &&
            indgame.attributes.rating > rating
          )
          .sort((a, b) => {
            if (sortBy === 'name') {
              return b.attributes.name.localeCompare(a.attributes.name); 
            } else if (sortBy === 'score') {
              return b.attributes.rating - a.attributes.rating; 
            }
            return 0; 
          })
          .map((game, index) => (
            <Card key={index} game={game} />
          ))}

     
      <nav className="btm-pgn-sec">
        
          <button onClick={prePage} className={(currentPage==1)?'button-disabled':''}>
            Prev
          </button>
     
           <button onClick={nextPage} className={(currentPage==npage)?'button-disabled':''}>
            Next
          </button>
        
      </nav>
    </div>
  );
};

export default GameList;
