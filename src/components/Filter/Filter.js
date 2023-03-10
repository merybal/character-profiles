import React from "react";

// import "./CharacterFilter.css";

const Filter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Filter status</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="None">None</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
