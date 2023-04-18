import Card from "components/Card/Card";

import styles from "components/List/List.module.scss";

const List = (props) => {
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
          id={character.id}
          type={character.type}
          gender={character.gender}
          image={character.image}
          origin={character.origin}
          url={character.url}
        />
      ))}
    </ul>
  );
};

export default List;
