import React, { useState, useCallback, useEffect } from "react";

import Characters from "components/Characters/Characters";
import NewCharacter from "components/NewCharacter/NewCharacter";
import Banner from "assets/Banner.jpg";

import styles from "./App.module.scss";

//TODO implement API
//scope component

// 'https://rickandmortyapi.com/api/character'

// const mockedCharacters = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 3,
//     name: "Cynthia",
//     status: "Dead",
//     species: "Alien",
//   },
//   {
//     id: 4,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 5,
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 6,
//     name: "Cynthia",
//     status: "Dead",
//     species: "Alien",
//   },
//   {
//     id: 7,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 8,
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 9,
//     name: "Cynthia",
//     status: "Dead",
//     species: "Alien",
//   },
//   {
//     id: 10,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//   },
//   {
//     id: 11,
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//   },
// ];

function App() {
  const [characters, setCharacters] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    // setIsLoading(true) //TODO
    // setError(null) //TODO

    // try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=19"
    );
    const data = await response.json();
    const characterData = data.results.map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        image: character.image,
        origin: character.origin,
        url: character.url,
      };
    });
    setCharacters(characterData);
    // console.log("characters", characters);
    // } catch (error) {
    //   setError(error.message);
    // }
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  // const addCharacterHandler = (character) => {
  //   setCharacters((previousCharacters) => {
  //     return [character, ...previousCharacters];
  //   });
  // };

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
        {/* <NewCharacter onAddCharacter={addCharacterHandler} /> */}
      </div>
    </div>
  );
}

export default App;
