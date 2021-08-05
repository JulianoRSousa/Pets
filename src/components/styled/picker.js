import { BlurView } from "@react-native-community/blur";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Modal, ScrollView } from "react-native";
import {
  BlueBase,
  pickerColor,
  GreenBase,
  RedBase,
  GrayDark,
} from "../../assets/AppColors";
import { rem } from "../components";
import { useAuth } from "../../hooks/Auth";
import api from "../../services/api";
import PetItem from "../Pets/PetItem";

export function PickerState(props) {
  const [text, setText] = useState("eu perdi meu pet");
  const [pickerColor, setPickerColor] = useState(RedBase);
  const [petState, setPetState] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (petState == 1) {
      setText("eu perdi meu pet");
      setPickerColor(RedBase);
    } else if (petState == 2) {
      setText("eu encontrei um pet");
      setPickerColor(BlueBase);
    } else if (petState == 3) {
      setText("esse pet está para adoção");
      setPickerColor(GreenBase);
    }
  });

  return (
    <TouchableOpacity
      onPress={() => {setVisible(true), console.log('Date: ', Date.prototype.getVarDate())}}
      style={
        props.style
          ? props.style
          : {
              borderColor: pickerColor,
              borderWidth: 1,
              paddingHorizontal: 8 * rem,
              borderRadius: 20 * rem,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              padding: 8 * rem,
              marginVertical: 10 * rem,
            }
      }
    >
      <Text
        style={{
          color: pickerColor,
          fontFamily: "Delius",
          fontSize: 17 * rem,
        }}
      >
        {text}
      </Text>
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
                  props.onChange(1);
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
                  props.onChange(2);
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
                  props.onChange(3);
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
}

export const PickerPet = (props) => {
  const [text, setText] = useState("escolha um de seus pets");
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [petList, setPetList] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    setIsMounted(true);
    loadPets();
    return () => setIsMounted(false);
  }, []);

  async function loadPets() {
    setLoading(true);
    try {
      const response = await api.get("/getpetbytoken", {
        headers: {
          token,
        },
      });
      const petsInfo = response.data;
      setPetList(petsInfo);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const PetContainer = petList.map((item) => (
    // props.petType()
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        props.petName(item.firstName + " " + item.lastName),
          props.petPicture(item.picture_url),
          setVisible(false);
      }}
    >
      <PetItem
        opacity={false}
        petImage={{ uri: item.picture_url }}
        petName={item.firstName + " " + item.lastName}
        petDescription={"item.description"}
        petAge={item.birthdate}
        petType={"Cat"}
        petSex={item.male ? "Macho" : "Fêmea"}
      />
    </TouchableOpacity>
  ));

  return (
    <TouchableOpacity
      onPress={() => setVisible(true)}
      style={
        props.style
          ? props.style
          : {
              borderColor: GrayDark,
              borderWidth: 1,
              paddingHorizontal: 8 * rem,
              borderRadius: 20 * rem,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf:'center',
              padding:8*rem,
            }
      }
    >
      <Text
        style={{
          color: GrayDark,
          fontFamily: "Delius",
          fontSize: 17 * rem,
        }}
      >
        {text}
      </Text>
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
            {petList.length > 0 ? (
              <ScrollView style={{ opacity: 0.8 }}>{PetContainer}</ScrollView>
            ) : (
              <View>
                <Text
                  style={{
                    color: pickerColor,
                    fontFamily: "Delius",
                    fontSize: 20 * rem,
                  }}
                >
                  Nenhum pet adicionado
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </Modal>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
