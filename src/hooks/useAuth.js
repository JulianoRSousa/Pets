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


  async function signIn(email, password) {
    const signinResponse = await auth.SignInService(email, password);
    return signinResponse;
  }
  async function signUp(email, password, fullname, birthdate) {
    const signupResponse = await auth.SignUpService(email, password, fullname, birthdate);
    return signupResponse;
  }
  async function createPost(petId, file, status, description, token) {
    const createPostResponse = await auth.CreatePost(petId, file, status, description, token);
    return createPostResponse
  }


  async function signOut(token) {
    const signoutResponse = await auth.SignOutService(token);
    return signoutResponse;
  }

  return (
    <AuthContext.Provider
      value={{ contextSigned, contextUser, contextToken, loading, signIn, signOut, signUp, createPost }}
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
