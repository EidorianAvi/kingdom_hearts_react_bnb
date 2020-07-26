import "./App.css";
import React from "react";
import CharacterContainer from "./components/CharacterContainer";
import CharacterForm from "./components/CharacterForm";
import Favorites from "./components/Favorites";
import EditForm from "./components/EditForm";
import Filters from "./components/Filters";

const charactersUrl = "http://localhost:4000/characters";
class App extends React.Component {
  state = {
    characters: [],
    favorites: [],
    filtered: [],
    homePage: true,
    editPage: false,
    addPage: false,
    editID: 0,
  };

  componentDidMount = () => {
    this.getCharacters();
  };

  getCharacters = () => {
    fetch(charactersUrl)
      .then((response) => response.json())
      .then((results) =>
        this.setState({
          characters: results,
        })
      );
  };

  addCharacter = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
    fetch(charactersUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });
  };

  lightFilter = () => {
    let filtered = this.state.characters.filter(
      (character) => character.alignment == "Light"
    );
    this.setState({
      filtered: filtered,
    });
  };

  darkFilter = () => {
    let filtered = this.state.characters.filter(
      (character) => character.alignment == "Darkness"
    );
    this.setState({
      filtered: filtered,
    });
  };

  addToFavorites = (character) => {
    if (
      !this.state.favorites.find((favorite) => favorite.id === character.id) &&
      this.state.favorites.length < 1
    ) {
      this.setState({
        favorites: [...this.state.favorites, character],
      });
    }
  };

  removeFromFavorites = (character) => {
    let favorites = this.state.favorites.filter(
      (favorite) => character.id !== favorite.id
    );
    this.setState({ favorites });
  };

  editAction = (props) => {
    this.setState({
      editPage: !this.state.editPage,
      editID: props.id,
    });
  };

  addAction = (event) => {
    this.setState({
      editPage: false,
      addPage: !this.state.addPage,
    });
  };

  editCharacter = (character) => {
    fetch(`${charactersUrl}/${this.state.editID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });
    window.location.reload(true);
  };

  deleteAction = (id) => {
    let characters = this.state.characters.filter(
      (character) => character.id !== id
    );
    fetch(`${charactersUrl}/${id}`, { method: "DELETE" });
    this.setState({ characters });
  };

  render() {
    const { characters, favorites } = this.state;

    return (
      <div className="App">
        <div className="banner">
          <h1>The Third Keyblade War</h1>
          <section className="buttons">
            <button onClick={this.addAction}>Add Character</button>
          </section>
        </div>
        <div className="body">
          {this.state.addPage ? (
            <CharacterForm
              addCharacter={this.addCharacter}
              addAction={this.addAction}
            />
          ) : null}
          {this.state.editPage ? (
            <EditForm
              editCharacter={this.editCharacter}
              editAction={this.editAction}
            />
          ) : null}
          <Filters
            lightFilter={this.lightFilter}
            darkFilter={this.darkFilter}
          />
          {this.state.filtered.length > 0 ? (
            <CharacterContainer
              characters={this.state.filtered}
              clickAction={this.addToFavorites}
              editAction={this.editAction}
              deleteAction={this.deleteAction}
            />
          ) : (
            <CharacterContainer
              characters={characters}
              clickAction={this.addToFavorites}
              editAction={this.editAction}
              deleteAction={this.deleteAction}
            />
          )}
          <Favorites
            favorites={favorites}
            clickAction={this.removeFromFavorites}
            editAction={this.editAction}
            deleteAction={this.deleteAction}
          />
        </div>
      </div>
    );
  }
}

export default App;
