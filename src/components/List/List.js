import Card from "../Card/Card";

import styles from "components/List/List.module.scss";

const List = (props) => {
  //TODO chequear si es correcto llamar a la funcion filteredCharacters()/characters() aca.

  if (props.characters().length < 0) {
    return <p>No characters found</p>;
  }

  return (
    <ul className={styles["list-container"]}>
      {props.characters().map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
        />
      ))}
    </ul>
  );
};

export default List;
