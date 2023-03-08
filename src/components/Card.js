import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  // const [firstName, setFirstName] = useState(props.firstName);

  // const clickHandler = () => {
  //   setFirstName("new name");
  //   console.log("clicked");
  // };

  return (
    <div className="character-card">
      <h2 className="character-name">Name: {props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>

      {/* <button onClick={clickHandler}>View Full Profile</button> */}
    </div>
  );
}

export default Card;
