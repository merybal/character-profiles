import React, { useState, useCallback, useEffect } from "react";

import Characters from "components/Characters/Characters";
// import NewCharacter from "components/NewCharacter/NewCharacter";
import Banner from "assets/Banner.jpg";

import styles from "./App.module.scss";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    setIsLoading(true);
    // setError(null) //TODO

    // try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=1"
    );

    // if (!response.ok) {
    //   // response.status has the concrete response status code
    //   throw new Error("Something went wrong!"); //response has an error message of its own, in case we want to use that instead
    // }

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
    // console.log(characterData);
    setCharacters(characterData);
    // console.log("characters", characters);
    // } catch (error) {
    //   setError(error.message);
    // }
    setIsLoading(false);
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
        {!isLoading && <Characters characters={characters} />}
        {/* <NewCharacter onAddCharacter={addCharacterHandler} /> */}
      </div>
    </div>
  );
}

export default App;
