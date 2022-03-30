import React from "react";

import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/Store';


import 'react-native-gesture-handler'
import Routes from "./src/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/useAuth";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer  >
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
