import React, { useState } from "react";

import styles from "./Form.module.scss";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");
  const [enteredSpecies, setEnteredSpecies] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (enteredName.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
  };

  const speciesChangeHandler = (event) => {
    setEnteredSpecies(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const characterData = {
      name: enteredName,
      status: enteredStatus,
      species: enteredSpecies,
    };

    props.onSaveCharacterData(characterData);
    setEnteredName("");
    setEnteredStatus("");
    setEnteredSpecies("");
  };

  return (
    <form onSubmit={submitHandler} className={styles["form"]}>
      <div
        className={`${styles["input-container"]} ${!isValid && styles.invalid}`}
      >
        <label>Name: </label>
        <input
          // style={{ borderColor: !isValid ? "red" : "black" }}
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      <div
        className={`${styles["input-container"]} ${!isValid && styles.invalid}`}
      >
        <label>Status: </label>
        <input
          type="text"
          value={enteredStatus}
          onChange={statusChangeHandler}
        />
      </div>
      <div
        className={`${styles["input-container"]} ${!isValid && styles.invalid}`}
      >
        <label>Species: </label>
        <input
          type="text"
          value={enteredSpecies}
          onChange={speciesChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Add Character</button>
        <button type="button" onClick={props.cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
