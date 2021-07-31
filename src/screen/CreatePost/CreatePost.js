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
        }}
      >
        <View
          style={{
            height: 350 * rem,
            width: "100%",
            backgroundColor: White,
            borderRadius: 20 * rem,
          }}
        >
          <View
            style={{
              alignItems: "flex-start",
              width: "100%",
              marginHorizontal: 10 * rem,
              marginTop: 10 * rem,
            }}
          >
            <View
              style={{
                width: 265 * rem,
                alignSelf: "flex-start",
                height: 105 * rem,
                margin: 10 * rem,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "flex-end",
                }}
              >
                <FastImage
                  source={{ uri: user.profilePictureUrl }}
                  style={{
                    height: 67 * rem,
                    width: 67 * rem,
                    borderRadius: 45 * rem,
                  }}
                />
                <View
                  style={{ marginHorizontal: 8 * rem, alignSelf: "center" }}
                >
                  <Text
                    style={{
                      color: GrayDark,
                      fontFamily: "Delius",
                      fontSize: 17 * rem,
                    }}
                  >
                    {user.firstname + " " + user.lastname}
                  </Text>
                  <PickerState onChange={setPetState} />
                </View>
              </View>

              <PickerPet petName={setPetName} petPicture={setPetPicture} />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderColor: GrayLight,
            }}
          >
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
            <View
              style={{
                alignSelf: "center",
                borderTopWidth: 1,
                borderColor: GrayLight,
                width: 50 * rem,
                margin: 2 * rem,
              }}
            />
            <TextInput
              value={petName}
              onChangeText={setPetName}
              placeholder={"Informe o nome do pet"}
              style={{
                alignSelf: "flex-start",
                fontFamily: "Delius",
                fontSize: 18 * rem,
                marginHorizontal: 2 * rem,
              }}
            />
          </View>
          <View style={{ width: "100%", marginVertical: 10 * rem }}>
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
            <View
              style={{
                alignSelf: "center",
                borderTopWidth: 1,
                borderColor: GrayLight,
                width: 50 * rem,
                margin: 2 * rem,
              }}
            />
            <TextInput
            value={description}
            onChangeText={setDescription}
              placeholder={"Adicione uma descrição"}
              style={{
                alignSelf: "flex-start",
                fontFamily: "Delius",
                fontSize: 18 * rem,
                margin: 2 * rem,
              }}
            ></TextInput>
          </View>
        </View>

        <View
          style={{
            borderRadius: 20 * rem,
            width: "100%",
            height: 135 * rem,
            backgroundColor: White,
            justifyContent: "space-evenly",
            alignItems: "center",
            elevation: 3,
          }}
        >
          <View
            style={{
              width: 50 * rem,
              borderTopWidth: 1,
              elevation: 2,
              borderColor: GrayLight,
              marginBottom: 5 * rem,
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
