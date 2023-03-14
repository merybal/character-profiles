import React, { useState } from "react";

import styles from "./Form.module.scss";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");
  const [enteredSpecies, setEnteredSpecies] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isSpeciesValid, setIsSpeciesValid] = useState(true);
  const [isStatusValid, setIsStatusValid] = useState(true);

  const [isFormValid, setIsFormValid] = useState(false);

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
    console.log(event.target.value);
    if (event.target.value === "Select") {
      console.log("entro");
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

    // if (
    //   characterData.name === "" ||
    //   characterData.status === "" ||
    //   characterData.status === ""
    // ) {
    //   setIsFormValid(false);
    // } else {

    props.onSaveCharacterData(characterData);
    setEnteredName("");
    setEnteredStatus("");
    setEnteredSpecies("");
    // }
  };

  return (
    <form onSubmit={submitHandler} className={styles["form"]}>
      <h2>Add new character</h2>
      <div className={styles["input-container"]}>
        <label className={`${!isNameValid && styles.invalid}`}>Name</label>
        <input
          className={`${!isNameValid && styles.invalid}`}
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={`${!isSpeciesValid && styles.invalid}`}>
          Species
        </label>
        <input
          className={`${!isSpeciesValid && styles.invalid}`}
          type="text"
          value={enteredSpecies}
          onChange={speciesChangeHandler}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={`${!isStatusValid && styles.invalid}`}>Status</label>
        <select
          defaultValue="Select"
          onChange={statusChangeHandler}
          className={`${!isStatusValid && styles.invalid}`}
        >
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Select">Select</option>
        </select>
      </div>
      {/* <div className={styles["input-container"]}>
        <label>Status:</label>
        <input
          type="text"
          value={enteredStatus}
          onChange={statusChangeHandler}
        />
      </div> */}

      <p className={styles["error-message"]}>
        Please complete the missing fields.
      </p>
      <div className={styles["button-container"]}>
        <button type="submit" disabled={!isFormValid}>
          ADD CHARACTER
        </button>
        <button type="button" onClick={props.cancel}>
          CANCEL
        </button>
      </div>
    </form>
  );
};

export default Form;
