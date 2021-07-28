import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login/login";
import CreateAccount from "../screen/CreateAccount/CreateAccount";
import Header from "../components/header/header";

function Auth() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" options={{
        headerShown: false,
      }} component={Login} />
      <AuthStack.Screen name="Criar Conta" options={{ headerShown: false}} component={CreateAccount}/>
    </AuthStack.Navigator>
  );
}

export default Auth;
