import { BlurView } from "@react-native-community/blur";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Modal, StatusBar } from "react-native";
import {
  BlueBase,
  GreenBase,
  OrangeBase,
  RedBase,
  White,
} from "../../assets/AppColors";
import DropDownBlackIcon from "../../assets/images/DropDownBlackIcon.svg";
import { rem } from "../components";

export const PickerState = (props) => {
  const [text, setText] = useState("escolha um de seus pets");
  const [textColor, setTextColor] = useState(RedBase);
  const [petState, setPetState] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {});

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
          paddingVertical: 4 * rem,
        }}
      >
        {text}
      </Text>
      {/* <View style={{ paddingLeft: 4 * rem }}>
        <DropDownBlackIcon height={7 * rem} width={13 * rem} />
      </View> */}
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
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{ opacity: 0.8 }}>
              <TouchableOpacity
                onPress={() => {
                  setPetState(1);
                  setVisible(false);
                }}
                style={{
                  borderRadius: 20 * rem,
                  borderColor: RedBase,
                  borderWidth: 1,
                  paddingHorizontal: 8 * rem,
                  alignItems: "center",
                  paddingVertical: 5,
                  marginVertical: 5 * rem,
                }}
              >
                <Text
                  style={{
                    color: RedBase,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                    paddingVertical: 5,
                  }}
                >
                  eu perdi meu pet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPetState(2);
                  setVisible(false);
                }}
                style={{
                  borderRadius: 20 * rem,
                  borderColor: BlueBase,
                  borderWidth: 1,
                  paddingHorizontal: 8 * rem,
                  alignItems: "center",
                  paddingVertical: 5,
                  marginVertical: 5 * rem,
                }}
              >
                <Text
                  style={{
                    color: BlueBase,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                    paddingVertical: 5 * rem,
                  }}
                >
                  eu encontrei esse pet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPetState(3);
                  setVisible(false);
                }}
                style={{
                  borderRadius: 20 * rem,
                  borderColor: GreenBase,
                  borderWidth: 1,
                  paddingHorizontal: 8 * rem,
                  alignItems: "center",
                  paddingVertical: 5 * rem,
                  marginVertical: 5 * rem,
                }}
              >
                <Text
                  style={{
                    color: GreenBase,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                    paddingVertical: 5 * rem,
                  }}
                >
                  esse pet está para adoção
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
export const PickerPet = (props) => {
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
      setTextColor(GreenBase);
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
          paddingVertical: 4 * rem,
        }}
      >
        {text}
      </Text>
      {/* <View style={{ paddingLeft: 4 * rem }}>
        <DropDownBlackIcon height={7 * rem} width={13 * rem} />
      </View> */}
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
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{ opacity: 0.8 }}>
              <TouchableOpacity
                onPress={() => {
                  setPetState(1);
                  setVisible(false);
                }}
                style={{
                  borderRadius: 20 * rem,
                  borderColor: RedBase,
                  borderWidth: 1,
                  paddingHorizontal: 8 * rem,
                  alignItems: "center",
                  paddingVertical: 5,
                  marginVertical: 5 * rem,
                }}
              >
                <Text
                  style={{
                    color: RedBase,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                    paddingVertical: 5,
                  }}
                >
                  eu perdi meu pet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPetState(2);
                  setVisible(false);
                }}
                style={{
                  borderRadius: 20 * rem,
                  borderColor: BlueBase,
                  borderWidth: 1,
                  paddingHorizontal: 8 * rem,
                  alignItems: "center",
                  paddingVertical: 5,
                  marginVertical: 5 * rem,
                }}
              >
                <Text
                  style={{
                    color: BlueBase,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                    paddingVertical: 5 * rem,
                  }}
                >
                  eu encontrei esse pet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPetState(3);
                  setVisible(false);
                }}
                style={{
                  borderRadius: 20 * rem,
                  borderColor: GreenBase,
                  borderWidth: 1,
                  paddingHorizontal: 8 * rem,
                  alignItems: "center",
                  paddingVertical: 5 * rem,
                  marginVertical: 5 * rem,
                }}
              >
                <Text
                  style={{
                    color: GreenBase,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                    paddingVertical: 5 * rem,
                  }}
                >
                  esse pet está para adoção
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
