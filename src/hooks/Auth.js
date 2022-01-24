import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }, props) {
  const [contextUser, setContextUser] = useState(null);
  const [contextToken, setContextToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contextSigned, setContextSigned] = useState(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem("@rn:token");
      if (storagedToken) {
        const contextUser = await auth.loadUser(storagedToken);
        setContextUser(contextUser);
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setContextToken(storagedToken);
        setContextSigned(true);
      }
      setLoading(false);
      setContextSigned(false);
    }
    loadStorageData();
  }, []);

  // useEffect(() => {
  //   async function loadStorageData() {
  //     const storagedToken = await AsyncStorage.getItem("@rn:token");
  //     if (!!storagedToken) {
  //       const ApiUser = await auth.loadUser(storagedToken);
  //       setUser(ApiUser.user);
  //       api.defaults.headers.Authorization = storagedToken;
  //       setToken(storagedToken);
  //       setSigned(true);
  //     }
  //     setLoading(false);
  //   }
  //   loadStorageData();
  // }, []);

  async function signIn(email, pass) {
    setLoading(true);
    try {
      const signinResponse = await auth.signIn(email, pass);
      setContextUser(signinResponse.user);
      setContextToken(signinResponse.token);
      setContextSigned(signinResponse.auth);
      api.defaults.headers.Authorization = `Baerer ${signinResponse.token}`;
      await AsyncStorage.setItem("@rn:auth", JSON.stringify(signinResponse.auth));
      await AsyncStorage.setItem("@rn:user", JSON.stringify(signinResponse.user));
      await AsyncStorage.setItem("@rn:token", signinResponse.token);
      setLoading(false);
      return signinResponse;
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
  //     const signinResponse = await auth.loadUser(token);
  //     setUser(signinResponse.user);
  //     await AsyncStorage.setItem("@rn:user", JSON.stringify(signinResponse.user));
  //     await AsyncStorage.setItem("@rn:token", signinResponse.token);
  //     setLoading(false);
  //     return signinResponse;
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
    setContextUser(null);
    setContextSigned(false);
  }

  return (
    <AuthContext.Provider
      value={{ contextSigned, contextUser, contextToken, loading, signIn, signOut }}
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
