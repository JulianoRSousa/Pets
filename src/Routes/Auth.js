import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login/login";
import CreateAccount from "../screen/CreateAccount/CreateAccount";
import Header from "../components/header/header";

function Auth() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" options={{headerShown:true, header: ()=> <Header showBackButton={false}/>}} component={Login} />
      <AuthStack.Screen name="Criar Conta" options={{headerShown:true, header: ()=> <Header showMenu={false} showTittle={true}/>}} component={CreateAccount} />
    </AuthStack.Navigator>
  );
}

export default Auth;
