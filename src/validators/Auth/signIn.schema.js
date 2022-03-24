import * as yup from "yup";

module.exports = yup.object().shape({
  valueEmail: yup.string().label('Senha').min(6).required(),
  valuePass: yup.string().label('Email').email().required(),
})
