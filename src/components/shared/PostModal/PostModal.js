import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { createMyPost } from "../../../redux/myPosts/myPostsOperation";
import { useState } from "react";

import {
  Container,
  Contant,
  Header,
  SharedContent,
  UserInfo,
  ShareCreation,
  AttachAssets,
  AssetButton,
  ShareComment,
  PostButton,
  Editor,
  UploadImage,
  close,
  userIcon,
  shareImages,
  shareVideo,
  shareComment,
  UploadImageButton,
} from "./PostModal.styled.Post";

const PostModal = ({ user, showModal, handleClick }) => {
  const dispatch = useDispatch();
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image} `);
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const createArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      // image: shareImage,
      // video: videoLink,
      description: editorText,
    };
    dispatch(createMyPost(payload));
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    handleClick(e);
  };

  return (
    <>
      {showModal === "open" && (
        <Container>
          <Contant>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(e) => reset(e)}>
                <img src={close} alt="close icon" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {user?.avatarURL?.url ? (
                  <img src={user?.avatarURL?.url} alt="user icon" />
                ) : (
                  <img src={userIcon} alt="user icon" />
                )}
                <span>{user?.name}</span>
              </UserInfo>
              <Editor>
                <textarea
                  placeholder="What do you want to talk about&"
                  autoFocus={true}
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      name="image"
                      id="file"
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p style={{ marginBottom: "21px", cursor: "pointer" }}>
                      <UploadImageButton htmlFor="file">Select an image to share</UploadImageButton>
                    </p>
                    {shareImage && <img src={URL.createObjectURL(shareImage)} alt="post" />}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        name="text"
                        id="text"
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && <ReactPlayer width={"101%"} controls={true} url={videoLink} />}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src={shareImages} alt="share icon" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img src={shareVideo} alt="share video icon" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src={shareComment} alt="share comment icon" />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton disabled={!editorText ? true : false} onClick={(e) => createArticle(e)}>
                Post
              </PostButton>
            </ShareCreation>
          </Contant>
        </Container>
      )}
    </>
  );
};

export default PostModal;
