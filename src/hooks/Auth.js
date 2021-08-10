import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext();


  function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);


  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = storagedToken;
        setToken(storagedToken)
      }
      setLoading(false);
    }

    console.log('user: ',user)
    loadStorageData();
  }, []);

  async function signIn(email, pass) {
    setLoading(true)
    try {
      var start = new Date().getTime();
      const response = await auth.signIn(email, pass);
      setToken(response.token);
      setUser(response.user);
      setSigned(response.auth);
      api.defaults.headers.Authorization = `Baerer ${response.token}`;

      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@RNAuth:token', response.token);
      setLoading(false)
      var end = new Date().getTime();
      const time = end - start;
      console.log("time: ", time)

      return response;
    } catch (error) {
      console.log(error)
      if (error.auth) {
        setLoading(false)
        return null
      }
      setLoading(false)
      return error
    }
  }

  async function signOut() {
    await auth.signOut();
    await AsyncStorage.clear();
    setUser(null);
  }


  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };