import {
  Container,
  Nav,
  Link,
  Joint,
  SignIn,
  Section,
  Hero,
  Form,
  SocialBtn,
} from "./LoginComponent.styled";

import logo from "../../../src/img/login-logo.png";
import hero from "../../../src/img/login-hero.svg";
import google from "../../../src/img/google.svg";
import linkedIn from "../../../src/img/linkedIn.svg";
import facebook from "../../../src/img/facebook.svg";

const LoginComponent = () => {
  return (
    <Container>
      <Nav>
        <Link path="/">
          <img src={logo} alt="logo" width="100" />
        </Link>
        <div>
          <Joint>Joint now</Joint>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional network.</h1>
          <img src={hero} alt="hero" />
        </Hero>
      </Section>
      <Form>
        <SocialBtn>
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
