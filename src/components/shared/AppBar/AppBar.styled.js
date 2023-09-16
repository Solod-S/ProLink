import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../../img/shared_layout/app_bar/home-logo.svg";
import search from "../../../img/shared_layout/app_bar/search-icon.svg";
import navHome from "../../../img/shared_layout/app_bar/nav-home.svg";
import navNetwork from "../../../img/shared_layout/app_bar/nav-network.svg";
import navJobs from "../../../img/shared_layout/app_bar/nav-jobs.svg";
import navMessaging from "../../../img/shared_layout/app_bar/nav-messaging.svg";
import navNotification from "../../../img/shared_layout/app_bar/nav-notifications.svg";
import navWork from "../../../img/shared_layout/app_bar/nav-work.svg";
import user from "../../../img/shared_layout/app_bar/user.svg";
import dpopDownMenu from "../../../img/shared_layout/app_bar/down-icon.svg";

export { logo, search, navHome, navNetwork, navJobs, navMessaging, navNotification, navWork, user, dpopDownMenu };

export const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: ${(p) => p.theme.breakpoints.desktop};

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export const Logo = styled.span`
  margin-right: 5px;
  font-size: 0;
`;

export const Link = styled(NavLink)``;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 200px;
    input {
      border: none;
      box-shadow: none;
      background-color: ${(p) => p.theme.colors.secondBgColor};
      border-radius: ${(p) => p.theme.radii.small};
      color: ${(p) => p.theme.colors.bordeFontrColor};
      width: 218px;
      padding: 0 8px 0 40px;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

export const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 9px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: ${(p) => p.theme.colors.thirdBgColor};
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 1px solid var(--white, #fff);
      left: 0;
      bottom: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: ${(p) => p.theme.colors.bordeFontrColor};
    }
  }
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      transition: color 167ms;
    }

    @media (min-width: ${(p) => p.theme.breakpoints.mobile}) and (max-width: ${(p) => p.theme.breakpoints.tablet}) {
      min-width: 70px;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
      min-width: 48px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: ${(p) => p.theme.colors.bordeFontrColor};
      }
    }
  }
`;

export const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background-color: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  button {
    font-size: ${(p) => p.theme.fontSizes.xxs};
  }
`;

export const User = styled(NavListItem)`
  cursor: pointer;
  div > svg {
    width: 24px;
    border-radius: ${(p) => p.theme.radii.round};
  }
  div > img {
    width: 24px;
    height: 24px;
    border-radius: ${(p) => p.theme.radii.round};
  }
  span {
    display: flex;
    align-items: center;
  }
  ${(p) =>
    p.profileDropDownMenu &&
    `
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    `}
`;
export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
