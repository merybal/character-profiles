import React from "react";

import "./Form.css";

const Form = () => {
  const fistNameChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div>
        <label>First Name: </label>
        <input type="text" onChange={fistNameChangeHandler} />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" />
      </div>
      <div>
        <button type="submit">Add Character</button>
      </div>
    </form>
  );
};

export default Form;
