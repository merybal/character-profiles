import React, { useState, useCallback, useEffect } from "react";

import Characters from "components/Home/Characters/Characters";
import Banner from "assets/Banner.jpg";

import styles from "views/HomeView/HomeView.module.scss";

const HomeView = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=1"
      );
      // const response = await fetch(
      //   "https://rickandmortyapi.com/api/cher/?page=1"
      // ); // to test loading and error messages

      if (!response.ok) {
        throw new Error("Something went wrong =(");
      }

      const data = await response.json();
      const characterData = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
        };
      });
      setCharacters(characterData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  let content = <p>No movies were found</p>;

  if (characters.length > 0) {
    content = <Characters characters={characters} />;
  }

  if (error) {
    content = <p className={styles["status-message"]}>{error}</p>;
  }

  if (isLoading) {
    content = <p className={styles["status-message"]}>Loading...</p>;
  }

  // const addCharacterHandler = (character) => {
  //   console.log(character);
  //   // setCharacters((previousCharacters) => {
  //   //   return [character, ...previousCharacters];
  //   // });
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
        {content}
        {/* <NewCharacter onAddCharacter={addCharacterHandler} /> */}
      </div>
    </div>
  );
};

export default HomeView;
