import * as yup from "yup";

let passwordRestoreSendSchema = yup.object().shape({
  password: yup.string().min(6, "That doesnt looks like email").typeError().required("This is required string"),
});

export default passwordRestoreSendSchema;
