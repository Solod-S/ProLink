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
  return (
    <Container>
      <Nav>
        <Link path="/">
          <img src={logo} alt="logo" width="100" />
        </Link>
        <div>
          <Joint>Joint now</Joint>
          <SignIn>Sign in</SignIn>
          <SocialLogin href="#social_login">Social login</SocialLogin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional network.</h1>
          <img src={hero} alt="hero" />
        </Hero>
      </Section>
      <Form id="social_login">
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
