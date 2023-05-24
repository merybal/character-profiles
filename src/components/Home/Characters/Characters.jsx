import React, { useState } from "react";

import List from "../List/List";
import ActionBar from "components/Home/ActionBar/ActionBar";

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
    <>
      <div>
        <ActionBar
          onFilterSelection={filterChangeHandler}
          selected={filterStatus}
        />
      </div>
      <div className="list-container">
        <List characters={filteredCharacters} />
      </div>
    </>
  );
};

export default Characters;
