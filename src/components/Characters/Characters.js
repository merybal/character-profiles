import React, { useState } from "react";
import List from "../List/List";
import Filter from "../Filter/Filter";

import styles from "./Characters.module.scss";

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
    <div>
      <h2 className={styles["title"]}>Character List</h2>
      <Filter selected={filterStatus} onChangeFilter={filterChangeHandler} />
      <div className="list-container">
        <List characters={filteredCharacters} />
      </div>
    </div>
  );
};

export default Characters;
