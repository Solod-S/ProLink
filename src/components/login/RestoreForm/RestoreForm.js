import { Formik } from "formik";
import {
  MailIcon,
  CloseBtn,
  CloseIcon,
  Title,
  ForM,
  FormField,
  InputLabel,
  Wrapper,
  Input,
  Button,
  ErrorWrapper,
  Error,
  RestoreField,
  RestoreNavigate,
} from "./RestoreForm.styled.js";

import { loginSchema } from "../../../schema/index.js";

const initialValues = {
  mail: "",
  password: "",
};

function RestoreForm({ onClose }) {
  const handleSubmit = async (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
    actions.resetForm();
    onClose();
  };

  return (
    <Formik validationSchema={loginSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <>
          <CloseBtn aria-label="close window" onClick={onClose}>
            <CloseIcon size={19} color="black" />
          </CloseBtn>
          <Title>Restore your Pro Link your account</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="mail">Mail</InputLabel>
                <Error name="mail" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="email"
                  name="mail"
                  id="mail"
                  placeholder=" "
                />
                <MailIcon size={19} aria-label="Mail icon" />
              </Wrapper>
            </FormField>
            <RestoreField>
              <span>
                <RestoreNavigate>back</RestoreNavigate>
              </span>
            </RestoreField>
            <Button type="submit" disabled={isSubmitting}>
              Sign in
            </Button>
          </ForM>
        </>
      )}
    </Formik>
  );
}

export default RestoreForm;
