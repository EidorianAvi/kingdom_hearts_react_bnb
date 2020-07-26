import React from "react";

const Filters = (props) => {
  return (
    <div>
      <div className="filter-bar">
        <h2>~Filters~</h2>
        <button onClick={props.lightFilter}>- Light</button>
        <button onClick={props.darkFilter}>- Darkness</button>
      </div>
    </div>
  );
};

export default Filters;
