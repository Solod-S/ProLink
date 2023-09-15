import * as yup from "yup";

let registerSchema = yup.object().shape({
  name: yup.string().min(3, "That doesnt looks like name").typeError().required(),
  surname: yup.string().min(3, "That doesnt looks like name").typeError().required(),
  mail: yup.string().min(3, "That doesnt looks like email").typeError().required(),
  password: yup.string().min(6, "That doesnt looks good password").typeError().required(),
  policy: yup.boolean().oneOf([true], "You need to agree with terms of use").required(),
});

export default registerSchema;
