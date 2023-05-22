import { Link } from "react-router-dom";

import styles from "components/Home/Card/Card.module.scss";

function Card(props) {
  return (
    <li className={styles["character-card"]}>
      <img src={props.image} alt="avatar" className={styles["character-img"]} />
      <div className={styles["character-data"]}>
        <h2>{props.name}</h2>
        <p>Status: {props.status}</p>
        <p>Species: {props.species}</p>
        {/* <p>Gender: {props.gender}</p> */}
        <Link to="/profile">Full Profile</Link>
      </div>
    </li>
  );
}

export default Card;
