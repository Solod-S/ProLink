import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { passwordRestore } from "../../../redux/auth/authOperation";

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

import { passwordRestoreSchema } from "../../../schema/index.js";

const initialValues = {
  mail: "",
};

function RestoreForm({ onClose, setOption }) {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const { mail } = values;
    dispatch(passwordRestore(mail));
    actions.setSubmitting(false);
    actions.resetForm();
    onClose();
  };

  return (
    <Formik validationSchema={passwordRestoreSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <>
          <CloseBtn aria-label="close window" onClick={onClose}>
            <CloseIcon size={19} color="black" />
          </CloseBtn>
          <Title>Restore your Prolink account</Title>
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
                  data-testid="mail"
                  placeholder=" "
                />
                <MailIcon size={19} aria-label="Mail icon" />
              </Wrapper>
            </FormField>
            <RestoreField>
              <span>
                <RestoreNavigate onClick={() => setOption("login")}>back</RestoreNavigate>
              </span>
            </RestoreField>
            <Button type="submit" aria-label="submit button" disabled={isSubmitting}>
              Restore
            </Button>
          </ForM>
        </>
      )}
    </Formik>
  );
}

export default RestoreForm;
