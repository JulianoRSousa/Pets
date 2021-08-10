import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";
import { Alert } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

const DataContext = createContext();

function DataProvider({ children }) {
  const [loadingInfos, setLoadingInfos] = useState(false);
  const [configData, setConfigData] = useState({});
  const [data, setData] = useState({
    userVersion: null,
    user: {
      firstname: null,
      lastname: null,
      profilePictureUrl: null,
      username: null,
      id: null,
      email: null,
      birthdate: null,
      followerList: [null],
      postList: [null],
      petList: [null],
    },
  });

  const [offlinePostList, setOfflinePostList] = useState([]);

  const NetInfo = useNetInfo();

  useEffect(() => {
    setLoadingInfos(true);
    isAuthenticated();
    setLoadingInfos(false);
  }, []);

  async function isAuthenticated() {
    const isAuth = JSON.parse(await AsyncStorage.getItem("@rn:auth"));
    if (isAuth) {
      setData({
        user: JSON.parse(await AsyncStorage.getItem("@rn:user")),
        userVersion: JSON.parse(await AsyncStorage.getItem("@rn:userVersion")),
      });
    }
  }

  return (
    <DataContext.Provider
      value={{
        user: data.user,
        userVersion: data.userVersion,
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
