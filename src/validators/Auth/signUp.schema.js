import * as yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

module.exports = yup.object().shape({
  repeatPassword: yup.string().label('Repetir senha').min(6).required(),
  password: yup.string().label('Senha').min(6).required(),
  email: yup.string().label('Email').email().required(),
  birthdate: yup.string().label('Data de nascimento').min(8).required(),
  name: yup.string().label('Nome completo').required(),
})
