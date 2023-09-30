import styled from "styled-components";

import close from "../../../img/shared_layout/post_modal/close-icon.svg";
import userIcon from "../../../img/shared_layout/post_modal/user.svg";
import shareImages from "../../../img/shared_layout/post_modal/share-image.svg";
import shareVideo from "../../../img/shared_layout/post_modal/share-video.svg";
import shareComment from "../../../img/shared_layout/post_modal/share-comment.svg";

export { close, userIcon, shareImages, shareVideo, shareComment };

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;
export const Contant = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
export const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    min-width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0.15);
    svg,
    img {
      pointer-events: none;
    }
  }
`;

export const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background-color: transparent;
  padding: 8px 12px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

export const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

export const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`;

export const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

export const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  ${AssetButton} {
    svg {
      margin-right: 5px;
    }
  }
`;

export const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0, 0.2)" : "#0a66c2")};
  border: none;
  color: ${(props) => (props.disabled ? "rgba(0,0,0, 0.8)" : "white")};
  transition: background 167ms;
  &:hover {
    /* background: #004182; */
    background: ${(props) => (props.disabled ? "rgba(0,0,0, 0.2)" : "#004182")};
  }
`;

export const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const UploadImage = styled.div`
  padding: 10px;
  text-align: center;
  img {
    width: 100%;
  }
`;

export const UploadImageButton = styled.label`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: rgb(10, 102, 194);
  border: none;
  color: white;
`;
