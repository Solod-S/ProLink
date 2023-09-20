import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createNewPassword } from "../../redux/auth/authOperation";

import { ToastContainer } from "react-toastify";

import {
  FormWrapper,
  PasswordIcon,
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
} from "./RestorePassForm.styled.js";

import { passwordRestoreSendSchema } from "../../schema";

const initialValues = {
  password: "",
};

function RestorePassForm({ resetToken }) {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const { password } = values;
    dispatch(createNewPassword({ password, resetToken }));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik validationSchema={passwordRestoreSendSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <FormWrapper>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <CloseBtn aria-label="close window">
            <CloseIcon size={19} color="black" />
          </CloseBtn>
          <Title>Restore your prolink account</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="password">Enter your new password</InputLabel>
                <Error name="password" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input type="password" name="password" id="password" placeholder=" " />
                <PasswordIcon size={19} aria-label="Password icon" />
              </Wrapper>
            </FormField>
            <RestoreField>
              <span>
                <RestoreNavigate>back</RestoreNavigate>
              </span>
            </RestoreField>
            <Button type="submit" disabled={isSubmitting}>
              Restore
            </Button>
          </ForM>
        </FormWrapper>
      )}
    </Formik>
  );
}

export default RestorePassForm;
