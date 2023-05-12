import React, { useState } from "react";

import List from "../List/List";
// import Filter from "../Filter/Filter";
import ActionBar from "components/Home/ActionBar/ActionBar";
import NewCharacter from "views/AddCharacterView/AddCharacterView";

import styles from "./Characters.module.scss";

const Characters = (props) => {
  const [filterStatus, setFilteredStatus] = useState("All");

  const filterChangeHandler = (selectedStatus) => {
    setFilteredStatus(selectedStatus);
  };

  const filteredCharacters = () => {
    if (filterStatus === "All") {
      return props.characters;
    }
    return props.characters.filter((character) => {
      return character.status === filterStatus;
    });
  };

  const addCharacterHandler = (character) => {
    console.log(character);
    // setCharacters((previousCharacters) => {
    //   return [character, ...previousCharacters];
    // });
  };

  return (
    <>
      <div>
        {/* <Filter selected={filterStatus} onChangeFilter={filterChangeHandler} /> */}
        <ActionBar
          onFilterSelection={filterChangeHandler}
          selected={filterStatus}
        />
        <NewCharacter onAddCharacter={addCharacterHandler} />
      </div>
      <div className="list-container">
        <List characters={filteredCharacters} />
      </div>
    </>
  );
};

export default Characters;
