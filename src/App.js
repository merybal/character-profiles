// import logo from './logo.svg';
import CharacterList from "./components/CharacterList";
import AddNewCharacter from "./components/AddNewCharacter";

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

  return (
    <div className="App">
      <AddNewCharacter />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
