import React from "react";
import Routes from "./src/Routes/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/Auth";
import { LoadProvider } from "./src/hooks/Load";

function App() {
  return (
    <NavigationContainer>
      <LoadProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LoadProvider>
    </NavigationContainer>
  );
}

export default App;
