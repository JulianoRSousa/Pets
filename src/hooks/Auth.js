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
      // const storagedUser = await AsyncStorage.getItem("@rn:user");
      const storagedToken = await AsyncStorage.getItem("@rn:token");
      if (!!storagedToken) {
        const ApiUser = await auth.loadUser(storagedToken);
        setUser(ApiUser.user);
        api.defaults.headers.Authorization = storagedToken;
        setToken(storagedToken);
        setSigned(true);
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(email, pass) {
    setLoading(true);
    try {
      const response = await auth.signIn(email, pass);
      setUser(response.user);
      setToken(response.token);
      setSigned(response.auth);
      api.defaults.headers.Authorization = `Baerer ${response.token}`;
      await AsyncStorage.setItem("@rn:auth", JSON.stringify(response.auth));
      await AsyncStorage.setItem("@rn:user", JSON.stringify(response.user));
      await AsyncStorage.setItem("@rn:token", response.token);
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

  // async function signInToken(token) {
  //   setLoading(true);
  //   try {
  //     const response = await auth.loadUser(token);
  //     setUser(response.user);
  //     await AsyncStorage.setItem("@rn:user", JSON.stringify(response.user));
  //     await AsyncStorage.setItem("@rn:token", response.token);
  //     setLoading(false);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     if (error.auth) {
  //       setLoading(false);
  //       console.error(error);
  //       return;
  //     }
  //     setLoading(false);
  //     return error;
  //   }
  // }

  async function signOut() {
    await auth.signOut();
    await AsyncStorage.clear();
    setUser(null);
    setSigned(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed, user, token, loading, signIn, signOut }}
    >
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
