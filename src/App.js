import React, { useState } from "react";

import Characters from "./components/Characters/Characters";
import NewCharacter from "./components/NewCharacter/NewCharacter";
import Logo from "./assets/RickAndMortyLogo.png";

import "./App.scss";

//TODO implement API
//scope component
const mockedCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
  },
  {
    id: 3,
    name: "Cynthia",
    status: "Dead",
    species: "Alien",
  },
];

function App() {
  const [characters, setCharacters] = useState(mockedCharacters);

  const addCharacterHandler = (character) => {
    setCharacters((previousCharacters) => {
      return [character, ...previousCharacters];
    });
  };

  return (
    <div className="app">
      <div className="app-logo">
        <img src={Logo} alt="logo" />
      </div>
      <NewCharacter onAddCharacter={addCharacterHandler} />
      <Characters characters={characters} />
    </div>
  );
}

export default App;
