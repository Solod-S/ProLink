import { Formik } from "formik";

import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/authOperation";

import {
  NameIcon,
  SurnameIcon,
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
  CheckboxField,
  CheckboxLabel,
  ChekboxInput,
  ChekboxSquare,
  ChekboxLink,
  Button,
  ErrorWrapper,
  Error,
} from "./RegisterForm.styled";

import registerSchema from "../../../schema/registerSchema";

const initialValues = {
  name: "",
  surname: "",
  password: "",
  mail: "",
  policy: false,
};

function RegisterForm({ onClose }) {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const { name, surname, password, mail } = values;
    dispatch(register({ name, surname, email: mail, password }));
    actions.setSubmitting(false);
    actions.resetForm();
    onClose();
  };

  return (
    <Formik validationSchema={registerSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <>
          <CloseBtn aria-label="close window" onClick={onClose}>
            <CloseIcon size={19} color="black" />
          </CloseBtn>
          <Title>Make the most of your professional life</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Error name="name" data-testid="name-error" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="text"
                  name="name"
                  data-testid="name"
                  id="name"
                  placeholder=" "
                />
                <NameIcon size={19} aria-label="Name Icon" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="surname">Surname</InputLabel>
                <Error name="surname" data-testid="surname-error" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="text"
                  name="surname"
                  data-testid="surname"
                  id="surname"
                  placeholder=" "
                />
                <SurnameIcon size={19} aria-label="Name Icon" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="mail">Mail</InputLabel>
                <Error name="mail" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="email"
                  name="mail"
                  data-testid="mail"
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
                <Input type="password" name="password" id="password" data-testid="password" placeholder=" " />
                <PasswordIcon size={19} aria-label="Password icon" />
              </Wrapper>
            </FormField>
            <CheckboxField>
              <CheckboxLabel htmlFor="policy">
                <ChekboxInput type="checkbox" name="policy" id="policy" data-testid="policy" />
                <ChekboxSquare />
                <span>
                  I accept
                  <ChekboxLink
                    href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {" "}
                    Agreement conditions
                  </ChekboxLink>
                </span>
              </CheckboxLabel>
              <Error name="policy" component="div" style={{ textAlign: "end" }} />
            </CheckboxField>
            <Button type="submit" aria-label="submit button" disabled={isSubmitting}>
              Send
            </Button>
          </ForM>
        </>
      )}
    </Formik>
  );
}

export default RegisterForm;
