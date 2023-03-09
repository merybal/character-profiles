import React from "react";

import Form from "./Form";

const NewCharacter = (props) => {
  const [showForm, setShowForm] = React.useState(false);

  const addButtonHandler = () => {
    setShowForm(true);
  };

  const stopEditingHandler = () => {
    setShowForm(false);
  };

  const saveCharacterDataHandler = (enteredCharacterData) => {
    const characterData = {
      ...enteredCharacterData,
      id: Math.random().toString(),
    };
    props.onAddCharacter(characterData);
    setShowForm(false);
  };

  if (showForm) {
    return (
      <Form
        onSaveCharacterData={saveCharacterDataHandler}
        cancel={stopEditingHandler}
      />
    );
  }

  return (
    <div>
      <button onClick={addButtonHandler}>Add New Character</button>
    </div>
  );
};

export default NewCharacter;
