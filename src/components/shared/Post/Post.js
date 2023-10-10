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
          <img src={avatar} alt="user icon" />
          <div>
            <span>{name}</span>
            <span>{email}</span>
            {/* <span>{article.actor.date.toDate().toLocaleDateString()}</span> */}
            <span>{date}</span>
          </div>
        </a>
        <button>
          <img src={ellipsis} alt="ellipsis icon" />
        </button>
      </SharedActor>
      <Description
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <SharedImg>
        <div>
          {!image && video ? (
            <ReactPlayer width={"100%"} url={video} controls={true} />
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
  );
};

export default Post;
