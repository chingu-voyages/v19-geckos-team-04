import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import ListIcon from '../../../images/list-icon.png';
import ListIconLightMode from '../../../images/list-icon-light-mode.png';
import MenuPlusIcon from '../../../images/menu-plus-icon.png';
import MenuPlusIconLightMode from '../../../images/menu-plus-icon-light-mode.png';
import Burger from '../UI/Burger';

const Menu = props => {
  const [open, setOpen] = useState(false);

  let profilePic = '';
  let greeting = '';

  if (props.userData) {
    if (props.userData.images && props.userData.images.length) {
      profilePic = props.userData.images[0].url;
    }
    if (props.userData.display_name) {
      greeting = props.userData.display_name;
    }
  }

  return (
    <Fragment>
      <Burger open={open} setOpen={setOpen} />
      <MenuContainer open={open} className="menu-bg">
        <UserProfile>
          <ProfilePic src={profilePic} />
          <div>
            <Greeting onClick={ () => window.location = props.userData.external_urls.spotify } className="menu-greeting">{greeting}</Greeting>
            <Followers>{ props.userData.followers.total } Followers</Followers>
            {/*<Logout className="menu-logout-text">Logout</Logout>*/}
          </div>
        </UserProfile>
        <MenuItems>
          <Item onClick={props.goHome} className="menu-my-playlists">
            <Icon src={props.isDark ? ListIcon : ListIconLightMode} /> My Playlists
          </Item>
          <Item onClick={props.setPlaylists} className="menu-create">
            <Icon src={props.isDark ? MenuPlusIcon : MenuPlusIconLightMode} /> Create
          </Item>
        </MenuItems>
      </MenuContainer>
    </Fragment>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 20rem;
  ${'' /* background-color: ${DarkTheme.charcoal}; */}
  font-size: 1rem;
  z-index: 1;
  -webkit-box-shadow: -10px 0px 35px -18px rgba(0,0,0,1);
  -moz-box-shadow: -10px 0px 35px -18px rgba(0,0,0,1);
  box-shadow: -10px 0px 35px -18px rgba(0,0,0,1);

  @media screen and (min-width: 990px) {
    display: block;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;

  div {
    flex-direction: column;
  }
`;

const ProfilePic = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  margin-bottom: 1rem;
  -webkit-box-shadow: 0px 0px 33px -11px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 33px -11px rgba(0,0,0,1);
  box-shadow: 0px 0px 33px -11px rgba(0,0,0,1);

  @media screen and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const Greeting = styled.div`
  ${'' /* color: ${DarkTheme.green}; */}
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

const Followers = styled.div`
  font-size: 14px;
  color: grey;
  text-align: center;
  margin-top: 5px;
`;

const Logout = styled.div`
  cursor: pointer;
  ${'' /* color: #999; */}
  text-align: right;
`;

const MenuItems = styled.div`
  display: block;
  flex-wrap: nowrap;
  color: white;
  padding-top: 5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 25px 0;
  cursor: pointer;
  font-size: 1.2rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
  
  &:hover {
      background-color: #212E3A;
  }
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  padding-right: 1rem;

  @media screen and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    padding-right: 0.5rem;
  }
`;
