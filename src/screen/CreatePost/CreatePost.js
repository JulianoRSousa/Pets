import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { GrayLight, OrangeBase, White } from "../../assets/AppColors";
import { ButtonOrange, rem } from "../../components/components";
// import LocationIcon from "../../assets/images/LocationIcon.svg";
import {
  PickerState,
  PickerImage,
} from "../../components/styled/picker";
import PickerPet from "../../components/Picker/PickerPet";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { connect } from "react-redux";

function CreatePost(props) {
  const navigation = useNavigation();

  const [petId, setPetId] = useState("");
  const [petState, setPetState] = useState(1);
  const [petType, setPetType] = useState(0);
  const [petName, setPetName] = useState("");
  const [petFullname, setPetFullname] = useState('')
  const [picture, setPicture] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const ref_description = useRef();

  // async function sendPost() {
  //   await createPostService(petId, imageFile, petState, description);
  // }

  // function alertPost() {
  //   return (
  //     <View>
  //       {Alert.alert(
  //         "Parabéns",
  //         "Post criado com sucesso",
  //         [
  //           {
  //             text: "Ok",
  //             onPress: () => {
  //               navigation.navigate("Feed");
  //             },
  //           },
  //         ],
  //         { cancelable: false }
  //       )}
  //     </View>
  //   );
  // }

  return (
    <View
      style={{
        backgroundColor: OrangeBase,
        flex: 1,
        paddingVertical: 8 * rem,
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          backgroundColor: White,
          borderRadius: 20 * rem,
          paddingHorizontal: 8 * rem,
          marginHorizontal: 4 * rem,
        }}
      >
        <PickerState onChange={setPetState} />

        <PickerPet
          petId={setPetId}
          petFullname={setPetFullname}
          petPicture={setPicture}
          petType={setPetType}
          petPictureUrl={setPictureUrl}
        />
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
          value={petFullname}
          onChangeText={setPetFullname}
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
        <PickerImage onChange={setImageFile} />
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
        onPress={() => {
          const postInfo = {
            petId,
            petName,
            petFullname,
            petType,
            petState,
            pictureUrl,
            description,
            picture: imageFile ? imageFile : null,
          }
          props.setCreatePostInfo(postInfo)
          navigation.navigate("Preview");
        }}
        text={"Visualizar"}
      />
    </View>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCreatePostInfo: (createPostInfo) => dispatch({ type: 'SET_CREATE_POST_INFO', payload: { createPostInfo } })
  }
}
export default connect(null, mapDispatchToProps)(CreatePost)
