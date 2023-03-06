import "./CharacterList.css";
import Card from "./Card";

function CharacterList(props) {
  return (
    <div className="character-list">
      <h2 className="title">Character List</h2>
      <div className="list-container">
        <Card
          firstName={props.characters[0].firstName}
          lastName={props.characters[0].lastName}
          age={props.characters[0].age}
        />
        <Card
          firstName={props.characters[1].firstName}
          lastName={props.characters[1].lastName}
          age={props.characters[1].age}
        />
      </div>
    </div>
  );
}

export default CharacterList;
