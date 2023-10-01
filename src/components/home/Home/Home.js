import { Container, Section, Layout } from "./Home.styled";
import { ToastContainer } from "react-toastify";

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
    </Container>
  );
};

export default Home;
