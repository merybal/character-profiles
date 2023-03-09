import React, { useState } from "react";

import CharacterList from "./components/CharacterList";
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
  // const characters = [
  //   {
  //     id: 1,
  //     firstName: "Rick",
  //     lastName: "Sanchez",
  //     age: "?",
  //   },
  //   {
  //     id: 1,
  //     firstName: "Morty",
  //     lastName: "Smith",
  //     age: "13",
  //   },
  // ];

  const addCharacterHandler = (character) => {
    setCharacters((previousCharacters) => {
      return [character, ...previousCharacters];
    });
  };

  return (
    <div className="App">
      <NewCharacter onAddCharacter={addCharacterHandler} />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
