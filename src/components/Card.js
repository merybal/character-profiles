import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [firstName, setFirstName] = useState(props.firstName);

  const clickHandler = () => {
    setFirstName("new name");
    console.log("clicked");
  };

  return (
    <div className="character-card">
      <h2 className="character-name">
        Name: {firstName} {props.lastName}
      </h2>
      <p>Age: {props.age}</p>
      <button onClick={clickHandler}>View Full Profile</button>
    </div>
  );
}

export default Card;
