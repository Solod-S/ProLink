import {
  logo,
  search,
  navHome,
  navNetwork,
  navJobs,
  navMessaging,
  navNotification,
  navWork,
  user,
  dpopDownMenu,
  Container,
  Content,
  Logo,
  Link,
  Search,
  SearchIcon,
  Nav,
  NavListWrap,
  NavListItem,
  User,
  Work,
  SignOut,
} from "./AppBar.styled";

const AppBar = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link path="/">
            <img style={{ width: "100%", height: "34px" }} src={logo} alt="logo" />
          </Link>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={search} alt="search icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavListItem className="active">
              <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                <img src={navHome} alt="navigation-home icon" />
                <span>Home</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                <img src={navNetwork} alt="navigation-network icon" />
                <span>My Network</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                <img src={navJobs} alt="navigation-jobs icon" />
                <span>Jobs</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                <img src={navMessaging} alt="navigation-messaging icon" />
                <span>Messaging</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                <img src={navNotification} alt="navigation-notification icon" />
                <span>Notification</span>
              </a>
            </NavListItem>
            <User>
              <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="user icon" />
                ) : (
                  <img src={user} alt="user icon" />
                )}
                <span>
                  Me
                  <img src={dpopDownMenu} alt="dpop-down menu icon" />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a href="/LinkedInClone">Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a href="/LinkedInClone/home" target="_blank" rel="noopener noreferrer">
                <img src={navWork} alt="navigation-work icon" />
                <span>
                  Work
                  <img src={dpopDownMenu} alt="dpop-down menu icon" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default AppBar;
