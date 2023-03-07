import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredFirstName: "",
  //   enteredLastName: "",
  //   enteredAge: "",
  // });
  const fistNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredFirstName: event.target.value };
    // });
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredLastName: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredLastName: event.target.value };
    // });
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAge: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return { ...previousState, enteredAge: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const characterData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      age: enteredAge,
    };

    props.onSaveCharacterData(characterData);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          value={enteredFirstName}
          onChange={fistNameChangeHandler}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          type="text"
          value={enteredLastName}
          onChange={lastNameChangeHandler}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          value={enteredFirstName}
          onChange={ageChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Add Character</button>
      </div>
    </form>
  );
};

export default Form;
