import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default UserPlaylists;

function UserPlaylists({
  userPlaylists,
  featuredPlaylists,
  selected,
  setSelected,
  setView
}) {
  const [playlistView, setPlaylistView] = useState('user');

  const addToSelectedPlaylists = id => {
    if (!selected.includes(id)) {
      setSelected(selected => [...selected, id]);
    } else {
      setSelected(selected.filter(el => el !== id));
    }
  };

  const isSelectedPlaylist = (id, img) => {
    if (selected.includes(id)) {
      return { border: '2px solid #2DD760', backgroundImage: `url(${img}` };
    } else {
      return { backgroundImage: `url(${img}` };
    }
  };

  const backToHome = () => {
    setView('home');
    setPlaylistView('user');
    setSelected([]);
  };

  return (
    <SelectPlaylistsContainer>
      <SelectPlaylists>Select Playlists</SelectPlaylists>
      <BackButton onClick={() => backToHome()}>Back</BackButton>
      <Button
        disabled={selected.length ? false : true}
        onClick={() => setView('playlistSettings')}
      >
        Next
      </Button>
      <PlaylistTabs>
        <UserTab
          style={
            playlistView === 'user'
              ? {
                  padding: '13px 23px',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(15, 22, 27, 0.5)'
                }
              : { padding: '10px 23px',
                  background: '#36444e', 
                  color: '#6c7a86',
              }
          }
          onClick={() => setPlaylistView('user')}
        >
          Your Playlists
        </UserTab>
        <FeaturedTab
          style={
            playlistView === 'spotify'
              ? {
                  padding: '13px 23px',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(15, 22, 27, 0.5)'
                }
              : { padding: '10px 23px',
                  background: '#36444e',
                  color: '#6c7a86' 
              }
          }
          onClick={() => setPlaylistView('spotify')}
        >
          Spotify Featured Playlists
        </FeaturedTab>
      </PlaylistTabs>
      <UsersPlaylists>
        {userPlaylists === 'fetching' ? (
          <Loader type="Bars" color="orange" height={80} width={250} />
        ) : playlistView === 'user' ? (
          userPlaylists.map((playlist, id) => {
            return (
              <PlaylistContainer
                key={'playlist-' + id}
                onClick={() => addToSelectedPlaylists(playlist.id)}
              >
                {playlist.images[0] ? (
                  <Playlist
                    style={isSelectedPlaylist(
                      playlist.id,
                      playlist.images[0].url
                    )}
                  ></Playlist>
                ) : (
                  <PlaylistPlaceholder />
                )}
                <PlaylistName>{playlist.name}</PlaylistName>
              </PlaylistContainer>
            );
          })
        ) : (
          featuredPlaylists.map((playlist, id) => {
            return (
              <PlaylistContainer key={'featuredplaylist-' + id}>
                <Playlist
                  key={'playlists-' + id}
                  onClick={() => addToSelectedPlaylists(playlist.id)}
                  style={isSelectedPlaylist(
                    playlist.id,
                    playlist.images[0].url
                  )}
                ></Playlist>
              </PlaylistContainer>
            );
          })
        )}
      </UsersPlaylists>
    </SelectPlaylistsContainer>
  );
}

const SelectPlaylistsContainer = styled.div`
  position: relative;
  margin: 30px;
`;

const SelectPlaylists = styled.h1`
  color: white;
  margin-top: 50px;
`;

const BackButton = styled.button`
  background-color: gray;
  border-radius: 3px;
  color: white;
  padding: 10px 15px;
  margin-right: 20px;
  font-weight: bold;
  border: none;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
  margin-bottom: 30px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  color: white;
  padding: 10px 15px;
  margin-bottom: 30px;
  font-weight: bold;
  border: 1px solid #0DF0FF;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
  cursor: pointer;
`;

const UsersPlaylists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    justify-content: center;
  }
`;

const PlaylistTabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  
  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

const UserTab = styled.span`
  font-size: 20px;
  color: white;
  cursor: pointer;
  width: 225px;
  text-align: center;
`;

const FeaturedTab = styled.span`
  font-size: 20px;
  color: white;
  cursor: pointer;
  width: 225px;
  text-align: center;
`;

const PlaylistContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 200px;
  margin: 20px 10px;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
  top: 0;
  transition: top ease 0.2s;

  &:hover {
    top: -5px;
  }
`;

const Playlist = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  font-weight: bold;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid transparent;
`;

const PlaylistPlaceholder = styled.div`
  height: 100%;
  width: 100%;
  background-color: grey;
  border-radius: 8px;
  border: 2px solid transparent;
`;

const PlaylistName = styled.span`
  color: white;
  font-weight: bold;
  padding: 12px;
  border: 1px solid white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
`;
