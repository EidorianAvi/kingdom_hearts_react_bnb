import React from "react";

const Character = ({ character, clickAction, editAction, deleteAction }) => {
  const handleClick = (event) => {
    clickAction(character);
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    editAction(character);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteAction(character.id);
  };

  const { name, image, first_appearance, alignment } = character;

  return (
    <div className="character-card" onClick={handleClick}>
      <h3>{name}</h3>
      <img src={image} alt="Oh no!" />
      <div className="info-section">
        <h4>{first_appearance}</h4>
        <h4>{alignment}</h4>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Character;
