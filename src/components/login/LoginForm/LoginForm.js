import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/authOperation";

import {
  PasswordIcon,
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
} from "./LoginForm.styled.js";

import { loginSchema } from "../../../schema";

const initialValues = {
  mail: "",
  password: "",
};

function LoginForm({ onClose, setOption }) {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    dispatch(logIn(values));
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
          <Title>Sign in to Pro Link your account</Title>
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
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Error name="password" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input type="password" name="password" id="password" placeholder=" " />
                <PasswordIcon size={19} aria-label="Password icon" />
              </Wrapper>
            </FormField>
            <RestoreField>
              <span>
                <RestoreNavigate onClick={() => setOption("restore")}>Forgot password?</RestoreNavigate>
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

export default LoginForm;
