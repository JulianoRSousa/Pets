import { BlurView } from "@react-native-community/blur";
import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
} from "react-native";
import {
  BlueBase,
  GreenBase,
  RedBase,
} from "../../assets/AppColors";
import { rem } from "../components";
import PictureIcon from "../../assets/images/PictureIcon.svg";
import GalleryIcon from "../../assets/images/galleryIcon.svg";
import CameraIcon from "../../assets/images/CameraIcon.svg";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";

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
      onPress={() => setVisible(true)}
      style={
        props.style
          ? props.style
          : {
            borderColor: pickerColor,
            borderWidth: 1,
            padding: 8 * rem,
            borderRadius: 20 * rem,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
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



export function PickerImage(props) {
  const navigation = useNavigation();
  const [imageFile, setImageFile] = useState(null);
  const [visible, setVisible] = useState(false);

  function _launchCamera() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "Pets",
        saveToPhotos: true,
      },
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        Alert.alert(
          "A escolha da imagem falhou",
          "Precisamos de uma imagem para usarmos no seu post!",
          [
            {
              text: "Ok",
              onPress: () => { },
            },
          ],
          { cancelable: false }
        );
        setImageFile(null);
      } else if (response.error) {
        Alert.alert(
          "A escolha da imagem falhou",
          "Precisamos de uma imagem para usarmos no seu post! ",
          [
            {
              text: "Ok",
              onPress: () => console.error(error),
            },
          ],
          { cancelable: false }
        );
        setImageFile(null);
      } else {
        setImageFile(response);
        props.onChange(response);
        setVisible(false);
      }
    });
  }

  function _chooseImage() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "Pets",
      },
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert(
          "A escolha da imagem falhou",
          "Precisamos de uma imagem para usarmos no seu post!",
          [
            {
              text: "Ok",
              onPress: () => { },
            },
          ],
          { cancelable: false }
        );
        setImageFile(null);
      } else if (response.error) {
        Alert.alert(
          "A escolha da imagem falhou",
          "Precisamos de uma imagem para usarmos no seu post! ",
          [
            {
              text: "Ok",
              onPress: () => console.error(error),
            },
          ],
          { cancelable: false }
        );
        setImageFile(null);
      } else {
        setImageFile(response);
        props.onChange(response);
        setVisible(false);
      }
    });
  }

  return (
    <TouchableOpacity
      onPress={() => setVisible(true)}
      style={{
        flexDirection: "row",
        height: 34 * rem,
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 10 * rem,
        marginVertical: 8 * rem,
      }}
    >
      <PictureIcon height={29 * rem} width={32 * rem} />
      <Text style={{ marginHorizontal: 5 * rem }}> Adicionar foto</Text>
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
                onPress={() => _chooseImage()}
                style={{
                  borderRadius: 20 * rem,
                  borderColor: RedBase,
                  borderWidth: 1,
                  paddingHorizontal: 8 * rem,
                  alignItems: "center",
                  padding: 5,
                  marginVertical: 5 * rem,
                }}
              >
                <GalleryIcon height={38} width={32} />
                <Text
                  style={{
                    color: RedBase,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                    paddingVertical: 5,
                  }}
                >
                  Escolher da galeria
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => _launchCamera()}
                style={{
                  borderRadius: 20 * rem,
                  borderColor: BlueBase,
                  borderWidth: 1,
                  paddingHorizontal: 8 * rem,
                  alignItems: "center",
                  padding: 5,
                  marginVertical: 5 * rem,
                }}
              >
                <CameraIcon height={38} width={32} />
                <Text
                  style={{
                    color: BlueBase,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                    paddingVertical: 5 * rem,
                  }}
                >
                  Tirar uma foto
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
