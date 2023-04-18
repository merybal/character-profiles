import React, { useState } from "react";

import styles from "./Form.module.scss";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");
  const [enteredSpecies, setEnteredSpecies] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isSpeciesValid, setIsSpeciesValid] = useState(true);
  const [isStatusValid, setIsStatusValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim().length === 0) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  };

  const speciesChangeHandler = (event) => {
    setEnteredSpecies(event.target.value);
    if (event.target.value.trim().length === 0) {
      setIsSpeciesValid(false);
    } else {
      setIsSpeciesValid(true);
    }
  };

  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
    if (event.target.value === "Select") {
      setIsStatusValid(false);
    } else {
      setIsStatusValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const characterData = {
      name: enteredName,
      species: enteredSpecies,
      status: enteredStatus,
    };

    if (
      characterData.name.trim().length === 0 ||
      characterData.status.trim().length === 0 ||
      characterData.status.trim().length === 0
    ) {
      setIsFormValid(false);
    } else {
      props.onSaveCharacterData(characterData);
      setEnteredName("");
      setEnteredStatus("");
      setEnteredSpecies("");
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles["form"]}>
      <h2>Add new character</h2>
      <div className={styles["input-container"]}>
        <label
          htmlFor="charactername"
          className={`${!isNameValid && styles.invalid}`}
        >
          Name
        </label>
        <input
          id="charactername"
          className={`${!isNameValid && styles.invalid}`}
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      {!isNameValid && (
        <p className={styles["error-message"]}>Please complete Name</p>
      )}
      <div className={styles["input-container"]}>
        <label
          htmlFor="species"
          className={`${!isSpeciesValid && styles.invalid}`}
        >
          Species
        </label>
        <input
          id="species"
          className={`${!isSpeciesValid && styles.invalid}`}
          type="text"
          value={enteredSpecies}
          onChange={speciesChangeHandler}
        />
      </div>
      {!isSpeciesValid && (
        <p className={styles["error-message"]}>Please complete Species</p>
      )}
      <div className={styles["input-container"]}>
        <label
          htmlFor="status"
          className={`${!isStatusValid && styles.invalid}`}
        >
          Status
        </label>
        <select
          id="status"
          defaultValue="Select"
          onChange={statusChangeHandler}
          className={`${!isStatusValid && styles.invalid}`}
        >
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Select">Select</option>
        </select>
      </div>
      {!isStatusValid && (
        <p className={styles["error-message"]}>Please select Status.</p>
      )}
      {!isFormValid && (
        <p className={styles["error-message"]}>
          Please complete missing fields
        </p>
      )}
      <div className={styles["button-container"]}>
        <button type="submit">ADD CHARACTER</button>
        <button type="button" onClick={props.cancel}>
          CANCEL
        </button>
      </div>
    </form>
  );
};

export default Form;
