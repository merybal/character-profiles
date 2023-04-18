import React from "react";

import Form from "components/Form/Form";

import styles from "components/NewCharacter/NewCharacter.module.scss";

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
    <div className={styles["add-button"]}>
      <button onClick={addButtonHandler}>ADD NEW CHARACTER</button>
    </div>
  );
};

export default NewCharacter;
