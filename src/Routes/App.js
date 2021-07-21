import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login/login";
import CreateAccount from "../screen/CreateAccount/CreateAccount";
import * as AppColors from "../assets/AppColors";
import Header from "../components/header/header";

function App() {
  const AppStack = createStackNavigator();
  return (
    <AppStack.Navigator initialRouteName="Login">
      <AppStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <AppStack.Screen
        name="CreateAccount"
        options={{
          headerShown: true,
          header: () => <Header showBackButton={true} showMenu={false} />,
        }}
        component={CreateAccount}
      />
    </AppStack.Navigator>
  );
}

export default App;
