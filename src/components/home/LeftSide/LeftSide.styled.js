import styled from "styled-components";

import bg from "../../../img/home/left_side/card-bg.svg";
import photo from "../../../img/home/left_side/photo.svg";

import widget from "../../../img/home/left_side/widget-icon.svg";
import item from "../../../img/home/left_side/item-icon.svg";
import plus from "../../../img/home/left_side/plus-icon.svg";

export { widget, item, plus };

export const Container = styled.div`
  grid-area: leftside;
`;
export const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: ${(p) => p.theme.colors.thirdBgColor};
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
`;

export const CardBackGround = styled.div`
  background-image: url(${bg});
  content: "";
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

export const Photo = styled.div`
  box-shadow: none;
  background-image: url(${photo});
  /* content: ""; */
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

export const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.bordeFontrColor};
  font-weight: ${(p) => p.theme.fontWeight.regular};
`;

export const AddPhotoText = styled.div`
  color: ${(p) => p.theme.colors.secondTextColor};
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: ${(p) => p.theme.fontWeight.сommon};
`;

export const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    transition: background-color 167ms;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgb(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0 1);
  }
`;

export const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  transition: background-color 167ms;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    transition: color 167ms;
    &:hover {
      color: ${(p) => p.theme.colors.secondTextColor};
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      transition: background-color 167ms;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;
