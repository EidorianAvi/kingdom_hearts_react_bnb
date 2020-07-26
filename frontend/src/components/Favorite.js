import React from "react";

const Favorite = ({ character, clickAction }) => {
  const handleClick = (event) => {
    clickAction(character);
  };

  return (
    <div className="favorite-character">
      <img src={character.image} onClick={handleClick} />
    </div>
  );
};

export default Favorite;
