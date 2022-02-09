import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { SignUpService, SignInService } from '../services/auth'
import api from '../services/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children, reload }) => {
  const [user, setUser] = useState(null)
  const [myToken, setMyToken] = useState(null)
  const [myTeamId, setMyTeamId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [firstAccess, setFirstAccess] = useState(true)
  const [editProfileFirst, setEditProfileFirst] = useState(false)
  const [isAuthored, setIsAuthored] = useState(false)

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user')

      const storageToken = await AsyncStorage.getItem('@RNAuth:token')
      const storageMyTeamId = await AsyncStorage.getItem('@RNAuth:myTeamId')
      const storageFirstAccess = await AsyncStorage.getItem(
        '@RNAuth:firstAccess',
      )
      const storageEditProfileFirst = await AsyncStorage.getItem(
        '@RNAuth:editProfileFirst',
      )
      const isAuthored = await AsyncStorage.getItem('@RNAuth:isAuthored')

      if (storageToken) {
        setMyToken(JSON.parse(storageToken))
      }

      if (storageEditProfileFirst) {
        setEditProfileFirst(JSON.parse(storageEditProfileFirst))
      }
      if (isAuthored) {
        setIsAuthored(JSON.parse(isAuthored))
      }
      if (storageUser) {
        setUser(JSON.parse(storageUser))
      }

      if (storageFirstAccess) {
        setFirstAccess(JSON.parse(storageFirstAccess))
      }

      if (storageMyTeamId) {
        setMyTeamId(JSON.parse(storageMyTeamId))
      }

      setLoading(false)
    }

    loadStorageData()
  }, [])

  async function signIn({ email, password }) {
    try {
      const response = await SignInService({ email, password })

      if (response?.status === 200) {
        await AsyncStorage.setItem(
          '@RNAuth:token',
          JSON.stringify(response?.data?.token),
        )
        setMyToken(response?.data?.token)

        setTimeout(async () => {


          const { data, status } = api.post(
            "/createauth",
            {},
            {
              headers: {
                Authorization: `Bearer ${myToken}`
              },
            }
          )

          if (status === 200) {
            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data))
            setUser(data)
          }
        }, 800)
      }
      return response
    } catch (err) {
      console.log('Erro ao Salvar dados do usuário: ', err)
    }
  }

  async function signUp(data) {
    try {
      return await SignUpService(data)
    } catch (err) {
      console.tron('[CONTEXT SignUpService]', err)
      return err
    }
  }

  function signOut() {
    AsyncStorage.removeItem('@RNAuth:user')
      .then(() => {
        setUser(null)
      })
      .catch((err) => console.tron('[CONTEXT]', err))

    AsyncStorage.removeItem('@RNAuth:myTeamId')
      .then(() => {
        setMyTeamId(null)
      })
      .catch((err) => console.tron('[CONTEXT]', err))
  }

  async function accessFirst() {
    setFirstAccess(false)

    await AsyncStorage.setItem('@RNAuth:firstAccess', JSON.stringify(false))
  }

  async function profileFirstEdit() {
    setEditProfileFirst(true)
    await AsyncStorage.setItem(
      '@RNAuth:storageEditProfileFirst',
      JSON.stringify(true),
    )
  }

  async function isAuthoredFinger(value = true) {
    setIsAuthored(value)
    await AsyncStorage.setItem('@RNAuth:isAuthored', JSON.stringify(value))
  }

  async function setTeamId(teamId) {
    await AsyncStorage.setItem(
      '@RNAuth:myTeamId',
      JSON.stringify({ team_id: teamId }),
    )

    setMyTeamId({ team_id: teamId })
  }

  async function reload() {
    const storageUser = await AsyncStorage.getItem('@RNAuth:user')

    if (storageUser) {
      setUser(JSON.parse(storageUser))
    }

    await loadStorageData()
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        showMyUser: user,
        showMyToken: myToken,
        showMyTeamId: myTeamId,
        signIn,
        signUp,
        signOut,
        loading,
        firstAccess,
        accessFirst,
        editProfileFirst,
        profileFirstEdit,
        isAuthoredFinger,
        isAuthored,
        setTeamId,
        reload,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
