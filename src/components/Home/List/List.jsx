import Card from "components/Home/Card/Card";

import styles from "components/Home/List/List.module.scss";

const List = (props) => {
  if (props.characters().length < 0) {
    return <p>No characters found</p>;
  }

  return (
    <ul className={styles["list-container"]}>
      {props.characters().map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          image={character.image}
          // type={character.type}
          // gender={character.gender}
          // origin={character.origin}
          // url={character.url}
        />
      ))}
    </ul>
  );
};

export default List;
