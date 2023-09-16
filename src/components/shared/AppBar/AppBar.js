import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authOperation";

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
  const dispatch = useDispatch();
  const [profileDropDownMenu, setProfiledropDownMenu] = useState(false);
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
              <NavLink to="/home">
                <img src={navHome} alt="navigation-home icon" />
                <span>Home</span>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/my-network">
                <img src={navNetwork} alt="navigation-network icon" />
                <span>My Network</span>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/jobs">
                <img src={navJobs} alt="navigation-jobs icon" />
                <span>Jobs</span>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/messaging">
                <img src={navMessaging} alt="navigation-messaging icon" />
                <span>Messaging</span>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/notification">
                <img src={navNotification} alt="navigation-notification icon" />
                <span>Notification</span>
              </NavLink>
            </NavListItem>
            <User
              profileDropDownMenu={profileDropDownMenu}
              onClick={() => setProfiledropDownMenu(!profileDropDownMenu)}
            >
              <div>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="user icon" />
                ) : (
                  <img src={user} alt="user icon" />
                )}
                <span>
                  Me
                  <img src={dpopDownMenu} alt="dpop-down menu icon" />
                </span>
              </div>
              <SignOut onClick={() => dispatch(logOut())}>
                <button>Sign Out</button>
              </SignOut>
            </User>
            <Work>
              <a href="/LinkedInClone/home">
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
