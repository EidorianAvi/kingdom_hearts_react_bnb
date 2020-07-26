import React from "react";

const Filters = (props) => {
  
  const handleClick = (event) => {
    props.addAction();
  }
  
  return (
    <div>
      <div className="filter-bar">
        <h2>~Filters~</h2>
        <button onClick={props.lightFilter}>- Light</button>
        <button onClick={props.darkFilter}>- Darkness</button>
      </div>
        <button className="add-button" onClick={handleClick}>+ Add Character</button>

      {/* <input
        type="text"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      /> */}
    </div>
  );
};

export default Filters;
