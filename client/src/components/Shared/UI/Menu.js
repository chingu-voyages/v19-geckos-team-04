import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import ListIcon from '../../../images/list-icon.svg';
import MenuPlusIcon from '../../../images/menu-plus-icon.svg';
import { DarkTheme } from '../Styles/DarkTheme';
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

  const onMyPlaylistsClickedHandler = () => {
    alert('This will need to route to MyPlaylistsView');
  };

  const onCreateClickedHandler = () => {
    alert('This will need to route to CreatePlaylistsView');
  };

  return (
    <Fragment>
      <Burger open={open} setOpen={setOpen} />
      <MenuContainer open={open}>
        <UserProfile>
          <ProfilePic src={profilePic} />
          <div>
            <Greeting>{greeting}</Greeting>
            <Logout>Logout</Logout>
          </div>
        </UserProfile>
        <MenuItems>
          <Item onClick={onMyPlaylistsClickedHandler}>
            <Icon src={ListIcon} /> My Playlists
          </Item>
          <Item onClick={onCreateClickedHandler}>
            <Icon src={MenuPlusIcon} /> Create
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
  background-color: ${DarkTheme.charcoal};
  font-size: 1rem;
  z-index: 1;

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
  justify-content: center;
  align-items: center;
  padding-top: 4rem;

  div {
    flex-direction: column;
  }
`;

const ProfilePic = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  margin-right: 1rem;

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
  color: ${DarkTheme.green};
  font-weight: 700;
`;

const Logout = styled.div`
  cursor: pointer;
  color: #999;
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
  padding-bottom: 2rem;
  cursor: pointer;
  font-size: 1.2rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Icon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  padding-right: 1rem;

  @media screen and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    padding-right: 0.5rem;
  }
`;
