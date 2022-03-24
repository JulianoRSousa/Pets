import React from "react";
import 'react-native-gesture-handler'
import Routes from "./src/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/useAuth";

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
