import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@rn:user");
      const storagedToken = await AsyncStorage.getItem("@rn:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = storagedToken;
        setToken(storagedToken);
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email, pass) {
    setLoading(true);
    try {
      const response = await auth.signIn(email, pass);
      setToken(response.token);
      setSigned(response.auth);
      api.defaults.headers.Authorization = `Baerer ${response.token}`;
      await AsyncStorage.setItem("@rn:auth", response.auth);
      await AsyncStorage.setItem("@rn:user", JSON.stringify(response.user));
      await AsyncStorage.setItem("@rn:token", response.token);
      await AsyncStorage.setItem(
        "@rn:userConfig",
        JSON.stringify(response.userConfig)
      );
      await AsyncStorage.setItem(
        "@rn:dataVersion",
        JSON.stringify(response.dataVersion)
      );
      await AsyncStorage.setItem("@rn:notification", response.notification);
      setLoading(false);

      return response;
    } catch (error) {
      console.log(error);
      if (error.auth) {
        setLoading(false);
        return null;
      }
      setLoading(false);
      return error;
    }
  }

  async function signOut() {
    await auth.signOut();
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed, token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
