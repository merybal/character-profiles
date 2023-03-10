import React, { useState } from "react";
import List from "../List/List";
import Filter from "../Filter/Filter";

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
      <Filter selected={filterStatus} onChangeFilter={filterChangeHandler} />
      <div className="list-container">
        <List characters={filteredCharacters} />
      </div>
    </div>
  );
};

export default Characters;
