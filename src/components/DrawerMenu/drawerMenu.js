import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { GrayDark, RedBase } from "../../assets/AppColors";
import { rem } from "../components";
import DrawerItemProfile from "./drawerItemProfile";
import FriendsIcon from "../../assets/images/FriendsIcon.svg";
import NotifyIcon from "../../assets/images/NotifyIcon.svg";
import SettingsIcon from "../../assets/images/settingsIcon.svg";
import AboutIcon from "../../assets/images/AboutIcon.svg";
import { useAuth } from "../../hooks/useAuth";
import {
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";

function DrawerMenu(props) {
  const { signOut } = useAuth();
  const navigation = useNavigation();
  return (
    <View>
      <DrawerItemProfile />
      <TouchableOpacity
        style={{
          height: 52 * rem,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15 * rem,
        }}
      >
        <FriendsIcon
          height={31 * rem}
          width={31 * rem}
          style={{ paddingLeft: 15 * rem }}
        />
        <Text
          style={{
            fontSize: 16 * rem,
            fontFamily: "Delius",
            color: GrayDark,
            marginHorizontal: 16 * rem,
          }}
        >
          Amigos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 52 * rem,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15 * rem,
        }}
      >
        <NotifyIcon
          height={31 * rem}
          width={31 * rem}
          style={{ paddingLeft: 15 * rem }}
        />
        <Text
          style={{
            fontSize: 16 * rem,
            fontFamily: "Delius",
            color: GrayDark,
            marginHorizontal: 16 * rem,
          }}
        >
          Notificações
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 52 * rem,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15 * rem,
        }}
      >
        <SettingsIcon
          height={31 * rem}
          width={31 * rem}
          style={{ paddingLeft: 15 * rem }}
        />
        <Text
          style={{
            fontSize: 16 * rem,
            fontFamily: "Delius",
            color: GrayDark,
            marginHorizontal: 16 * rem,
          }}
        >
          Configurações
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 52 * rem,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15 * rem,
        }}
      >
        <AboutIcon
          height={31 * rem}
          width={31 * rem}
          style={{ paddingLeft: 15 * rem }}
        />
        <Text
          style={{
            fontSize: 16 * rem,
            fontFamily: "Delius",
            color: GrayDark,
            marginHorizontal: 16 * rem,
          }}
        >
          Sobre o Pets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          signOut();
          navigation.dispatch(DrawerActions.closeDrawer());
        }}
        style={{
          height: 52 * rem,
          justifyContent: "center",
          paddingHorizontal: 15 * rem,
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            fontSize: 16 * rem,
            fontFamily: "Delius",
            color: RedBase,
            marginHorizontal: 16 * rem,
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default DrawerMenu;
7;
