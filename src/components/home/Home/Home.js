import { Container, Section, Layout } from "./Home.styled";

import LeftSide from "../LeftSide/LeftSide";
import MainSide from "../MainSide/MainSide";
import RigthSide from "../RightSide/RightSide";

const Home = () => {
  return (
    <Container aria-label="home-page">
      <Section>
        <h5>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Need to hire quickly?
          </a>
        </h5>
        <p> Discover skilled professionals rapidly to ensure your business keeps moving forward.</p>
      </Section>
      <Layout>
        <LeftSide />
        <MainSide />
        <RigthSide />
      </Layout>
    </Container>
  );
};

export default Home;
