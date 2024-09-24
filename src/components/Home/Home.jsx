// import React, { useEffect, useState } from "react";
// import GameList from "../GameList/GameList";
// import Filter from "../Filter/Filter";
// import "./Home.css";
// import Card from "../Card/Card";

// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://spa.api.logicloop.io/api/games");
//         const jsonData = await response.json();
        
//         setData(jsonData);
//         console.log(jsonData); // Log the data to the console
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   function filterAndSortGames(games, { minRating, sortBy, searchName }) {
//     return games
//       .filter((game) => {
//         // Apply the minimum rating filter if minRating is defined
//         return minRating !== undefined
//           ? game.attributes.rating >= minRating
//           : true;
//       })
//       .filter((game) => {
//         // Apply the name search filter if searchName is provided
//         return searchName
//           ? game.attributes.name
//               .toLowerCase()
//               .includes(searchName.toLowerCase())
//           : true;
//       })
//       .sort((a, b) => {
//         // Dynamic sorting based on user input (sortBy can be 'name' or 'rating')
//         if (sortBy === "name") {
//           return a.attributes.name.localeCompare(b.attributes.name);
//         } else if (sortBy === "rating") {
//           return b.attributes.rating - a.attributes.rating;
//         }
//         return 0; // If no sortBy is provided, keep the original order
//       });
//   }

//   return (
//     <div className="main-contianer">
//       {/* <Filter/> */}

//       <div className="container">
//         <h2>Filter Results</h2>
//         <form action="">
//           <div className="ind-field">
//             <span>Name (contains)</span>
//             <input type="text" placeholder="Text string" />
//           </div>
//           <div className="ind-field">
//             <span>Minimum Score</span>
//             <input type="text" placeholder="1-10" />
//           </div>

//           <div className="ind-field">
//             <span>Order By</span>
//             <select name="Release Date" id="">
//               <option value="Score">Score</option>
//               <option value="Name">Name</option>
//             </select>
//           </div>

//           <button>Clear</button>
//         </form>
//       </div>

//       {/* <GameList /> */}

//       <div className="list-container">
//         {
//           data.map((item,value)=>(
//             <Card />
//           ))
//         }
        
//         {/* <Card />
//         <Card /> */}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import GameList from "../GameList/GameList";
import Filter from "../Filter/Filter";
import "./Home.css";
import Card from "../Card/Card";

const Home = () => {
  const [data, setData] = useState([]);

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

  function filterAndSortGames(games, { minRating, sortBy, searchName }) {
    return games
      .filter((game) => {
        // Apply the minimum rating filter if minRating is defined
        return minRating !== undefined
          ? game.attributes.rating >= minRating
          : true;
      })
      .filter((game) => {
        // Apply the name search filter if searchName is provided
        return searchName
          ? game.attributes.name
              .toLowerCase()
              .includes(searchName.toLowerCase())
          : true;
      })
      .sort((a, b) => {
        // Dynamic sorting based on user input (sortBy can be 'name' or 'rating')
        if (sortBy === "name") {
          return a.attributes.name.localeCompare(b.attributes.name);
        } else if (sortBy === "rating") {
          return b.attributes.rating - a.attributes.rating;
        }
        return 0; // If no sortBy is provided, keep the original order
      });
  }

  return (
    <div className="main-container">
      {/* <Filter/> */}

      <div className="container">
        <h2>Filter Results</h2>
        <form>
          <div className="ind-field">
            <span>Name (contains)</span>
            <input type="text" placeholder="Text string" />
          </div>
          <div className="ind-field">
            <span>Minimum Score</span>
            <input type="text" placeholder="1-10" />
          </div>

          <div className="ind-field">
            <span>Order By</span>
            <select name="Release Date">
              <option value="Score">Score</option>
              <option value="Name">Name</option>
            </select>
          </div>

          <button>Clear</button>
        </form>
      </div>

      {/* <GameList /> */}

      <div className="list-container">
        {
          data.map((item, index) => (
            <Card key={index} game={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;

