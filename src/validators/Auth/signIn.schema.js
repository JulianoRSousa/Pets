import * as yup from "yup";

module.exports = yup.object().shape({
  password: yup.string().label('Senha').min(6).required(),
  email: yup.string().label('Email').email().required(),
})
