import * as yup from "yup";

let loginSchema = yup.object().shape({
  mail: yup.string().min(3, "That doesnt looks like email").typeError().required(),
  password: yup.string().min(6, "That doesnt looks good password").typeError().required(),
});

export default loginSchema;
