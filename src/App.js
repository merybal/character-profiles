import React, { useState } from "react";

import Characters from "./components/Characters";
import NewCharacter from "./components/NewCharacter";

import "./App.css";

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
    <div className="App">
      <NewCharacter onAddCharacter={addCharacterHandler} />
      <Characters characters={characters} />
    </div>
  );
}

export default App;
