import React from "react";

import Form from "./Form";

const NewCharacter = (props) => {
  const saveCharacterDataHandler = (enteredCharacterData) => {
    const characterData = {
      ...enteredCharacterData,
      id: Math.random().toString(),
    };
    console.log(characterData);
    props.onAddCharacter(characterData);
  };
  return (
    <div>
      <Form onSaveCharacterData={saveCharacterDataHandler} />
    </div>
  );
};

export default NewCharacter;
