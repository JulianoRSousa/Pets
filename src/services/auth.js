import api from "./api";

export async function SignInService(email, pass) {
  const response = await api({
    method: 'POST', url: '/createauth', apiData: {}, headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      email,
      pass,
    }
  })
  const agora = new Date()
  console.log('Date here: ', agora+'')
  console.log('response here: ', response)
  return response
  try {
    const response = await api({
      method: 'POST', url: '/createauth', apiData: {}, headers: {
        email,
        pass,
      }
    })
    return response
  } catch (err) {
    console.log('error SignInService: ', err)
    return err
  }
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
        invite
      }
    })
    return response
  } catch (err) {
    console.log('[Integration Error]', err)

    return err
  }
}
