import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import { RegisterForm, AuthWindow, ModalWindow } from "../../index";
import {
  logo,
  hero,
  google,
  linkedIn,
  facebook,
  Container,
  Nav,
  Link,
  Joint,
  SignIn,
  SocialLogin,
  Section,
  Hero,
  Form,
  SocialBtn,
  github,
} from "./Login.styled";

const { REACT_APP_BAKEND_BASE_URL } = process.env;

const LoginComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(<div></div>);

  const handleForm = (form) => {
    setForm(form);
    setIsOpen(true);
  };

  useEffect(() => {
    isOpen !== false
      ? document.querySelector("body").classList.add("no-scroll")
      : document.querySelector("body").classList.remove("no-scroll");
  }, [isOpen]);
  // const openModal = () => {
  //   setIsOpen(true);
  // };
  const closeModal = () => {
    setIsOpen(false);
    setForm(<div></div>);
  };

  return (
    <Container data-testid="root" aria-label="login-page">
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
      <Nav>
        <Link path="/">
          <img src={logo} alt="logo" width="100" />
        </Link>
        <div>
          <Joint onClick={() => handleForm(<RegisterForm onClose={closeModal} />)}>Joint now</Joint>
          <SignIn onClick={() => handleForm(<AuthWindow onClose={closeModal} />)}>Sign in</SignIn>
          <SocialLogin href="#social_login">Social login</SocialLogin>
        </div>
      </Nav>
      <Section>
        <ModalWindow isOpen={isOpen} onClose={closeModal} component={form} />
        <Hero>
          <h1>Welcome to your professional network.</h1>
          <img src={hero} alt="hero" />
        </Hero>
      </Section>
      <Form id="social_login" data-testid="social_login">
        <SocialBtn href={`${REACT_APP_BAKEND_BASE_URL}/auth/google`}>
          <img src={google} alt="google" /> Sign in with Google
        </SocialBtn>
        <SocialBtn href={`${REACT_APP_BAKEND_BASE_URL}/auth/facebook`}>
          <img src={facebook} alt="facebook" /> Sign in with FaceBook
        </SocialBtn>
        <SocialBtn href={`${REACT_APP_BAKEND_BASE_URL}/auth/linkedin`}>
          <img src={linkedIn} alt="linkedIn" /> Sign in with LinkedIn
        </SocialBtn>
        <SocialBtn href={`${REACT_APP_BAKEND_BASE_URL}/auth/github`}>
          <img src={github} alt="linkedIn" /> Sign in with Github
        </SocialBtn>
      </Form>
    </Container>
  );
};

export default LoginComponent;
