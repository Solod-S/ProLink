import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 0;
`;

export const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  /* & > a{
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  } */
`;
export const Link = styled(NavLink)`
  width: 135px;
  height: 34px;
  width: 135px;
  height: 34px;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const Joint = styled(NavLink)`
  width: 135px;
  height: 34px;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  transition: background-color 167ms linear, color 167ms linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;
export const SignIn = styled(NavLink)`
  width: 135px;
  height: 34px;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 3px 5px;
  }
`;
export const Section = styled.section`
  display: flex;
  align-content: flex-start;
  min-height: 700px;
  padding-top: 40px;
  padding-bottom: 138px;
  padding: 60px 0;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

export const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
    img {
      /* z-index: -1; */
      width: 700px;
      height: 670px;
      position: absolute;
      bottom: -2px;
      right: -150px;
      @media (max-width: 768px) {
        top: 230px;
        width: initial;
        position: initial;
        height: initial;
      }
    }
  }
`;
export const Form = styled.div`
  margin-top: 100px;
  max-width: 400px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const SocialBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  border: 1px solid black;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: 0;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgb(0 0 0, 0.6);
  cursor: pointer;
  img {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(207, 207, 207, 0.25);
    color: rgb(0, 0, 0, 0.75);
  }
`;
