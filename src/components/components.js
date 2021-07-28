import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import * as AppColors from "../assets/AppColors";
import * as AppFonts from "../assets/AppFonts";
import * as Animatable from "react-native-animatable";

export const rem = Dimensions.get("window").width / 380;

//---------------------------Text-------------------------------//

export const TextLogo = styled.Text`
  color: ${AppColors.White};
  font-size: ${130 * rem}px;
  font-family: "Delius";
  text-align: center;
  height: ${260 * rem}px;
  width: 100%;
  text-align-vertical:  center;
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
const AnimatedMaskView = Animatable.createAnimatableComponent(MaskView);
export const Input = forwardRef(
  (
    {
      placeholder,
      style,
      secureTextEntry,
      onSubmitEditing,
      autoCapitalize,
      keyboardType,
      error,
      animation,
      value,
      onChangeText,
    },
    ref
  ) => {
    const animatedInput = useRef();
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
      firstRender
        ? setFirstRender(false)
        : animatedInput.current.animate(animation ? animation : "bounce");
    }, [error]);

    return (
      <AnimatedMaskView ref={animatedInput} error={error} style={style}>
        <MaskInput
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          ref={ref}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
        ></MaskInput>
      </AnimatedMaskView>
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
const zoomOut = {
  0: {
    scale: 1,
  },
  0.2: {
    scale: 0.8,
  },
  0.5: {
    scale: 0.5,
  },
  0.8: {
    scale: 0.8,
  },
  1: {
    scale: 1,
  },
};

export const ButtonLight = ({ text, style, onPress, loading }) => {
  const animationText = useRef();

  useEffect(() => {
    loading
      ? animationText.current.animate(zoomOut)
      : animationText.current.stopAnimation();
  });

  return (
    <MaskButtonLight loading={loading} onPress={onPress} style={style}>
      <Animatable.Text
        ref={animationText}
        animation={zoomOut}
        easing="ease"
        duration={1000}
        useNativeDriver={true}
        iterationCount={"infinite"}
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "Delius",
          fontSize: 23 * rem,
          textAlignVertical: "center",
        }}
      >
        {text}
      </Animatable.Text>
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
