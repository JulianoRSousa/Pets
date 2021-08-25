import { BlurView } from "@react-native-community/blur";
import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import {
  BlueBase,
  pickerColor,
  GreenBase,
  RedBase,
  GrayDark,
  GrayLight,
} from "../../assets/AppColors";
import { rem } from "../components";
import { useAuth } from "../../hooks/Auth";
import api from "../../services/api";
import PetItem from "../Pets/PetItem";
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

export const PickerPet = (props) => {
  const [text, setText] = useState("escolha um de seus pets");
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [petList, setPetList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
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
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        props.petId(item.id),
          props.firstName(item.firstName),
          props.lastName(item.lastName),
          props.petName(item.firstName + " " + item.lastName),
          props.petPicture(item.picture),
          props.petPictureUrl(item.picture_url),
          props.petType(item.type),
          setVisible(false);
      }}
    >
      <PetItem
        opacity={false}
        petName={item.firstName + " " + item.lastName}
        petImage={{ uri: item.picture_url }}
        petDescription={"item.description"}
        petAge={item.birthdate}
        petType={item.type ? item.type : ""}
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
              borderRadius: 20 * rem,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              padding: 8 * rem,
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
              <ScrollView style={{ opacity: 0.9 }}>
                <View style={{ alignSelf: "center" }}>
                  <Text
                    style={{
                      fontFamily: "Delius",
                      fontSize: 18 * rem,
                      margin: 15 * rem,
                      alignSelf: "center",
                    }}
                  >
                    Escolha um de seus pets
                  </Text>
                  {PetContainer}
                  <TouchableOpacity
                    onPress={() => setVisible(false)}
                    style={{
                      borderWidth: 1,
                      borderColor: GrayLight,
                      borderRadius: 20 * rem,
                      paddingHorizontal: 10 * rem,
                      paddingVertical: 5 * rem,
                      alignSelf: "center",
                      margin: 15 * rem,
                    }}
                  >
                    <Text style={{ fontFamily: "Delius", color: GrayDark }}>
                      Cancelar
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
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
              onPress: () => {},
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
              onPress: () => {},
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
