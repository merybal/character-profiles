import React, { useState } from "react";

import Characters from "components/Characters/Characters";
import NewCharacter from "components/NewCharacter/NewCharacter";
// import Logo from "./assets/RickAndMortyLogo.png";
import Banner from "assets/Banner.jpg";

import styles from "./App.module.scss";

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
  {
    id: 4,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
  {
    id: 5,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
  },
  {
    id: 6,
    name: "Cynthia",
    status: "Dead",
    species: "Alien",
  },
  {
    id: 7,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
  {
    id: 8,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
  },
  {
    id: 9,
    name: "Cynthia",
    status: "Dead",
    species: "Alien",
  },
  {
    id: 10,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
  {
    id: 11,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
  },
  // {
  //   id: 12,
  //   name: "Cynthia",
  //   status: "Dead",
  //   species: "Alien",
  // },
];

function App() {
  const [characters, setCharacters] = useState(mockedCharacters);

  const addCharacterHandler = (character) => {
    setCharacters((previousCharacters) => {
      return [character, ...previousCharacters];
    });
  };

  return (
    <div className={styles["app"]}>
      <div className={styles["banner-container"]}>
        <img src={Banner} alt="banner" />
        <div className={styles["title-container"]}>
          <h1>Rick and Morty</h1>
          <h2>Characters</h2>
        </div>
      </div>
      <div className={styles["page"]}>
        <Characters characters={characters} />
        <NewCharacter onAddCharacter={addCharacterHandler} />
      </div>
    </div>
  );
}

export default App;
