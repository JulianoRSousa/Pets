import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Touchable,
} from "react-native";
import {
  GrayDark,
  GrayLight,
  OrangeBase,
  RedBase,
  White,
} from "../../assets/AppColors";
import { ButtonLight, ButtonOrange, rem } from "../../components/components";
import PictureIcon from "../../assets/images/PictureIcon.svg";
import LocationIcon from "../../assets/images/LocationIcon.svg";
import DropDownBlackIcon from "../../assets/images/DropDownBlackIcon.svg";
import FastImage from "react-native-fast-image";
import { useAuth } from "../../hooks/Auth";
import { PickerState, PickerPet } from "../../components/styled/picker";

function CreatePost() {
  const navigation = useNavigation();
  const [petState, setPetState] = useState(1);
  const [petName, setPetName] = useState("");
  const [petPicture, setPetPicture] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuth();

  return (
    <View
      style={{ backgroundColor: OrangeBase, flex: 1, paddingVertical: 8 * rem }}
    >
      <View
        style={{
          width: "100%",
          height: 488 * rem,
          backgroundColor: White,
          borderRadius: 20 * rem,
          justifyContent: "space-around",
          paddingHorizontal: 8 * rem,
        }}
      >
        <PickerState onChange={setPetState} />

        <PickerPet petName={setPetName} petPicture={setPetPicture} />
        <Text
          style={{
            fontFamily: "Delius",
            fontSize: 10 * rem,
            alignSelf: "center",
            marginBottom: 5 * rem,
          }}
        >
          Ou adicione um abaixo
        </Text>
        <View
          style={{
            alignSelf: "center",
            borderTopWidth: 1,
            borderColor: GrayLight,
            width: 50 * rem,
            margin: 2 * rem,
          }}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontFamily: "Delius",
            fontSize: 18 * rem,
            margin: 2 * rem,
          }}
        >
          Nome do pet
        </Text>

        <TextInput
          value={petName}
          onChangeText={setPetName}
          placeholder={"Informe o nome do pet"}
          style={{
            fontFamily: "Delius",
            fontSize: 18 * rem,
            marginHorizontal: 2 * rem,
          }}
        />
        <View
          style={{
            alignSelf: "center",
            borderTopWidth: 1,
            borderColor: GrayLight,
            width: 50 * rem,
            margin: 2 * rem,
          }}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontFamily: "Delius",
            fontSize: 18 * rem,
            margin: 2 * rem,
          }}
        >
          Descrição
        </Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder={"Adicione uma descrição"}
          multiline={true}
          style={{
            fontFamily: "Delius",
            fontSize: 18 * rem,
            margin: 2 * rem,
          }}
        />

        <View
          style={{
            width: 50 * rem,
            borderTopWidth: 1,
            borderColor: GrayLight,
            marginBottom: 5 * rem,
            alignSelf: "center",
          }}
        ></View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 34 * rem,
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 10 * rem,
          }}
        >
          <PictureIcon height={29 * rem} width={32 * rem} />
          <Text style={{ marginHorizontal: 5 * rem }}> Adicionar foto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 34 * rem,
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 10 * rem,
          }}
        >
          <LocationIcon height={24 * rem} width={29 * rem} />
          <Text style={{ marginHorizontal: 5 * rem }}> Adicionar local</Text>
        </TouchableOpacity>
      </View>
      <ButtonOrange
        style={{ alignSelf: "center", elevation: 3, marginVertical: 10 * rem }}
        onPress={() => navigation.navigate("Preview")}
        text={"Pronto"}
      />
    </View>
  );
}
export default CreatePost;
