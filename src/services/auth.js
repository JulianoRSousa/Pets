import api from "./api";
import { store } from "../redux/Store";

export async function SignInService(email, pass) {
  const response = await api({
    method: 'POST', url: '/createauth', apiData: {}, headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      email,
      pass,
    }
  })
  if (response.status == 201) {
    store.dispatch({ type: 'SET_SIGNIN_INFO', payload: { response } })
  } else {
    console.log('Error on auth, line 16')
  }
  return response
}

export async function SignUpService(name, email, phone, pass, invite) {
  try {
    const response = await api({
      method: 'POST', url: '/createaccount', apiData: {}, headers: {
        name,
        email,
        pass: password,
        phone,
        pass,
      }
    })
    return response
  } catch (err) {
    console.log('[Integration Error]', err)

    return err
  }
}

export async function SignOutService(token) {
  console.log('token::: ', token)
  const response = await api({
    method: 'DELETE', url: '/deleteauth', apiData: {}, headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token
    }
  })
  store.dispatch({ type: 'SET_SIGNOUT_INFO', payload: {} })
  return response
}
