import {
  user,
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
  Container,
  ShareBox,
  Article,
  SharedActor,
  Description,
  SharedImg,
  SocialCounts,
  SocialActions,
  Content,
} from "../MainSide/MainSide.styled";
import { useState } from "react";
import ReactPlayer from "react-player";

// import PostModal from "../../shared/Post/PostModal";

// temporary

const articles = [
  {
    actor: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkxkw4_Jroi5sHXGeyoLXKvEQdHcwNd6kuIGA-fkwbdUfh76NOlI9V_9Bi5Y0RrnMkQ&usqp=CAU",
      title: "Name",
      description: "email",
      date: "22.06.23",
    },
    description: "This's my post",
    video: "https://www.youtube.com/watch?v=iW1TUmpCe9g",
    comments: 1,
  },
];
const userData = { photoURL: "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" };
let loading = false;

// temporary

const MainSide = () => {
  const [showModal, setshowModal] = useState("close");

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
      {articles.length === 0 ? (
        <Container>
          <p>There are no articles</p>
          <ShareBox>
            <div>
              {userData && userData.photoURL ? (
                <img src={userData.photoURL} alt="user icon" />
              ) : (
                <img src={user} alt="user icon" />
              )}

              <button onClick={handleClick} disabled={loading ? true : false}>
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src={photo} alt="photocard icon" />
                <span>Photo</span>
              </button>
              <button>
                <img src={video} alt="video icon" />
                <span>Video</span>
              </button>
              <button>
                <img src={event} alt="event icon" />
                <span>Event</span>
              </button>
              <button>
                <img src={article} alt="article icon" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          {/* <PostModal showModal={showModal} handleClick={handleClick} /> */}
        </Container>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {userData && userData.photoURL ? (
                <img src={userData.photoURL} alt="user icon" />
              ) : (
                <img src={user} alt="user icon" />
              )}

              <button onClick={handleClick} disabled={loading ? true : false}>
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src={photo} alt="photocard icon" />
                <span>Photo</span>
              </button>
              <button>
                <img src={video} alt="video icon" />
                <span>Video</span>
              </button>
              <button>
                <img src={event} alt="event icon" />
                <span>Event</span>
              </button>
              <button>
                <img src={article} alt="article icon" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {loading && <img src={loadinSpiner} alt="loding spiner" />}
            {articles.length > 0 &&
              articles.map((article, index) => (
                <Article key={index}>
                  <SharedActor>
                    <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                      <img src={article.actor.image} alt="user icon" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        {/* <span>{article.actor.date.toDate().toLocaleDateString()}</span> */}
                        <span>{article.actor.date}</span>
                      </div>
                    </a>
                    <button>
                      <img src={ellipsis} alt="ellipsis icon" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                      {!article.image && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} controls={true} />
                      ) : (
                        article.image && <img src={article.image} alt="shared" />
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img src={like} alt="like icon" />
                        <img src={claping} alt="claping icon" />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                        {article.comments}
                      </a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button>
                      <img src={likeAction} alt="likeAction icon" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src={commentAction} alt="commentAction icon" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src={reportAction} alt="reportAction icon" />
                      <span>Report</span>
                    </button>
                    <button>
                      <img src={sendAction} alt="reportAction icon" />
                      <span>Send</span>
                    </button>
                  </SocialActions>
                </Article>
              ))}
          </Content>
          {/* <PostModal showModal={showModal} handleClick={handleClick} /> */}
        </Container>
      )}
    </>
  );
};

export default MainSide;
