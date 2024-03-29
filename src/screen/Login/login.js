import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { rem, ButtonLight, TextLogo, Input } from "../../components/components";
import * as AppColors from "../../assets/AppColors";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/Auth";
import { DrawerItem } from '@react-navigation/drawer'

function Login() {
  const input2 = useRef();
  const [errorEmail, setErrorEmail] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [valuePass, setValuePass] = useState("");
  const navigation = useNavigation();
  const { signIn, loading } = useAuth();

  async function handleSignIn() {
    navigation.reset;
    const res = await signIn(valueEmail, valuePass);
    if (
      res != null &&
      String(res).includes("Request failed with status code 401")
    ) {
      Alert.alert("Erro", "Usuário ou senha invalidos");
      // modal.ShowModal('OneButton', 'Falha na autenticação', 'Usuário ou senha invalidos', 'Tentar novamente', '', () => onPressOne)
    }
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.OrangeBase,
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <StatusBar translucent={false} backgroundColor={AppColors.OrangeBase} />
      <Text
        style={{
          fontFamily: "Delius",
          textAlign: "center",
          fontSize: 130 * rem,
          maxHeight: 260 * rem,
          alignSelf: "center",
          color: AppColors.White,
        }}
      >
        pets
      </Text>
      <KeyboardAvoidingView
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          onChangeText={setValueEmail}
          error={errorEmail}
          autoCapitalize={"none"}
          blurOnSubmit={true}
          secureTextEntry={false}
          onSubmitEditing={() => {
            valueEmail == ""
              ? setErrorEmail(!errorEmail)
              : input2.current.focus();
          }}
          placeholder="email"
          style={{ marginVertical: 28 * rem }}
        />
        <Input
          onChangeText={setValuePass}
          keyboardType={"default"}
          autoCapitalize={"none"}
          blurOnSubmit={true}
          onSubmitEditing={() => {
            valuePass == "" ? setErrorPass(!errorPass) : handleSignIn();
          }}
          error={errorPass}
          ref={input2}
          placeholder="senha"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Delius",
              textAlign: "right",
              width: 300 * rem,
              fontSize: 10 * rem,
            }}
          >
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>
        <ButtonLight
          loading={loading}
          text={"entrar"}
          onPress={() => handleSignIn()}
          style={{ marginTop: 13 * rem }}
        />
        <ButtonLight
          text={"criar conta"}
          onPress={() => navigation.navigate("Criar Conta")}
          style={{ marginVertical: 27 * rem }}
        />
        {/* <Text
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
      </View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;
