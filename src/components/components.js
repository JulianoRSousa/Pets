import React, { useRef, useEffect, forwardRef } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import * as AppColors from "../assets/AppColors";
import * as AppFonts from "../assets/AppFonts";

export const rem = Dimensions.get("window").width / 380;

//---------------------------Text-------------------------------//

export const TextLogo = styled.Text`
  color: ${AppColors.White};
  font-size: ${130 * rem}px;
  font-family: "Delius";
  text-align: center;
  height: ${260 * rem}px;
  text-align-vertical: center;
`;
//---------------------------TextInput-------------------------------//

const MaskView = styled.View`
  background-color: ${AppColors.White};
  height: ${50 * rem}px;
  width: ${300 * rem}px;
  align-items: center;
  border-radius: ${15 * rem}px;
  shadow-color: #000;
  elevation: 2;
`;
const MaskInput = styled.TextInput`
  text-align: start;
  font-family: "Delius";
  color: ${AppColors.GrayLight};
  font-size: ${25 * rem}px;
  text-align: left;
  height: ${50 * rem}px;
  width: ${270 * rem}px;
`;
export const Input = forwardRef(
  (
    {
      placeholder,
      style,
      secureTextEntry,
      onSubmitEditing,
      autoCapitalize,
      keyboardType,
    },
    ref
  ) => {
    return (
      <MaskView style={style}>
        <MaskInput
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          ref={ref}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
        ></MaskInput>
      </MaskView>
    );
  }
);

//-------------------------Buttons-----------------------------//
const MaskButtonLight = styled.TouchableOpacity`
  background-color: ${AppColors.OrangeLight};
  height: ${52 * rem}px;
  width: ${153 * rem}px;
  border: 1px solid white;
  border-radius: ${23 * rem}px;
  justify-content: center;
  shadow-color: #000;
  elevation: 3;
`;
const TextButtonLight = styled.Text`
  color: white;
  text-align: center;
  font-size: ${23 * rem}px;
  font-family: "Delius";
`;

export const ButtonLight = ({ text, style, onPress }) => {
  return (
    <MaskButtonLight onPress={onPress} style={style}>
      <TextButtonLight>{text}</TextButtonLight>
    </MaskButtonLight>
  );
};

const MaskButtonOrange = styled.TouchableOpacity`
  background-color: white;
  height: ${52 * rem}px;
  width: ${153 * rem}px;
  border-radius: ${23 * rem}px;
  justify-content: center;
  shadow-color: #000;
  elevation: 3;
`;
const TextButtonOrange = styled.Text`
  color: ${AppColors.OrangeBase};
  text-align: center;
  font-size: ${23 * rem}px;
  font-family: "Delius";
`;

export const ButtonOrange = ({ text, style, onPress }) => {
  return (
    <MaskButtonOrange onPress={onPress} style={style}>
      <TextButtonOrange>{text}</TextButtonOrange>
    </MaskButtonOrange>
  );
};
