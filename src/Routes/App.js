import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { White, OrangeBase } from "../assets/AppColors";
import { rem } from "../components/components";
import CustomTabIcon from "../components/BottomTabBar/CustomTabIcons";

import Preview from "../screen/Preview/Preview";
import Feed from "../screen/Feed/Feed";
import Header from "../components/header/header";
import DrawerMenu from "../components/DrawerMenu/drawerMenu";
import CreatePost from "../screen/CreatePost/CreatePost";
import Adoption from "../screen/Adoption/Adoption";
import MyProfile from "../screen/MyProfile/MyProfile";

function App() {
  const AppStack = createStackNavigator();
  const AppTabs = createBottomTabNavigator();
  const AppDrawer = createDrawerNavigator();

  function FeedGroup() {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          options={{ header: () => <Header showBackButton={false} /> }}
          name="Feed"
          component={Feed}
        />
      </AppStack.Navigator>
    );
  }
  function AdoptionGroup() {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          options={{ header: () => <Header showBackButton={false} /> }}
          name="Adoção"
          component={Adoption}
        />
      </AppStack.Navigator>
    );
  }

  function MyProfileGroup() {
    return (
      <AppStack.Navigator>
      <AppStack.Screen
        options={{ header: () => <Header showBackButton={false} /> }}
        name="Meu Perfil"
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
              <Header showBackButton={false} setTitle={"Criar Publicação"} />
            ),
          }}
          component={CreatePost}
        />
        <AppStack.Screen
          name="Preview"
          options={{
            header: () => (
              <Header
                showBackButton={true}
                showTittle={true}
                showMenu={true}
                setTitle={"Prévia"}
              />
            ),
          }}
          component={Preview}
        />
      </AppStack.Navigator>
    );
  }

  const tabRoutes = () => {
    return (
      <AppTabs.Navigator
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => {
            return <CustomTabIcon focused={focused} />;
          },
        }}
        tabBarOptions={{
          activeTintColor: OrangeBase,
          inactiveTintColor: White,
          labelStyle: { fontFamily: "Delius", fontSize: 12 * rem },
          style: {
            borderTopWidth: 0,
            elevation: 0,
            backgroundColor: OrangeBase,
            height: 62 * rem,
            justifyContent: "center",
            paddingBottom: 8 * rem,
          },
        }}
      >
        <AppTabs.Screen name="Feed" component={FeedGroup} />
        <AppTabs.Screen name="Adoção" component={AdoptionGroup} />
        <AppTabs.Screen name="Meu Perfil" component={MyProfileGroup} />
        <AppTabs.Screen name="Novo" component={CreatePostGroup} />
      </AppTabs.Navigator>
    );
  };
  const drawerRoutes = () => {
    return (
      
      <AppDrawer.Navigator
        drawerPosition="right"
        openByDefault={false}
        drawerStyle={{
          width: 304 * rem,
          height: 542 * rem,
          backgroundColor: White,
          borderTopLeftRadius: 33 * rem,
          borderBottomRightRadius: 33 * rem,
        }}
        drawerContent={() => <DrawerMenu />}
      >
        <AppDrawer.Screen name="TabRoutes" component={tabRoutes} />
      </AppDrawer.Navigator>
    );
  }

  return (
    <AppStack.Navigator>
      <AppDrawer.Screen name='fullApp' component={drawerRoutes}
      options={{headerShown:false}} />
    </AppStack.Navigator>
  )
}

export default App;
