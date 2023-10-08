import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../../../redux/auth/authSelectors";

import {
  widget,
  item,
  plus,
  Container,
  ArtCard,
  UserInfo,
  CardBackGround,
  PhotoWrapper,
  Photo,
  Link,
  AddPhotoText,
  Widget,
  Item,
  CommunityCard,
} from "./LeftSide.styled";

const LeftSide = () => {
  const userData = useSelector(getUserData);
  const [user, setuser] = useState();

  useEffect(() => {
    setuser(userData);
  }, [user, userData]);
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackGround />
          <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
            <PhotoWrapper>
              <Photo userPhoto={user?.avatarURL?.url} />
            </PhotoWrapper>
            <Link>Welcome, {user?.name}</Link>
          </a>
          <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src={widget} alt="widget icon" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src={item} alt="item icon" />
            My items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
          <span>Groups</span>
        </a>
        <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
          <span>
            Events
            <img src={plus} alt="plus icon" />
          </span>
        </a>
        <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
          <span>Follow Hashtags</span>
        </a>
        <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

export default LeftSide;
