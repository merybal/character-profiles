import "./CharacterList.css";
import Card from "./Card";

function CharacterList(props) {
  return (
    <div className="character-list">
      <h2 className="title">Character List</h2>
      <div className="list-container">
        {props.characters.map((character) => (
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
}

export default CharacterList;
