import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/core";
import { rem } from "../components";
import { White } from "../../assets/AppColors";
import TabIconNovo from "../../assets/images/tabIconNovo.svg";
import TabIconNovoFocused from "../../assets/images/tabIconNovoFocused.svg";
import TabIconMeuPerfil from "../../assets/images/tabIconMeuPerfil.svg";
import TabIconMeuPerfilFocused from "../../assets/images/tabIconMeuPerfilFocused.svg";
import TabIconAdocao from "../../assets/images/tabIconAdocao.svg";
import TabIconAdocaoFocused from "../../assets/images/tabIconAdocaoFocused.svg";
import TabIconFeed from "../../assets/images/tabIconFeed.svg";
import TabIconFeedFocused from "../../assets/images/tabIconFeedFocused.svg";

function CustomTabIcon(props) {
  const route = useRoute();

  if (route.name == "Novo") {
    return props.focused ? (
      <View
        style={{
          backgroundColor: White,
          borderRadius: 15 * rem,
          height: 57 * rem,
          width: 63 * rem,
          marginTop: 20 * rem,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabIconNovoFocused
          width={30 * rem}
          height={30}
          marginBottom={5 * rem}
        />
      </View>
    ) : (
      <View
        style={{
          marginTop: 20 * rem,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabIconNovo
          width={30 * rem}
          height={30 * rem}
          marginBottom={5 * rem}
        />
      </View>
    );
  } else if (route.name == "Meu Perfil") {
    return props.focused ? (
      <View
        style={{
          backgroundColor: White,
          borderRadius: 16 * rem,
          height: 57 * rem,
          width: 63 * rem,
          marginTop: 22 * rem,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabIconMeuPerfilFocused
          width={30 * rem}
          height={30 * rem}
          marginBottom={5 * rem}
        />
      </View>
    ) : (
      <View
        style={{
          marginTop: 22 * rem,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabIconMeuPerfil
          width={30 * rem}
          height={30 * rem}
          marginBottom={5 * rem}
        />
      </View>
    );
  } else if (route.name == "Adoção") {
    return props.focused ? (
      <View
        style={{
          backgroundColor: White,
          borderRadius: 16 * rem,
          height: 57 * rem,
          width: 63 * rem,
          marginTop: 22 * rem,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabIconAdocaoFocused
          width={30 * rem}
          height={30 * rem}
          marginBottom={5 * rem}
        />
      </View>
    ) : (
      <View
        style={{
          marginTop: 22 * rem,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabIconAdocao
          width={30 * rem}
          height={30 * rem}
          marginBottom={5 * rem}
        />
      </View>
    );
  } else {
    return props.focused ? (
      <View
        style={{
          backgroundColor: White,
          borderRadius: 16 * rem,
          height: 57 * rem,
          width: 63 * rem,
          marginTop: 22 * rem,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabIconFeedFocused
          width={30 * rem}
          height={30 * rem}
          marginBottom={5 * rem}
        />
      </View>
    ) : (
      <View
        style={{
          marginTop: 22 * rem,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabIconFeed
          width={30 * rem}
          height={30 * rem}
          marginBottom={5 * rem}
        />
      </View>
    );
  }
}
export default CustomTabIcon;
