import React from "react";
import { View, Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "../screen/Feed/Feed";
import Header from "../components/header/header";
import CreatePost from "../screen/CreatePost/CreatePost";
import Adoption from "../screen/Adoption/Adoption";
import MyProfile from "../screen/MyProfile/MyProfile";
import * as AppColors from "../assets/AppColors";
import { useRoute } from "@react-navigation/core";
import TabIconNovo from "../assets/images/tabIconNovo.svg";
import TabIconNovoFocused from "../assets/images/tabIconNovoFocused.svg";
import TabIconMeuPerfil from "../assets/images/tabIconMeuPerfil.svg";
import TabIconMeuPerfilFocused from "../assets/images/tabIconMeuPerfilFocused.svg";
import TabIconAdocao from "../assets/images/tabIconAdocao.svg";
import TabIconAdocaoFocused from "../assets/images/tabIconAdocaoFocused.svg";
import TabIconFeed from "../assets/images/tabIconFeed.svg";
import TabIconFeedFocused from "../assets/images/tabIconFeedFocused.svg";

function App() {
  const AppStack = createStackNavigator();
  const AppTabsNavigator = createBottomTabNavigator();
  const AppDrawer = createDrawerNavigator();

  function FeedGroup() {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name="Feed"
          options={{
            header: () => <Header showTittle={true} showMenu={true} />,
          }}
          component={Feed}
        />
      </AppStack.Navigator>
    );
  }
  function AdoptionGroup() {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name="Adoção"
          options={{
            header: () => <Header showTittle={true} showMenu={true} />,
          }}
          component={Adoption}
        />
      </AppStack.Navigator>
    );
  }
  function MyProfileGroup() {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name="Meu Perfil"
          options={{
            header: () => <Header showTittle={true} showMenu={true} />,
          }}
          component={MyProfile}
        />
      </AppStack.Navigator>
    );
  }
  function CreatePostGroup() {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          name="Novo"
          options={{
            header: () => (
              <Header
                showBackButton={false}
                showTittle={true}
                showMenu={true}
              />
            ),
          }}
          component={CreatePost}
        />
      </AppStack.Navigator>
    );
  }

  function CustomTabIcon(props) {
    const route = useRoute();

    if (route.name == "Novo") {
      return props.focused ? (
        <View
          style={{
            backgroundColor: AppColors.White,
            borderRadius: 16,
            height: 57,
            width: 63,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabIconNovoFocused width={30} height={30} marginBottom={5} />
        </View>
      ) : (
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabIconNovo width={30} height={30} marginBottom={5} />
        </View>
      );
    } else if (route.name == "Meu Perfil") {
      return props.focused ? (
        <View
          style={{
            backgroundColor: AppColors.White,
            borderRadius: 16,
            height: 57,
            width: 63,
            marginTop: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabIconMeuPerfilFocused width={30} height={30} marginBottom={5} />
        </View>
      ) : (
        <View
          style={{
            marginTop: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabIconMeuPerfil width={30} height={30} marginBottom={5} />
        </View>
      );
    } else if (route.name == "Adoção") {
      return props.focused ? (
        <View
          style={{
            backgroundColor: AppColors.White,
            borderRadius: 16,
            height: 57,
            width: 63,
            marginTop: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabIconAdocaoFocused width={30} height={30} marginBottom={5} />
        </View>
      ) : (
        <View
          style={{
            marginTop: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabIconAdocao width={30} height={30} marginBottom={5} />
        </View>
      );
    } else {
      return props.focused ? (
        <View
          style={{
            backgroundColor: AppColors.White,
            borderRadius: 16,
            height: 57,
            width: 63,
            marginTop: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabIconFeedFocused width={30} height={30} marginBottom={5} />
        </View>
      ) : (
        <View
          style={{
            marginTop: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabIconFeed width={30} height={30} marginBottom={5} />
        </View>
      );
    }
  }

  function AppTabs() {
    return (
      <AppTabsNavigator.Navigator
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => {
            return <CustomTabIcon focused={focused} />;
          },
        }}
        tabBarOptions={{
          activeTintColor: AppColors.OrangeBase,
          inactiveTintColor: AppColors.White,
          labelStyle: { fontFamily: "Delius", fontSize: 12 },
          style: {
            backgroundColor: AppColors.OrangeBase,
            height: 64,
            justifyContent: "center",
          },
        }}
      >
        <AppStack.Screen
          name="Feed"
          options={{
            headerShown: false,
            header: () => (
              <Header showMenu={true} showTittle={true} showBackButton={true} />
            ),
          }}
          component={FeedGroup}
        />
        <AppStack.Screen
          name="Adoção"
          options={{
            headerShown: true,
            header: () => (
              <Header showMenu={true} showTittle={true} showBackButton={true} />
            ),
          }}
          component={AdoptionGroup}
        />
        <AppStack.Screen
          name="Meu Perfil"
          options={{
            headerShown: true,
            header: () => (
              <Header showMenu={true} showTittle={true} showBackButton={true} />
            ),
          }}
          component={MyProfileGroup}
        />
        <AppStack.Screen
          name="Novo"
          options={{
            headerShown: true,
            header: () => (
              <Header showMenu={true} showTittle={true} showBackButton={true} />
            ),
          }}
          component={CreatePostGroup}
        />
      </AppTabsNavigator.Navigator>
    );
  }

  return (
    <AppDrawer.Navigator drawerPosition="right">
      <AppStack.Screen
        name="Pets"
        options={{
          headerShown: false,
          header: () => (
            <Header showMenu={true} showTittle={true} showBackButton={true} />
          ),
        }}
        component={AppTabs}
      />
    </AppDrawer.Navigator>
  );
}

export default App;
