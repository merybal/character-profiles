import styles from "./Card.module.scss";

function Card(props) {
  return (
    <li className={styles["character-card"]}>
      <img src={props.image} alt="avatar" className={styles["character-img"]} />
      <div className={styles["character-data"]}>
        <h2>{props.name}</h2>
        <p>Status: {props.status}</p>
        <p>Species: {props.species}</p>
        <p>Gender: {props.gender}</p>
      </div>

      {/* <button onClick={clickHandler}>View Full Profile</button> */}
    </li>
  );
}

export default Card;
