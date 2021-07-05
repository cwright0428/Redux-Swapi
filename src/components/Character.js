import React from "react";

const Character = props => {
  console.log('Hey it chars')
  return <li>{props.character.name}</li>;
};

export default Character;
