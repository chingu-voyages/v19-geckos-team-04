import React, { Fragment, useState, useEffect, useContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { DarkTheme } from '../Shared/Styles/DarkTheme';
import { LightTheme } from '../Shared/Styles/LightTheme';
// import SunMoonIcon from '../LoggedOut/SunMoonIcon';
import Logo from '../LoggedOut/Logo';
import { UserContext } from '../../context/UserContext';
import queryString from 'query-string';


import Menu from './../Shared/UI/Menu';
import MyPlaylistsView from './MyPlaylistsView';
import CreatePlaylistView from './CreatePlaylistView';
import UserPlaylists from './UserPlaylists';
import PlaylistSettings from './PlaylistSettings';
import PlaylistView from './PlaylistView';

const Dashboard = ({ userData, accessToken, username }) => {
  const [view, setView] = useState('home');
  const [userPlaylists, setUserPlaylists] = useState('fetching');
  const [featuredPlaylists, setFeaturedPlaylists] = useState('fetching');
  const [selected, setSelected] = useState([]);
  const [playlistId, setPlaylistId] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [themeType, setThemeType] = useState('dark');
  const [songs, setSongs] = useState([]);
  const [savedUserPlaylists, setSavedUserPlaylists] = useState( 'fetching' );
  const { updateUserContext } = useContext(UserContext);
  
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/users/${userData.id}/playlists?limit=50`, {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
      .catch(error => {
        console.log(error);
      })
      .then(res => res.json())
      .then(data => {
        setUserPlaylists(data.items);
        updateUserContext(username);
      });

    fetch(`https://api.spotify.com/v1/browse/categories/workout/playlists?limit=50`, {
      headers: { Authorization: 'Bearer ' + accessToken }
    })
      .then(res => res.json())
      .then(data => {
        setFeaturedPlaylists(data.playlists);
      });
    
    const interval = setInterval( () => {
        fetch(`${process.env.REACT_APP_BACKEND_URI}/api/playlist/${username}`)
          .then(res => res.json())
          .then(data => setSavedUserPlaylists(data))
    }, 1000 );
    return () => clearInterval(interval);
    
  }, []);
  
  return (
    <ThemeProvider theme={{ mode: themeType }}>
      <GlobalStyleDashboard />
      <Fragment>
        <DashboardContainer>
          <DashboardHeader>
            <Brand>
              <Logo setView={setView} />
            </Brand>
            {/* CurrentView will be set conditionally in the future */}
            {/* <SunMoonIcon
              isDark={themeType}
              changeTheme={() => setThemeType(!themeType)}
            /> */}
        {/*<CurrentView className="my-playlist-text">My Playlists</CurrentView>*/}
          </DashboardHeader>
          <Menu
            userData={userData}
            setPlaylists={() => setView('selectPlaylists')}
            goHome={() => setView('home')}
            isDark={themeType}
          />
          {view === 'home' && (
            <ViewsContainer>
              <MyPlaylistsView
                setPlaylists={() => setView('selectPlaylists')}
                setViewPlaylist={() => setView('playlist')}
                setPlaylistId={setPlaylistId}
                setPlaylist={setPlaylist}
                username={username}
                savedUserPlaylists={savedUserPlaylists}
              />
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
              setSongs={setSongs}
              view={view}
            />
          )}
          {view === 'playlist' && playlistId !== '' ? (
            <PlaylistView
              setView={setView}
              token={accessToken}
              playlist={playlist}
              userId={userData.id}
            />
          ) : (
            ''
          )}
        </DashboardContainer>
      </Fragment>
    </ThemeProvider>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  padding: 2rem;
  width: calc(100vw - 5rem);

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const AppName = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  margin-top: 5px;
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
    background-color: ${props =>
      props.theme.mode ? DarkTheme.gunmetal : LightTheme.lightcream};
  }
  .logo-text-TEMPORARY {
    color: ${props =>
      props.theme.mode ? DarkTheme.lightgray : LightTheme.black};
  }
  
  ${'' /* Dashboard viewing area. */}
  .large-text {
    color: ${props => (props.theme.mode ? DarkTheme.white : LightTheme.black)}
  }
  .my-playlist-text {
    color: ${props => (props.theme.mode ? DarkTheme.agua : LightTheme.agua)}
  }
  .my-playlist-view-text {
    color: ${props =>
      props.theme.mode ? DarkTheme.white : LightTheme.darkgray}
  }
  .user-playlist-container {
    border-color: ${props =>
      props.theme.mode ? DarkTheme.white : LightTheme.darkgray}
  }
  .playlist-title {
    color: ${props => (props.theme.mode ? DarkTheme.white : LightTheme.black)}
  }
  .song {
    color: ${props =>
      props.theme.mode ? DarkTheme.white : LightTheme.darkgray}
  }

  ${'' /* MENU ITEMS */}
  .burger-lines {
    background: ${props =>
      props.theme.mode ? DarkTheme.white : LightTheme.black}
  }
  .menu-bg {
    background-color: ${props =>
      props.theme.mode ? DarkTheme.charcoal : LightTheme.lightblue}
  }
  .menu-greeting {
    color: ${props =>
      props.theme.mode ? DarkTheme.agua : LightTheme.darkgreen}
  }
  .menu-logout-text {
    color: ${props =>
      props.theme.mode ? DarkTheme.mediumgray : LightTheme.darkgray}
  }
  .menu-my-playlists {
    color: ${props => (props.theme.mode ? DarkTheme.white : LightTheme.black)}
  }
  .menu-create {
    color: ${props => (props.theme.mode ? DarkTheme.white : LightTheme.black)}
  }
`;
