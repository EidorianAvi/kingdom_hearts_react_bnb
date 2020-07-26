import React from "react";
import Character from "./Character";

const Favorites = ({ favorites, clickAction, deleteAction, editAction }) => {
  const renderCharacters = () => {
    return favorites.map((favorite) => (
      <Character
        key={favorite.id}
        character={favorite}
        clickAction={clickAction}
        deleteAction={deleteAction}
        editAction={editAction}
      />
    ));
  };

  return favorites.length > 0 ? (
    <div className="favorite-characters">
      <h2>Favorite Three</h2>
      {renderCharacters()}
    </div>
  ) : null;
};

export default Favorites;
