import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../../../src/img/login/login/login-logo.png";
import hero from "../../../../src/img/login/login/login-hero.svg";
import google from "../../../../src/img/login/login/google.svg";
import linkedIn from "../../../../src/img/login/login/linkedIn.svg";
import facebook from "../../../../src/img/login/login/facebook.svg";
import github from "../../../../src/img/login/login/github.svg";
export { logo, hero, google, linkedIn, facebook, github };

export const Container = styled.div`
  padding: 0;
`;

export const Nav = styled.nav`
  max-width: ${(p) => p.theme.breakpoints.desktop};
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
    @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
      padding: 0 5px;
    }
  } */
`;
export const Link = styled(NavLink)`
  height: 34px;
  /* width: 135px; */
  height: 34px;

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
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
    color: ${(p) => p.theme.colors.bordeFontrColor};
    text-decoration: none;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 0 5px;
  }
`;
export const SignIn = styled(NavLink)`
  width: 135px;
  height: 34px;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px ${(p) => p.theme.colors.secondTextColor};
  color: ${(p) => p.theme.colors.secondTextColor};
  border-radius: ${(p) => p.theme.radii.quarter};
  transition-duration: 167ms;
  font-size: 16px;
  ${(p) => p.theme.fontWeight.regular};
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: ${(p) => p.theme.colors.secondTextColor};
    text-decoration: none;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 3px 5px;
  }
`;

export const SocialLogin = styled.a`
  width: 135px;
  height: 34px;
  margin-left: 5px;
  text-decoration: none;
  box-shadow: inset 0 0 0 1px ${(p) => p.theme.colors.secondTextColor};
  color: ${(p) => p.theme.colors.fourthTextColor};
  border-radius: ${(p) => p.theme.radii.quarter};
  transition-duration: 167ms;
  font-size: 16px;
  ${(p) => p.theme.fontWeight.regular};
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.secondTextColor};
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: ${(p) => p.theme.colors.secondTextColor};
    text-decoration: none;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
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
  max-width: ${(p) => p.theme.breakpoints.desktop};
  align-items: center;
  margin: auto;

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
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
    color: ${(p) => p.theme.colors.thirdTextColor};
    ${(p) => p.theme.fontWeight.thin};
    line-height: 70px;
    @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
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
      @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
        top: 230px;
        width: initial;
        position: initial;
        height: initial;
      }
    }
  }
`;
export const Form = styled.div`
  /* margin-top: 100px; */
  padding-left: 10px;
  max-width: 400px;
  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-left: 0;
    margin-top: 20px;
  }
`;
export const SocialBtn = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  background-color: ${(p) => p.theme.colors.thirdBgColor};
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: ${(p) => p.theme.radii.quarter};
  border: 1px solid black;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
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
