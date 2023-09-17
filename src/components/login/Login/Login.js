import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import ModalWindow from "../../shared/ModalWindow/ModalWindow";
import { RegisterForm, AuthWindow } from "../../index";
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
} from "./Login.styled";

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
    <Container>
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
      <Form id="social_login">
        <SocialBtn href="https://localhost:3000/auth/google">
          <img src={google} alt="google" /> Sign in with Google
        </SocialBtn>
        <SocialBtn>
          <img src={facebook} alt="google" /> Sign in with FaceBook
        </SocialBtn>
        <SocialBtn>
          <img src={linkedIn} alt="linkedIn" /> Sign in with LinkedIn
        </SocialBtn>
      </Form>
    </Container>
  );
};

export default LoginComponent;
