import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";

const DataContext = createContext();

function DataProvider({ children }) {
  // const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [signed, setSigned] = useState(true);

  // useEffect(() => {
  //   async function loadStorageData() {
  //     const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
  //     const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

  //     if (storagedUser && storagedToken) {
  //       setUser(JSON.parse(storagedUser));
  //       api.defaults.headers.Authorization = storagedToken;
  //       setToken(storagedToken);
  //     }
  //     setLoading(false);
  //   }

  //   loadStorageData();
  // }, []);

  // async function signIn(email, pass) {
  //   setLoading(true);
  //   try {
  //     const response = await auth.signIn(email, pass);
  //     setToken(response.token);
  //     setUser(response.user);
  //     setSigned(response.auth);
  //     api.defaults.headers.Authorization = `Baerer ${response.token}`;

  //     await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
  //     await AsyncStorage.setItem("@RNAuth:token", response.token);
  //     setLoading(false);

  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     if (error.auth) {
  //       setLoading(false);
  //       return null;
  //     }
  //     setLoading(false);
  //     return error;
  //   }
  // }

  // async function signOut() {
  //   await auth.signOut();
  //   await AsyncStorage.clear();
  //   setUser(null);
  // }

  return (
    <DataContext.Provider
      value={{
        // signed: !!user,
        // user,
        // token,
        // loading,
        // signIn,
        // signOut,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within an DataProvider.");
  }

  return context;
}

export { DataProvider, useData };
