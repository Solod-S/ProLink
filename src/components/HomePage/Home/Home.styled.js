import styled from "styled-components";

export const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  @media (max-width: ${(p) => p.theme.breakpoints.desktop}) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const Content = styled.div`
  max-width: ${(p) => p.theme.breakpoints.desktop};
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: ${(p) => p.theme.colors.secondTextColor};
    font-size: 15px;
    a {
      font-weight: ${(p) => p.theme.fontWeight.bolt};
    }
  }
  p {
    font-size: 15px;
    color: ${(p) => p.theme.colors.boldTextColor};
    ${(p) => p.theme.fontWeight.regular};
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside mainside rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-rows: auto; */
  margin: 25px 0;
  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
