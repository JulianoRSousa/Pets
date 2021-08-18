import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import App from "./App";
import AsyncStorage from "@react-native-community/async-storage";
import { useAuth } from "../hooks/Auth";

const Routes = () => {
  const [data, setData] = useState({ auth: "null", token: "null" });
  const { signed } = useAuth();

  // useEffect(() => {
  //   setAuth();
  //   getAuth();
  // }, [signed]);

  const setAuth = async () => {
    const data = JSON.stringify({ auth: true, token: false });
    await AsyncStorage.setItem("@rn:data", data);
    return;
  };
  const getAuth = async () => {
    const constData = JSON.parse(await AsyncStorage.getItem("@rn:data"));
    setData({ auth: constData.auth, token: constData.token });
  };

  return signed == false ? <Auth /> : <App />;
};

export default Routes;
