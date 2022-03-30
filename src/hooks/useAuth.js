import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";
import { store } from "../redux/Store";

const AuthContext = createContext();

function AuthProvider({ children }, props) {
  const [contextUser, setContextUser] = useState(null);
  const [contextToken, setContextToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contextSigned, setContextSigned] = useState(null);


  async function signIn(email, pass) {
    setLoading(true);
    try {
      const signinResponse = await auth.SignInService(email, pass);
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


  async function signOut(token) {
    await auth.SignOutService(token);
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
