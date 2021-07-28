import React, { useRef, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { rem, ButtonLight, TextLogo, Input } from "../../components/components";
import * as AppColors from "../../assets/AppColors";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/Auth";

function Login() {
  const input2 = useRef();
  const [errorEmail, setErrorEmail] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [valuePass, setValuePass] = useState("");
  const navigation = useNavigation();
  const { signIn, loading } = useAuth();




  async function handleSignIn() {
    console.log('startHandlew')
    navigation.reset;
    const res = await signIn(valueEmail, valuePass)
    console.log(res)
    if ((res != null && String(res).includes('Request failed with status code 401'))) {
      Alert.alert('Erro', 'Usuário ou senha invalidos',)
      // modal.ShowModal('OneButton', 'Falha na autenticação', 'Usuário ou senha invalidos', 'Tentar novamente', '', () => onPressOne)
    }
  }


  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.OrangeBase,
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-start',
      }}
    >
      <StatusBar translucent={false} backgroundColor={AppColors.OrangeBase} />
      <TextLogo>pets</TextLogo>
      <Input
        onChangeText={setValueEmail}
        error={errorEmail}
        keyboardType={"email-address"}
        autoCapitalize={"none"}
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
        keyboardType={'default'}
        autoCapitalize={'none'}
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
        onPress={()=> handleSignIn()}
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
    </SafeAreaView>
  );
}

export default Login;
