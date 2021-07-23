import React from "react";
import Routes from "./src/Routes/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/Auth";
import { LogBox } from "react-native";

function App() {
  LogBox.ignoreLogs(["Reanimated 2"]);

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
