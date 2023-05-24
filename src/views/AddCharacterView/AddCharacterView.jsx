import { Link } from "react-router-dom";

import Form from "components/AddCharacter/Form/Form";

import { ReactComponent as Arrow } from "assets/Arrow.svg";

//TODO este componente se elimina? o se le agrega algo para justificarlo
// import styles from "views/AddCharacterView/AddCharacterView.module.scss";
//TODO not used. API lacks POST method

const AddCharacter = (props) => {
  const stopEditingHandler = () => {
    //descarta los datos y vuelve a pagina anterior
  };

  const saveCharacterDataHandler = (enteredCharacterData) => {
    const characterData = {
      ...enteredCharacterData,
      id: Math.random().toString(),
    };
    props.onAddCharacter(characterData);
    //agrega al array que ya tengo al principio o al final y vuelve
    // a la home page
  };

  return (
    <div>
      <Form
        onSaveCharacterData={saveCharacterDataHandler}
        cancel={stopEditingHandler}
      />

      {/* TODO add style */}
      <Link to="..">
        <Arrow />
      </Link>
    </div>
  );
};

export default AddCharacter;
