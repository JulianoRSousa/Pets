import api from "./api";
import { store } from "../redux/Store";

export async function CreatePost(petId, file, status, description, token) {
  store.dispatch({ type: 'SET_LOADING', payload: { loading: true } })
  const data = new FormData();

  data.append("picture", file);
  data.append("status", status);
  data.append("description", description);

  const postCreated = await api
    .post("/createpost", data, {
      headers: {
        pet_id: petId,
        token: token,
      },
    })
    .then(async (Res) => {
      store.dispatch({ type: 'SET_LOADING', payload: { loading: false } })
      return Res;
    });
  store.dispatch({ type: 'SET_LOADING', payload: { loading: false } })
  return postCreated
}

export async function SignInService(email, password) {
  store.dispatch({ type: 'SET_LOADING', payload: { loading: true } })
  const response = await api({
    method: 'POST', url: '/createauth', apiData: {}, headers: {
      email,
      password,
    }
  })
  console.log('response.data => ', response.data)
  if (response.status == 201) {
    store.dispatch({ type: 'SET_SIGNIN_INFO', payload: { response } })
  }
  store.dispatch({ type: 'SET_LOADING', payload: { loading: false } })
  return response
}

export async function SignUpService(email, password, fullname, birthdate) {
  store.dispatch({ type: 'SET_LOADING', payload: { loading: true } })
  try {
    const response = await api({
      method: 'POST', url: '/createuser', apiData: {}, headers: {
        email,
        password,
        fullname,
        birthdate
      }
    })
    store.dispatch({ type: 'SET_SIGNIN_INFO', payload: { response } })
    return response
  } catch (err) {
    console.log('[Integration Error]', err)
    return err
  }
}

export async function SignOutService(token) {
  store.dispatch({ type: 'SET_LOADING', payload: { loading: true } })
  const response = await api({
    method: 'DELETE', url: '/deleteauth', apiData: {}, headers: {
      token
    }
  })
  store.dispatch({ type: 'SET_SIGNOUT_INFO', payload: {} })
  return response
}
