// import React, { createContext, useState, useEffect, useContext } from "react";
// import AsyncStorage from "@react-native-community/async-storage";
// import * as appInfo from "../services/appInfo";
// import api from "../services/api";

// const DataContext = createContext();

// function DataProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [userConfig, setUserConfig] = useState(null);
//   const [dataVersion, setDataVersion] = useState(null);
//   const [notification, setNotification] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     setLoading(false);
//   }, []);

//   async function loadStoragedData() {
//     const storagedUser = await AsyncStorage.getItem("@rn:user");

//     setDataVersion(JSON.parse(storagedDataVersion));
//     setUser(JSON.parse(storagedUser));
//     setNotification(JSON.parse(storagedNotification));
//   }

//   async function cleanOut(email, pass) {
//     setLoading(true);
//     try {
//       const response = await auth.signIn(email, pass);
//       setToken(response.token);
//       setUser(response.user);
//       setSigned(response.auth);
//       api.defaults.headers.Authorization = `Baerer ${response.token}`;

//       await AsyncStorage.setItem("@rn:user", JSON.stringify(response.user));
//       await AsyncStorage.setItem("@rn:token", response.token);
//       await AsyncStorage.setItem("@rn:auth", response.auth);
//       setLoading(false);

//       return response;
//     } catch (error) {
//       console.log(error);
//       if (error.auth) {
//         setLoading(false);
//         return null;
//       }
//       setLoading(false);
//       return error;
//     }
//   }

//   async function signOut() {
//     setLoading(true);
//     await auth.signOut();
//     await AsyncStorage.setItem("@rn:user", null);
//     await AsyncStorage.setItem("@rn:token", null);
//     await AsyncStorage.setItem("@rn:userConfig", null);
//     await AsyncStorage.setItem("@rn:dataVersion", null);
//     await AsyncStorage.setItem("@rn:notification", null);
//     setUser(null);
//     setUserConfig(null);
//     setDataVersion(null);
//     setNotification(null);
//     setLoading(false);
//   }

//   return (
//     <DataContext.Provider
//       value={{
//         user,
//         loading,
//         setData,
//         loadStoragedData,
//         signOut,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// }

// function useData() {
//   const context = useContext(DataContext);

//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider.");
//   }

//   return context;
// }

// export { DataProvider, useData };
