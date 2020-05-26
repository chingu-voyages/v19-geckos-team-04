import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import ListIcon from '../../../images/list-icon.png';
import MenuPlusIcon from '../../../images/menu-plus-icon.png';
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

  return (
    <Fragment>
      <Burger open={open} setOpen={setOpen} />
      <MenuContainer open={open}>
        <UserProfile>
          <ProfilePic src={profilePic} />
          <Greeting>{greeting}</Greeting>
        </UserProfile>
        <Logout>Logout</Logout>
        <MenuItems>
          <Item>
            <Icon src={ListIcon} /> My Playlists
          </Item>
          <Item>
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
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

const ProfilePic = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  margin-right: 1rem;
`;

const Greeting = styled.div`
  color: ${DarkTheme.green};
  font-weight: 700;
`;

const Logout = styled.div`
  cursor: pointer;
  color: #999;
  text-align: right;
  padding-right: 4.6rem;
  margin-top: -1rem;
`;

const MenuItems = styled.div`
  display: block;
  color: white;
  padding-top: 5rem;
  padding-left: 5rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding-bottom: 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    color: ${DarkTheme.orange};
  }
`;

const Icon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  padding-right: 1rem;
`;
