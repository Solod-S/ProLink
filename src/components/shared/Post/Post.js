import ReactPlayer from "react-player";

import {
  ellipsis,
  like,
  claping,
  likeAction,
  commentAction,
  reportAction,
  sendAction,
  Article,
  SharedActor,
  Description,
  SharedImg,
  SocialCounts,
  SocialActions,
} from "../Post/Post.styled";

const Post = ({ name, avatar, email, date, description, image, video, comments }) => {
  return (
    <Article data-testid="post">
      <SharedActor>
        <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
          <img data-testid="avatar" src={avatar} alt="user icon" />
          <div>
            <span data-testid="name">{name}</span>
            <span data-testid="email">{email}</span>
            {/* <span>{article.actor.date.toDate().toLocaleDateString()}</span> */}
            <span data-testid="date">{date}</span>
          </div>
        </a>
        <button>
          <img data-testid="post-options" src={ellipsis} alt="ellipsis icon" />
        </button>
      </SharedActor>
      <Description
        dangerouslySetInnerHTML={{
          __html: description,
        }}
        data-testid="description"
      />
      <SharedImg>
        <div data-testid="media">
          {!image && video ? (
            <ReactPlayer width={"100%"} url={video} controls={true} data-testid="video" />
          ) : (
            image && <img src={image} alt="shared" />
          )}
        </div>
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
            {comments}
          </a>
        </li>
      </SocialCounts>
      <SocialActions>
        <button data-testid="like-btn">
          <img src={likeAction} alt="likeAction icon" />
          <span>Like</span>
        </button>
        <button data-testid="comment-btn">
          <img src={commentAction} alt="commentAction icon" />
          <span>Comments</span>
        </button>
        <button data-testid="report-btn">
          <img src={reportAction} alt="reportAction icon" />
          <span>Report</span>
        </button>
        <button data-testid="send-btn">
          <img src={sendAction} alt="sendAction icon" />
          <span>Send</span>
        </button>
      </SocialActions>
    </Article>
  );
};

export default Post;
