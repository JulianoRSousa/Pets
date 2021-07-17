import React, { useRef, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { rem, ButtonLight, TextLogo, Input } from "../../components/components";
import * as AppColors from "../../assets/AppColors";

export default function Login() {
  const input2 = useRef();
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColors.OrangeBase,
        flex: 1,
        alignItems: "center",
      }}
    >
      <StatusBar translucent={false} backgroundColor={AppColors.OrangeBase} />
      <TextLogo>pets</TextLogo>
      <Input
        keyboardType={"email-address"}
        autoCapitalize={"none"}
        onSubmitEditing={() => input2.current.focus()}
        placeholder="email"
        style={{ marginVertical: 28 * rem }}
      />
      <Input ref={input2} placeholder="senha" secureTextEntry />
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
        onPress={() => setLoading(!loading)}
        text={"entrar"}
        style={{ marginTop: 13 * rem }}
      />
      <ButtonLight text={"criar conta"} style={{ marginVertical: 27 * rem }} />
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
    </SafeAreaView>
  );
}
