import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="container">
      <h2>Filter Results</h2>
      <form action="">
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
        <select name="Release Date" id="">
          <option value="Score">Score</option>
          <option value="Name">Name</option>
        </select>
        </div>
        
      
        <button>Clear</button>
      </form>
    </div>
  );
};

export default Filter;
