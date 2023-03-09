import React, { useState } from "react";
import "./CharacterList.css";
import Card from "./Card";
import CharacterFilter from "./CharacterFilter";

const CharacterList = (props) => {
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
        {filteredCharacters().map((character) => (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
