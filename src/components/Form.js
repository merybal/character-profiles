import React, { useState } from "react";

import "./Form.css";

//TODO add validators

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");
  const [enteredSpecies, setEnteredSpecies] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredName: "",
  //   enteredStatus: "",
  //   enteredSpecies: "",
  // });
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredName: event.target.value };
    // });
  };

  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredStatus: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredStatus: event.target.value };
    // });
  };

  const speciesChangeHandler = (event) => {
    setEnteredSpecies(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredSpecies: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredSpecies: event.target.value };
    // });
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
    <form onSubmit={submitHandler}>
      <div>
        <label>Name: </label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Status: </label>
        <input
          type="text"
          value={enteredStatus}
          onChange={statusChangeHandler}
        />
      </div>
      <div>
        <label>Species: </label>
        <input
          type="text"
          value={enteredSpecies}
          onChange={speciesChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Add Character</button>
      </div>
    </form>
  );
};

export default Form;
