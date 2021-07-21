import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login/login";
import CreateAccount from "../screen/CreateAccount/CreateAccount";

function Auth() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
    </AuthStack.Navigator>
  );
}

export default Auth;
