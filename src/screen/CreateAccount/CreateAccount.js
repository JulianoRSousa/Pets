import React, { useRef, useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
  // Image,
} from "react-native";
import { rem, ButtonLight, TextLogo, Input } from "../../components/components";
import * as AppColors from "../../assets/AppColors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useAuth } from "../../hooks/useAuth";
import api from "../../services/api";
import { LoginTitleWithSubtitle } from "../../components/HeadersTitle/LoginTitleWithSubtitle";


function CreateAccount() {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const [errorFullName, setErrorFullName] = useState("");
  const [valueFullName, setValueFullName] = useState("");
  const [errorBirthDate, setErrorBirthDate] = useState("");
  const [valueBirthDate, setValueBirthDate] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [errorRepeatPass, setErrorRepeatPass] = useState("");
  const [valueRepeatPass, setValueRepeatPass] = useState("");
  const [valueLatitude, setValueLatitude] = useState("1234");
  const [valueLongitude, setValueLongitude] = useState("1234");
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    () => Keyboard.dismiss;
  }, [termsCheckBox])


  async function handleSubmit() {
    if (valueFullName != "") {
      if (valueBirthDate != '') {
        if (valueEmail != "") {
          if (valuePass == valueRepeatPass) {
            if (String(valuePass).length > 5) {
              if (!termsCheckBox) {
                Alert.alert(
                  "Termos e Condições",
                  "Para criar uma conta precisamos que você leia e aceite nossos termos",
                  [{ text: "Ler os Termos", onPress: () => { setTermsCheckBox(false) } },
                  { text: "Entendi", onPress: () => setTermsCheckBox(false) }]
                );

                // setModalTittle('Termos e condições');
                // setModalMessage('Para criar uma conta é necessario aceitar os termos e condições');
                // setModalState(true);
              } else {
                try {
                  // await callLocation()
                  setLoading(true);
                  await api
                    .post(
                      "/createLogin",
                      {},
                      {
                        headers: {
                          email: valueEmail,
                          fullname: valueFullName,
                          birthDate: valueBirthDate,
                          pass: valuePass,
                          latitude: valueLatitude,
                          longitude: valueLongitude,
                        },
                      }
                    )
                    .then(async (Res) => {
                      setLoading(false);
                      if (Res.status == 201) {
                        Alert.alert("Deu tudo certo!", "Sua conta foi criada com sucesso!", [
                          { text: "OK", onPress: () => handleSignIn() },
                        ]);
                        return;
                      } else if (Res.status == 202) {
                        Alert.alert(
                          "Email invalido",
                          "Este email já está cadastrado!"
                        );
                      }
                    });
                } catch (error) {
                  setLoading(false);
                  console.log(error);
                  if (error.message == "Request failed with status code 401") {
                    Alert.alert(
                      "Email invalido",
                      "Este email já está cadastrado",
                      [
                        { text: "Recuperar senha", onPress: () => { } },
                        { text: "Tentar Novamente", onPress: () => { } },
                      ]
                    );
                  }
                  // Alert.alert("Error", error.message);
                  console.log("errinho:  ", error);
                }
              }
            } else {
              Alert.alert(
                "Senha muito curta",
                "Informe uma senha com pelo menos 6 digitos"
              );

              // setModalMessage('Informe uma senha com pelo menos 6 digitos');
              // setModalTittle('Senha muito curta');
              // setModalState(true);
            }
          } else {
            Alert.alert("Algo está errado!", "Confira se digitou suas senhas corretamente");
          }
        } else {
          Alert.alert("hmm...", "Gostariamos de saber o seu melhor email!", [
            { text: "Ok", onPress: input3.current.focus() },
          ]);
        }
      } else {
        Alert.alert("hmm...", "Gostariamos de saber sua data de nascimento!", [
          { text: "Ok", onPress: input2.current.focus() },
        ]);
      }

    } else {
      Alert.alert("hmm...", "Gostariamos de saber seu nome!", [
        { text: "Ok", onPress: input1.current.focus() },
      ]);
    }
  }

  function handleSignIn() {
    signIn(valueEmail, valuePass);
    // Geolocation.clearWatch(watchID);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: AppColors.OrangeBase,
      }}
    >
      <TouchableWithoutFeedback
        style={{
          width: '100%',
        }}
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <KeyboardAvoidingView
          behavior='position'
          style={{
            justifyContent: 'center'
          }}

          enabled
        >
          <StatusBar translucent={false} backgroundColor={AppColors.OrangeBase} />
          <View style={{ paddingTop: 20 }}>

            <LoginTitleWithSubtitle fontSize={60} />

            <Input
              ref={input1}
              onChangeText={setValueFullName}
              error={errorFullName}
              autoCapitalize={"words"}
              onSubmitEditing={() => {
                valueFullName == ""
                  ? setErrorFullName(!errorFullName)
                  : input2.current.focus();
              }}
              placeholder="nome completo"
              style={{ marginBottom: 6 * rem, marginTop: 38 * rem }}
            />
            <Input
              ref={input2}
              onChangeText={setValueBirthDate}
              error={errorBirthDate}
              keyboardType={"number-pad"}
              onSubmitEditing={() => {
                valueBirthDate == ""
                  ? setErrorBirthDate(!errorBirthDate)
                  : input3.current.focus();
              }}
              placeholder="data de nascimento"
              style={{ marginVertical: 6 * rem }}
            />
            <Input
              ref={input3}
              onChangeText={setValueEmail}
              error={errorEmail}
              autoCapitalize={"none"}
              onSubmitEditing={() => {
                valueEmail == ""
                  ? setErrorEmail(!errorEmail)
                  : input4.current.focus();
              }}
              placeholder="email"
              style={{ marginVertical: 6 * rem }}
            />
            <Input
              onChangeText={setValuePass}
              error={errorPass}
              ref={input4}
              placeholder="senha"
              secureTextEntry
              onSubmitEditing={() => {
                valuePass == "" ? setErrorPass(!errorPass) : input5.current.focus();
              }}
              style={{ marginVertical: 6 * rem }}
            />

            <Input
              onChangeText={setValueRepeatPass}
              onSubmitEditing={() => {
                valueRepeatPass == "" ? setErrorRepeatPass(!errorRepeatPass) : {};
              }}
              error={errorRepeatPass}
              ref={input5}
              placeholder="repetir senha"
              secureTextEntry
              style={{ marginVertical: 6 * rem }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7 * rem,
              }}
            >
              <BouncyCheckbox
                size={18 * rem}

                fillColor={AppColors.BlueBase}
                unfillColor="#fff"
                iconStyle={{ borderColor: AppColors.White }}
                textStyle={{ fontFamily: "SomethingRegular" }}
                onPress={() => {
                  setTermsCheckBox(state => !state);
                  Keyboard.dismiss();
                }}
                useNativeDriver={true}
              />
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "Delius",
                    textAlign: "center",
                    fontSize: 10 * rem,
                    color: AppColors.White,
                  }}
                >
                  li e aceito os termos e condições disponiveis nesse link
                </Text>
              </TouchableOpacity>
            </View>

            <ButtonLight
              text={"criar conta"}
              loading={loading}
              onPress={() => handleSubmit()}
              style={{ marginTop: 28 * rem, marginBottom: 15 * rem, alignSelf: 'center' }}
            />
          </View>

          {/* ---------ESTILO COM ICONES PARA LOGIN COM FACEBOOK E GOOGLE
      <Text
        style={{
          textAlign: "center",
          width: 300 * rem,
          fontSize: 13 * rem,
          color: "white",
          fontFamily: "Delius",
        }}
      >
        Entrar com
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Image
            style={{
              height: 30 * rem,
              width: 30 * rem,
              marginVertical: 9 * rem,
              marginHorizontal: 6 * rem,
            }}
            source={require("../../assets/images/googleIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              height: 30 * rem,
              width: 30 * rem,
              marginVertical: 9 * rem,
              marginHorizontal: 6 * rem,
            }}
            source={require("../../assets/images/facebookIcon.png")}
          />
          <Image />
        </TouchableOpacity>
      </View>
      ---------ESTILO COM ICONES PARA LOGIN COM FACEBOOK E GOOGLE */}


        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default CreateAccount;
