import React, { createContext, useState, useContext } from "react";

const LoadContext = createContext();

function LoadProvider({ children }, props) {
  const [contextRouteLoading, setContextRouteLoading] = useState(false);


  // useEffect(() => {
  //   async function loadStorageData() {
  //     const storagedToken = await AsyncStorage.getItem("@rn:token");
  //     if (storagedToken) {
  //       const contextUser = await auth.loadUser(storagedToken);
  //       setUser(contextUser);
  //       api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
  //       setContextToken(storagedToken);
  //       setContextSigned(true);
  //     }
  //     setLoading(false);
  //     setContextSigned(false);
  //   }
  //   loadStorageData();
  // }, []);

  // async function signIn(email, pass) {
  //   setLoading(true);
  //   try {
  //     const signinResponse = await auth.signIn(email, pass);
  //     setContextUser(signinResponse.user);
  //     setContextToken(signinResponse.token);
  //     setContextSigned(signinResponse.auth);
  //     api.defaults.headers.Authorization = `Baerer ${signinResponse.token}`;
  //     await AsyncStorage.setItem("@rn:auth", JSON.stringify(signinResponse.auth));
  //     await AsyncStorage.setItem("@rn:user", JSON.stringify(signinResponse.user));
  //     await AsyncStorage.setItem("@rn:token", signinResponse.token);
  //     setLoading(false);
  //     return signinResponse;
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

  return (
    <LoadContext.Provider value={{ contextRouteLoading, setContextRouteLoading }}>
      {children}
    </LoadContext.Provider>
  );
}

function useLoad() {
  const context = useContext(LoadContext);

  if (!context) {
    throw new Error("useLoad must be used within an LoadProvider.");
  }

  return context;
}

export { LoadProvider, useLoad };
