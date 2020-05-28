import React, { Fragment } from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../Shared/Styles/DarkTheme';
import Menu from './../Shared/UI/Menu';
import MyPlaylistsView from './MyPlaylistsView';
import CreatePlaylistView from './CreatePlaylistView';

const Dashboard = ({ userData }) => {
  return (
    <Fragment>
      <DashboardContainer>
        <DashboardHeader>
          <Brand>
            <Logo>LOGO</Logo>
            <AppName>BPM Workout</AppName>
          </Brand>
          {/* CurrentView will be set conditionally in the future */}
          {/* <CurrentView>My Playlists</CurrentView> */}
          <CurrentView>Create Playlist</CurrentView>
        </DashboardHeader>
        <Menu userData={userData} />
        <ViewsContainer>
          {/* <MyPlaylistsView /> */}
          <CreatePlaylistView />
        </ViewsContainer>
      </DashboardContainer>
    </Fragment>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 2rem;
  width: calc(100vw - 4rem);

  @media screen and (min-width: 990px) {
    width: calc(100vw - 20rem);
  }
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    display: block;
    text-align: left;
  }
`;

const Brand = styled.div`
  display: inline-flex;
  color: white;
`;

const Logo = styled.div`
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

const AppName = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ViewsContainer = styled.div`
  font-size: 1.1rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const CurrentView = styled.div`
  color: ${DarkTheme.agua};
  margin-right: 4rem;
`;
