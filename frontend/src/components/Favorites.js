import React from "react";
import Favorite from "./Favorite";

const Favorites = ({ favorites, clickAction }) => {
  const renderCharacters = () => {
    return favorites.map((favorite) => (
      <Favorite
        key={favorite.id}
        character={favorite}
        clickAction={clickAction}
      />
    ));
  };

  return (
    <div className="favorite-characters">
      <h2>Favorite Character</h2>
      {renderCharacters()}
    </div>
  );
};

export default Favorites;
