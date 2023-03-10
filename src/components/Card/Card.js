// import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <li className={styles["character-card"]}>
      <h2 className="character-name">Name: {props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>

      {/* <button onClick={clickHandler}>View Full Profile</button> */}
    </li>
  );
}

export default Card;
