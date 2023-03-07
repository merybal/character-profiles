import CharacterList from "./components/CharacterList";
import NewCharacter from "./components/NewCharacter";

import "./App.css";

function App() {
  const characters = [
    {
      id: 1,
      firstName: "Rick",
      lastName: "Sanchez",
      age: "?",
    },
    {
      id: 1,
      firstName: "Morty",
      lastName: "Smith",
      age: "13",
    },
  ];

  const addCharacterHandler = (character) => {
    console.log("app", character);
  };

  return (
    <div className="App">
      <NewCharacter onAddCharacter={addCharacterHandler} />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
