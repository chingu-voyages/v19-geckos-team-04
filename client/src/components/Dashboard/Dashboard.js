import React, { Fragment, useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { DarkTheme } from '../Shared/Styles/DarkTheme';
import { LightTheme } from '../Shared/Styles/LightTheme';
import SunMoonIcon from '../LoggedOut/SunMoonIcon';

import Menu from './../Shared/UI/Menu';
import MyPlaylistsView from './MyPlaylistsView';
import CreatePlaylistView from './CreatePlaylistView';
import UserPlaylists from './UserPlaylists';
import PlaylistSettings from './PlaylistSettings';
import PlaylistView from './PlaylistView';

const Dashboard = ({ userData, accessToken }) => {
  const [view, setView] = useState('home');
  const [userPlaylists, setUserPlaylists] = useState('fetching');
  const [featuredPlaylists, setFeaturedPlaylists] = useState('fetching');
  const [selected, setSelected] = useState([]);
  const [playlistId, setPlaylistId] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [themeType, setThemeType] = useState('dark');


  useEffect(() => {
    fetch(`https://api.spotify.com/v1/users/${userData.id}/playlists`, {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
      .then(res => res.json())
      .then(data => {
        setUserPlaylists(data.items);
      });

    fetch(`https://api.spotify.com/v1/browse/categories/workout/playlists`, {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
      .then(res => res.json())
      .then(data => {
        setFeaturedPlaylists(data.playlists);
      });
  }, []);

  return (
    <ThemeProvider theme={{ mode: themeType }}>
      <GlobalStyleDashboard />
    <Fragment>
      <DashboardContainer>
        <DashboardHeader>
          <Brand>
            <Logo className="logo-text-TEMPORARY">LOGO</Logo>
            <AppName className="logo-text-TEMPORARY">BPM Workout</AppName>
            <SunMoonIcon
              isDark={themeType}
              changeTheme={() => setThemeType(!themeType)}
            />
          </Brand>
          {/* CurrentView will be set conditionally in the future */}
          <CurrentView className="my-playlist-text">My Playlists</CurrentView>
          {/* <CurrentView>Create Playlist</CurrentView> */}
        </DashboardHeader>
        <Menu userData={userData}
              setPlaylists={ () => setView( 'selectPlaylists' ) }
              goHome={ () => setView( 'home' ) }
              isDark={themeType} />
        {view === 'home' && (
          <ViewsContainer>
            <MyPlaylistsView setPlaylists={() => setView('selectPlaylists')}
                             setViewPlaylist={() => setView('playlist')}
                             setPlaylistId={(id) => setPlaylistId(id)} 
                             setPlaylist={setPlaylist} />
            {/* <CreatePlaylistView /> */}
          </ViewsContainer>
        )}
        {view === 'selectPlaylists' && (
          <UserPlaylists
            userPlaylists={userPlaylists}
            featuredPlaylists={featuredPlaylists.items}
            selected={selected}
            setSelected={setSelected}
            setView={setView}
          />
        )}
        {view === 'playlistSettings' && (
          <PlaylistSettings
            setView={setView}
            selected={selected}
            token={accessToken}
          />
        )}
        {view === 'playlist' && playlistId !== '' ? (
          <PlaylistView
              setView={setView}
              token={accessToken}
              playlist={playlist}
          />
        ) : ''}
      </DashboardContainer>
    </Fragment>
    </ThemeProvider>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 2rem;
  width: calc(100vw - 4rem);

  @media screen and (min-width: 990px) {
    width: calc(100vw - 25rem);
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
  margin-right: 4rem;
`;


const GlobalStyleDashboard = createGlobalStyle`
  body, html {
    background-color: ${props => (props.theme.mode ? DarkTheme.gunmetal : LightTheme.lightcream )};
  }
  .logo-text-TEMPORARY {
    color: ${props => (props.theme.mode ? DarkTheme.lightgray : LightTheme.black )};
  }
  .large-text {
    color: ${props => (props.theme.mode ? DarkTheme.white : LightTheme.black )}
  }
  .my-playlist-text {
    color: ${props => (props.theme.mode ? DarkTheme.agua : LightTheme.agua )}
  }
  .burger-lines {
    background: ${props => (props.theme.mode ? DarkTheme.white : LightTheme.black )}
  }
  .menu-bg {
    background-color: ${props => (props.theme.mode ? DarkTheme.charcoal : LightTheme.lightblue )}
  }
  .menu-greeting {
    color: ${props => (props.theme.mode ? DarkTheme.green : LightTheme.darkgreen )}
  }
  .menu-logout-text {
    color: ${props => (props.theme.mode ? DarkTheme.mediumgray : LightTheme.darkgray )}
  }
  .menu-my-playlists {
    color: ${props => (props.theme.mode ? DarkTheme.white : LightTheme.black )}
  }
  .menu-create {
    color: ${props => (props.theme.mode ? DarkTheme.white : LightTheme.black )}
  }
`;