import { Container, Section, Layout } from "./MyNetwork.styled";
import { ToastContainer } from "react-toastify";

const JobsMain = () => {
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
      <Layout></Layout>
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

export default JobsMain;
