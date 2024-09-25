import React from "react";
import "./Filter.css";

const Filter = ({setQuery,setRating,setSortBy}) => {

  return (
    <div className="container">
      <h2>Filter Results</h2>
      <form className="filter-form" action="">
        <div className="ind-field">
        <span>Name (contains)</span>
        <input onChange={(e)=>setQuery(e.target.value.toLowerCase())} type="text" placeholder="Text string" />

        </div>
        <div className="ind-field">
        <span>Minimum Score</span>
        <input onChange={(e)=>setRating(e.target.value.toLowerCase())} type="text" placeholder="1-10" />
        </div>

        <div className="ind-field">
        <span>Order By</span>
        {/* onChange={(e)=>setSortBy(e.target.value.toLowerCase())} */}
        <select className="slt-sec" onChange={(e)=>setSortBy(e.target.value)} name="Release Date" id="">
        <option value="" disabled selected>Release Date</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
        </select>
        </div>
        
        <div className="btm-sec">
        <button id="clr-btn">Clear</button>
        </div>
        
      </form>
    </div>
  );
};

export default Filter;
