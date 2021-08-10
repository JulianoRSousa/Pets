import React from "react";
import Routes from "./src/Routes/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/Auth";

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
