import React from "react";

import styles from "components/Filter/Filter.module.scss";

const Filter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles["filter-container"]}>
      <label>Filter by status</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="None">None</option>
      </select>
    </div>
  );
};

export default Filter;
