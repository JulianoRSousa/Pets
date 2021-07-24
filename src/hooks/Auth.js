import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

// interface User {
//   id?: string | undefined;
//   email?: string;
//   username?: string;
//   firstname?: string;
//   lastname?: string;
//   birthdate?: string;
//   profilePictureUrl?: string;
//   followersCount?: number;
//   postsCount?: number;
//   petsCount?: number;
// };

// interface AuthContextData {
//   signed: boolean;
//   user: User | null | undefined;
//   loading: boolean;
//   signIn(email: string, pass: string): Promise<any>;
//   signOut(): void;
// }

const AuthContext = createContext();


  function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);


  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email, pass) {
    setLoading(true)
    try {
      const response = await auth.signIn(email, pass);
      setUser(response.user);
      setSigned(response.auth);
      api.defaults.headers.Authorization = `Baerer ${response.token}`;

      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@RNAuth:token', response.token);
      setLoading(false)

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
      value={{ signed: !!user, user, loading, signIn, signOut }}>
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