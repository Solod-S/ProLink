import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PostModal, Post } from "../../index";

import { getUserData } from "../../../redux/auth/authSelectors";
import { getMyPostsRefreshStatus, getMyPosts } from "../../../redux/myPosts/myPostsSelectors";
import { fetchMyPosts } from "../../../redux/myPosts/myPostsOperation";

import {
  userIcon,
  photo,
  article,
  event,
  video,
  loadinSpiner,
  Container,
  ShareBox,
  Content,
} from "../MainSide/MainSide.styled";

const MainSide = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const postsData = useSelector(getMyPosts);
  const isRefreshing = useSelector(getMyPostsRefreshStatus);

  const [user, setuser] = useState({});
  const [posts, setposts] = useState([]);
  const [isLoading, setisisLoading] = useState(false);
  const [showModal, setshowModal] = useState("close");

  useEffect(() => {
    dispatch(fetchMyPosts());
    setposts(postsData);
    console.log(postsData, "postsData");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setisisLoading(isRefreshing);
  }, [isRefreshing]);

  useEffect(() => {
    setuser(userData);
    console.log(postsData);
    setposts(postsData);
  }, [dispatch, postsData, userData]);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setshowModal("close");
        break;

      case "close":
        setshowModal("open");
        break;

      default:
        setshowModal("close");
        break;
    }
  };
  return (
    <>
      {posts && posts.length <= 0 ? (
        <Container>
          <p>There are no posts</p>
          <ShareBox>
            <div>
              {user?.avatarURL?.url ? (
                <img src={user?.avatarURL?.url} alt="user icon" />
              ) : (
                <img src={userIcon} alt="user icon" />
              )}
              <button onClick={handleClick} disabled={isLoading ? true : false}>
                Start a post
              </button>
            </div>
            <div>
              <button onClick={() => setshowModal("open")} disabled={isLoading ? true : false}>
                <img src={photo} alt="photocard icon" />
                <span>Photo</span>
              </button>
              <button onClick={() => setshowModal("open")} disabled={isLoading ? true : false}>
                <img src={video} alt="video icon" />
                <span>Video</span>
              </button>
              <button onClick={() => setshowModal("open")} disabled={isLoading ? true : false}>
                <img src={event} alt="event icon" />
                <span>Event</span>
              </button>
              <button onClick={() => setshowModal("open")} disabled={isLoading ? true : false}>
                <img src={article} alt="article icon" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <PostModal user={user} showModal={showModal} handleClick={handleClick} location="posts" />
        </Container>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {user?.avatarURL?.url ? (
                <img src={user?.avatarURL?.url} alt="user icon" />
              ) : (
                <img src={userIcon} alt="user icon" />
              )}

              <button onClick={handleClick} disabled={isLoading ? true : false}>
                Start a post
              </button>
            </div>
            <div>
              <button onClick={() => setshowModal("open")} disabled={isLoading ? true : false}>
                <img src={photo} alt="photocard icon" />
                <span>Photo</span>
              </button>
              <button onClick={() => setshowModal("open")} disabled={isLoading ? true : false}>
                <img src={video} alt="video icon" />
                <span>Video</span>
              </button>
              <button onClick={() => setshowModal("open")} disabled={isLoading ? true : false}>
                <img src={event} alt="event icon" />
                <span>Event</span>
              </button>
              <button onClick={() => setshowModal("open")} disabled={isLoading ? true : false}>
                <img src={article} alt="article icon" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {isLoading && <img src={loadinSpiner} alt="loding spiner" />}
            {posts &&
              posts.map((post) => (
                <Post
                  key={post?._id}
                  name={user?.name + " " + user?.surname}
                  avatar={user?.avatarURL?.url ? user?.avatarURL.url : userIcon}
                  email={user?.email}
                  date={post?.postedAtHuman}
                  description={post?.description}
                  image={post?.mediaFiles[0]?.type === "img" && post?.mediaFiles[0]?.url}
                  video={post?.mediaFiles[0]?.type === "video" && post?.mediaFiles[0]?.url}
                  comments={post?.comments}
                />
              ))}
          </Content>
          <PostModal user={user} showModal={showModal} handleClick={handleClick} location="posts" />
        </Container>
      )}
    </>
  );
};

export default MainSide;
