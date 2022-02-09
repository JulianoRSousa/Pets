import api from "./api";

export async function SignInService({ email, password }) {
  try {
    const response = await api({
      method:'POST',
      headers: {
        email,
        password,
      },
    })

    return response
  } catch (err) {
    console.log('error SignInService: ',err)
    return err
  }
}

export async function SignUpService({ name, email, phone, password, invite }) {
  try {
    console.tron(name, email, phone, password, invite, 'data')

    const response = await callApi({
      method: 'POST',
      url: '/user',
      apiData: {
        name,
        email,
        phone,
        password,
        code: {
          invite: invite || undefined,
        },
      },
    })

    return response
  } catch (err) {
    console.tron('[Integration Error]', err)

    return err
  }
}
