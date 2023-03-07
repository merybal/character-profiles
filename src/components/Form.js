import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  // const [enteredFirstName, setEnteredFirstName] = useState("");
  // const [enteredLastName, setEnteredLastName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const [userInput, setUserInput] = useState({
    enteredFirstName: "",
    enteredLastName: "",
    enteredAge: "",
  });
  const fistNameChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((previousState) => {
      return { ...previousState, enteredFirstName: event.target.value };
    });
  };

  const lastNameChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredLastName: event.target.value,
    // });
    setUserInput((previousState) => {
      return { ...previousState, enteredLastName: event.target.value };
    });
  };

  const ageChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAge: event.target.value,
    // });
    setUserInput((previousState) => {
      return { ...previousState, enteredAge: event.target.value };
    });
  };

  return (
    <form>
      <div>
        <label>First Name: </label>
        <input type="text" onChange={fistNameChangeHandler} />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" onChange={lastNameChangeHandler} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" onChange={ageChangeHandler} />
      </div>
      <div>
        <button type="submit">Add Character</button>
      </div>
    </form>
  );
};

export default Form;
