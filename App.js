import React from "react";
import Routes from "./src/Routes/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/Auth";
import { DataProvider } from "./src/hooks/Data";

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DataProvider>
          <Routes />
        </DataProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
