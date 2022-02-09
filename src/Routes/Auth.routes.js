import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login/login";
import CreateAccount from "../screen/CreateAccount/CreateAccount";
import Header from "../components/header/header"


function Auth() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: true }}>
      <AuthStack.Screen name="Login" options={{
        headerShown: false,
      }} component={Login} />
      <AuthStack.Screen name="Criar Conta" options={{
        headerShown: true,
        header: () => { return (<Header showBackButton={true} showTitle={false} showMenu={false} />) }
      }} component={CreateAccount} />
    </AuthStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerBack: {
    backgroundColor: '#ff8637'
  }
})

export default Auth;
