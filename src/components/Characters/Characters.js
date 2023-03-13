import React, { useState } from "react";
import List from "../List/List";
import Filter from "../Filter/Filter";

// import styles from "./Characters.module.scss";

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

  return (
    <div>
      <Filter selected={filterStatus} onChangeFilter={filterChangeHandler} />
      <div className="list-container">
        <List characters={filteredCharacters} />
      </div>
    </div>
  );
};

export default Characters;
