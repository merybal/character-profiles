import Form from "components/AddCharacter/Form/Form";

//TODO este componente se elimina? o se le agrega algo para justificarlo
// import styles from "views/AddCharacterView/AddCharacterView.module.scss";

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
    <Form
      onSaveCharacterData={saveCharacterDataHandler}
      cancel={stopEditingHandler}
    />
  );
};

export default AddCharacter;
