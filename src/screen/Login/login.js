import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  View
} from "react-native";
import { rem, ButtonLight, Input, } from "../../components/components";
import * as AppColors from "../../assets/AppColors";
import { useAuth } from "../../hooks/useAuth";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { LoginTitle } from "../../components/HeadersTitle/LoginTitle";

const Login = ({ navigation }) => {
  const input1 = useRef();
  const input2 = useRef();
  const [errorEmail, setErrorEmail] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [e, setE] = useState({})
  const [isLoadingPage, setIsLoadingPage] = useState(false)
  const { loading, signIn } = useAuth();


  async function handleSubmit() {
    try {

      const apiResponse = await signIn(valueEmail, valuePass)
      console.log('apiResponse here: ', apiResponse)

      console.log('Response here: ', apiResponse)
      if (apiResponse.name == 'Error') {
        setIsLoadingPage(false)
        Alert.alert('Usuário ou senha invalidos')
      } else if (apiResponse.status == 201) {
        console.log('entrar')
      }
    } catch (err) {
      console.log('Erro no login: ', err.message)

    }
  }

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        backgroundColor: AppColors.OrangeBase,
      }}>
      <TouchableWithoutFeedback style={{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
      }} onPress={Keyboard.dismiss}>

        <StatusBar translucent={false} backgroundColor={AppColors.OrangeBase} />
        <KeyboardAvoidingView
          behavior='position'
          style={{
            justifyContent: 'center'
          }}
          enabled
        >
          <LoginTitle title={'Pets'} />

          <View
            style={{
              alignItems: "center",
            }}>

            <Input
              name={'email'}
              onChangeText={setValueEmail}
              autoFocus={false}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              autoCapitalize={"none"}
              secureTextEntry={false}
              autoCorrect={false}
              spellCheck={false}
              onEndEditing={() => {
                valueEmail == ""
                  ? setErrorEmail(!errorEmail)
                  : input2?.current?.focus()
              }}
              onSubmitEditing={() => {
                valueEmail == ""
                  ? setErrorEmail(!errorEmail)
                  : input2?.current?.focus();
              }}
              placeholder="email"
              style={{ marginVertical: 28 * rem }}
            />
            <Input
              name={'password'}
              onChangeText={setValuePass}
              autoFocus={false}
              keyboardType={'default'}
              autoCapitalize={"none"}
              returnKeyType="done"
              onSubmitEditing={() => {
                valuePass == "" ? setErrorPass(!errorPass) : handleSubmit();
              }}
              ref={input2}
              placeholder="senha"
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Delius",
                  textAlign: "right",
                  width: 300 * rem,
                  fontSize: 10 * rem,
                }}>
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>
            <ButtonLight
              loading={loading}
              text={"entrar"}
              onPress={() => handleSubmit()}
              style={{ marginTop: 13 * rem }}
            />
            <ButtonLight
              text={"criar conta"}
              onPress={() => navigation.navigate("Criar Conta")}
              style={{ marginTop: 10 * rem }}
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
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>

  );
}

export default Login;
