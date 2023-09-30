import styled from "styled-components";

import userIcon from "../../../img/home/main_side/user.svg";
import photo from "../../../img/home/main_side/photo-icon.svg";
import event from "../../../img/home/main_side/event.svg";
import video from "../../../img/home/main_side/video.svg";
import article from "../../../img/home/main_side/article.svg";
import ellipsis from "../../../img/home/main_side/ellipsis.svg";
import like from "../../../img/home/main_side/like.svg";
import claping from "../../../img/home/main_side/claping.svg";
import likeAction from "../../../img/home/main_side/like2.svg";
import commentAction from "../../../img/home/main_side/commentAction.svg";
import reportAction from "../../../img/home/main_side/reportAction.svg";
import sendAction from "../../../img/home/main_side/sendAction.svg";
import loadinSpiner from "../../../img/home/main_side/spin-loader.gif";

export {
  userIcon,
  photo,
  event,
  video,
  article,
  ellipsis,
  like,
  claping,
  likeAction,
  commentAction,
  reportAction,
  sendAction,
  loadinSpiner,
};

export const Container = styled.div`
  grid-area: mainside;
`;

export const CommondCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: ${(p) => p.theme.colors.thirdBgColor};
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 rgba(0 0 0 /20%);
`;
export const ShareBox = styled(CommondCard)`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.placeHolderColor};
  background: ${(p) => p.theme.colors.thirdBgColor};
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-size: 60;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: ${(p) => p.theme.colors.thirdBgColor};
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      img {
        margin: 0 4px 0 -2px;
      }
      span {
        color: #5e5e5e;
      }
    }
  }
`;

export const Article = styled(CommondCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

export const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 16px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      border-radius: 50%;
      width: 48px;
      height: 48px;
    }
    & div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: ${(p) => p.theme.fontWeight.bolt};
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

export const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: ${(p) => p.theme.colors.bordeFontrColor};
  font-size: 14px;
  text-align: left;
`;

export const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: ${(p) => p.theme.colors.fourthBgColor};
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  /* align-items: flex-start; */
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;

  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      border: none;
      background: ${(p) => p.theme.colors.thirdBgColor};
    }
  }
`;

export const SocialActions = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 0;
  padding: 4p 8px;
  button {
    display: inline-flex;
    align-items: center;
    border: none;
    background-color: ${(p) => p.theme.colors.thirdBgColor};
    padding: 8px;
    color: ${(p) => p.theme.colors.secondTextColor};
    @media (min-width: ${(p) => p.theme.breakpoints.tablets}) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  & > img {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    z-index: 99;
    max-width: 400px;
  }
`;
