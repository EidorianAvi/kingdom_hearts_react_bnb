import React from "react";
import Character from "./Character";

const CharacterContainer = ({
  characters,
  clickAction,
  editAction,
  deleteAction,
}) => {
  const renderCharacters = () => {
    return characters.map((character) => (
      <Character
        key={character.id}
        character={character}
        clickAction={clickAction}
        editAction={editAction}
        deleteAction={deleteAction}
      />
    ));
  };

  return <div className="character-container">{renderCharacters()}</div>;
};

export default CharacterContainer;
