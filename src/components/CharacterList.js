import "./CharacterList.css";
import Card from "./Card";

const CharacterList = (props) => {
  //TODO chequear si es correcto llamar a la funcion filteredCharacters()/characters() aca.

  if (props.characters().length < 0) {
    return <p>No characters found</p>;
  }

  return (
    <div className="character-list">
      <div className="list-container">
        {props.characters().map((character) => (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
