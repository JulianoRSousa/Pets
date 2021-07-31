import { BlurView } from "@react-native-community/blur";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Modal, StatusBar } from "react-native";
import { BlueBase, OrangeBase, RedBase } from "../../assets/AppColors";
import DropDownBlackIcon from "../../assets/images/DropDownBlackIcon.svg";
import { rem } from "../components";

export const PickerState = (props) => {
  const [text, setText] = useState("eu perdi meu pet");
  const [textColor, setTextColor] = useState(RedBase);
  const [petState, setPetState] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (petState == 1) {
      setText("eu perdi meu pet");
      setTextColor(RedBase);
    } else if (petState == 2) {
      setText("eu encontrei um pet");
      setTextColor(BlueBase);
    } else if (petState == 3) {
      setText("esse pet está para adoção");
      setTextColor("black");
    }
  });

  return (
    <TouchableOpacity
      onPress={() => setVisible(true)}
      style={
        props.style
          ? props.style
          : {
              borderColor: textColor,
              borderWidth: 1,
              paddingHorizontal: 8 * rem,
              borderRadius: 20 * rem,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }
      }
    >
      <Text
        style={{
          color: textColor,
          fontFamily: "Delius",
          fontSize: 17 * rem,
          paddingVertical: 5 * rem,
        }}
      >
        {text}
      </Text>
      <View style={{ paddingLeft: 4 * rem }}>
        <DropDownBlackIcon height={7 * rem} width={13 * rem} />
      </View>
      {visible ? (
        <Modal transparent={false} visible={visible}>
          <BlurView
            reducedTransparencyFallbackColor="gray"
            blurType="light"
            blurAmount={10}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
          <TouchableOpacity onPress={()=> setVisible(false)}>
          <Text>Mofals</Text>
          </TouchableOpacity>
        </Modal>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
