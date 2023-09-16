import * as yup from "yup";

let passwordRestoreSchema = yup.object().shape({
  mail: yup.string().min(3, "That doesnt looks like email").typeError().required(),
});

export default passwordRestoreSchema;
