import React, { Fragment } from 'react';
import styled from 'styled-components';
import ListIcon from '../../../images/list-icon.png';
import MenuPlusIcon from '../../../images/menu-plus-icon.png';
import { DarkTheme } from '../Styles/DarkTheme';

const Menu = () => {
  return (
    <Fragment>
      <Toggler />
      <MenuContainer>
        <UserProfile>
          <ProfilePic />
          <Greeting>Hello, Jalisa</Greeting>
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

const Toggler = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  border: none;
  background-color: black;
  color: white;
  padding: 0.75rem;
  margin-top: 1rem;
  margin-right: 1rem;
  transition: opacity 1s ease-in;
  z-index: 2;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  opacity: 0;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 20rem;
  background-color: ${DarkTheme.charcoal};
  font-size: 1rem;
  z-index: 1;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

const ProfilePic = styled.div`
  background-color: ${DarkTheme.mediumGray};
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
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  padding-right: 1rem;
`;
