import React from "react";
import styled from "styled-components";

function MainButton (props) {
  const ButtonLight = styled.TouchableOpacity`
    background-color: white;
    margin: 1px;
    padding: 1px;
    border: 3px solid palevioletred;
    border-radius: 3px;
  `;

  const ButtonOrange = styled.TouchableOpacity`
    background-color: orange;
    margin: 1px;
    padding: 1px;
    border: 3px solid palevioletred;
    border-radius: 3px;
  `;

  const TextButton = styled.Text`
  color: white;
  margin: 1px;
  padding: 1px;
  border: 3px solid palevioletred;
  border-radius: 3px;
`;

  return props.type == "light" ? (
    <ButtonLight onPress={props.onPress} style={props.style}>
      <TextButton>{props.text}</TextButton>
    </ButtonLight>
  ) : (
    <ButtonOrange onPress={props.onPress} style={props.style}>
      <TextButton>{props.text}</TextButton>
    </ButtonOrange>
  );
}
export default MainButton;
