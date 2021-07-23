import React, { useRef, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { rem, ButtonLight, TextLogo, Input } from "../../components/components";
import * as AppColors from "../../assets/AppColors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useAuth } from "../../hooks/Auth";

function CreateAccount() {
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
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const { signIn, loading } = useAuth();

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.OrangeBase,
        flex: 1,
        alignItems: "center",
      }}
    >
      <StatusBar translucent={false} backgroundColor={AppColors.OrangeBase} />

      <TextLogo style={{ height: 100 * rem, fontSize: 70 * rem }}>
        pets
      </TextLogo>
      <View
        style={{
          backgroundColor: AppColors.OrangeLight,
          width: "100%",
          alignItems: "center",
          height: 40 * rem,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "Quicksand-Medium",
            fontSize: 26 * rem,
            color: AppColors.White,
          }}
        >
          CADASTRE-SE
        </Text>
      </View>
      <Input
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
        keyboardType={"email-address"}
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
        onSubmitEditing={() => {
          valuePass == "" ? setErrorPass(!errorPass) : {};
        }}
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
          onPress={() => setTermsCheckBox(!termsCheckBox)}
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
        onPress={() => Auth.setLogged(true)}
        style={{ marginTop: 28 * rem, marginBottom: 15 * rem }}
      />

      {/*
      ---------ESTILO COM ICONES PARA LOGIN COM FACEBOOK E GOOGLE
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
      ---------ESTILO COM ICONES PARA LOGIN COM FACEBOOK E GOOGLE*/}
    </SafeAreaView>
  );
}

export default CreateAccount;
