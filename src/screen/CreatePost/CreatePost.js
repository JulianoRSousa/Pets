import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { GrayLight, OrangeBase, White } from "../../assets/AppColors";
import { ButtonOrange, rem } from "../../components/components";
import PictureIcon from "../../assets/images/PictureIcon.svg";
import LocationIcon from "../../assets/images/LocationIcon.svg";
import { useAuth } from "../../hooks/Auth";
import { PickerState, PickerPet } from "../../components/styled/picker";

function CreatePost() {
  const navigation = useNavigation();
  const [petState, setPetState] = useState(1);
  const [petName, setPetName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState("");
  const { user } = useAuth();

  const ref_description = useRef();
  const ref_picture = useRef();

  const showImagePicker = () => {
    console.log('ShowImagePicker');
  };

  return (
    <View
      style={{ backgroundColor: OrangeBase, flex: 1, paddingVertical: 8 * rem, justifyContent:'space-evenly' }}
    >
      <View
        style={{
          backgroundColor: White,
          borderRadius: 20 * rem,
          paddingHorizontal: 8 * rem,
          marginHorizontal: 4*rem,
        }}
      >
        <PickerState onChange={setPetState} />

        <PickerPet firstName={setFirstName} lastName={setLastName} picture={setPicture} />
        <Text
          style={{
            fontFamily: "Delius",
            fontSize: 10 * rem,
            alignSelf: "center",
            margin: 8 * rem,
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
            margin: 4 * rem,
          }}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontFamily: "Delius",
            fontSize: 18 * rem,
            margin: 4 * rem,
          }}
        >
          Nome do pet
        </Text>

        <TextInput
          value={petName}
          onChangeText={setPetName}
          placeholder={"Informe o nome do pet"}
          onSubmitEditing={() => ref_description.current.focus()}
          style={{
            fontFamily: "Delius",
            fontSize: 18 * rem,
            marginHorizontal: 4 * rem,
          }}
        />
        <View
          style={{
            alignSelf: "center",
            borderTopWidth: 1,
            borderColor: GrayLight,
            width: 50 * rem,
            margin: 4 * rem,
          }}
        />
        <Text
          style={{
            alignSelf: "flex-start",
            fontFamily: "Delius",
            fontSize: 18 * rem,
            margin: 4 * rem,
          }}
        >
          Descrição
        </Text>
        <TextInput
          ref={ref_description}
          value={description}
          onChangeText={setDescription}
          placeholder={"Adicione uma descrição"}
          onSubmitEditing={() => showImagePicker()}
          style={{
            fontFamily: "Delius",
            fontSize: 18 * rem,
            marginHorizontal: 4 * rem,
          }}
        />

        <View
          style={{
            width: 50 * rem,
            borderTopWidth: 1,
            borderColor: GrayLight,
            margin: 4 * rem,
            alignSelf: "center",
          }}
        ></View>
        <TouchableOpacity
          ref={ref_picture}
          onPress={() => console.log("picture")}
          style={{
            flexDirection: "row",
            height: 34 * rem,
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 10 * rem,
            marginVertical: 4*rem,
          }}
        >
          <PictureIcon height={29 * rem} width={32 * rem} />
          <Text style={{ marginHorizontal: 5 * rem }}> Adicionar foto</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
      <ButtonOrange
        style={{ alignSelf: "center", elevation: 3, marginVertical: 4 * rem }}
        onPress={() => navigation.navigate("Preview", {postInfo: {petName, picture: picture, description}})}
        text={"Visualizar"}
      />
    </View>
  );
}
export default CreatePost;
