import React, { useState } from "react";
import "./CharacterList.css";
import CharacterList from "./CharacterList";
import CharacterFilter from "./CharacterFilter";

const Characters = (props) => {
  const [filterStatus, setFilteredStatus] = useState("None");

  const filterChangeHandler = (selectedStatus) => {
    setFilteredStatus(selectedStatus);
  };

  const filteredCharacters = () => {
    if (filterStatus === "None") {
      return props.characters;
    }
    return props.characters.filter((character) => {
      return character.status === filterStatus;
    });
  };

  return (
    <div className="character-list">
      <h2 className="title">Character List</h2>
      <CharacterFilter
        selected={filterStatus}
        onChangeFilter={filterChangeHandler}
      />
      <div className="list-container">
        <CharacterList characters={filteredCharacters} />
      </div>
    </div>
  );
};

export default Characters;
