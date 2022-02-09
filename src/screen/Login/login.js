import React, { useRef, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks";
import * as Yup from 'yup'
import { TextInput } from "react-native-gesture-handler";
import { signInSchema } from '../../validators/Auth'
import { Form } from '@unform/mobile'

function Login() {
  const input2 = useRef();
  const [errorEmail, setErrorEmail] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [valuePass, setValuePass] = useState("");
  const [e, setE] = useState({})
  const [isLoadingPage, setIsLoadingPage] = useState(false)
  const formRef = useRef();
  const navigation = useNavigation();
  const { signIn, loading } = useAuth();


  async function handleSubmit(data) {

    try {
      await signInSchema.validate(data, {
        abortEarly: false,
      })

      formRef.current.setErrors({})
      setIsLoadingPage(true)


      try {
        const apiResponse = await signIn(data)

        if (apiResponse.name = 'Error') {
          setIsLoadingPage(false)
          Alert.alert("Erro", "Usuário ou senha invalidos");
        }
      } catch (err) {
        console.log('Erro no login: ', err.message)
      }
    } catch (err) {
      setIsLoadingPage(false)

      if (err instanceof Yup.ValidationError) {
        setIsLoadingPage(false)
        try {
          const errorMessages = {}

          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message
            Alert.alert('error: ', error.message)
          })

          formRef.current.setErrors(errorMessages)
          setE(errorMessages)

          return
        } catch (error) {
          setIsLoadingPage(false)
          console.log(error)
        }
      }

      formRef.current.reset()

      Alert.alert('Error: ', err.response.data.message)
      setIsLoadingPage(false)
    }






    navigation.reset;
    const res = await signIn({ valueEmail, valuePass });
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
      <Form ref={formRef} onSubmit={handleSubmit}>

        <StatusBar translucent={false} backgroundColor={AppColors.OrangeBase} />
        <Text
          style={{
            fontFamily: "Delius",
            textAlign: "center",
            textAlignVertical: 'top',
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
            name='email'
            label='email'
            onChangeText={setValueEmail}
            error={errorEmail}
            autoFocus={false}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            autoCapitalize={"none"}
            secureTextEntry={false}
            autoCorrect={false}
            autoComplete={'off'}
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
            name='password'
            label='password'
            onChangeText={setValuePass}
            autoFocus={false}
            keyboardType={'default'}
            autoCapitalize={"none"}
            returnKeyType="done"
            onSubmitEditing={() => {
              valuePass == "" ? setErrorPass(!errorPass) : handleSubmit();
            }}
            error={errorPass}
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
              }}
            >
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
      </Form>

    </SafeAreaView>

  );
}

export default Login;
