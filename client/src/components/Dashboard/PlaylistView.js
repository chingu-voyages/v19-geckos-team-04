import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SongsList from './SongsList';
import Loader from 'react-loader-spinner';

const PlaylistView = ( { playlist, setView, userId, token } ) => {
    
    const [songs, setSongs] = useState( 'fetching' )
    
    //placeholder song data
    useEffect(() => {
      fetch(`https://api.spotify.com/v1/playlists/2ZDyNE2eF9Ohaj1h1rDI5H/tracks`, {
        headers: { Authorization: 'Bearer ' + token }
      })
        .catch(error => {
          console.log(error);
        })
        .then(res => res.json())
        .then(data => {
          setSongs(data.items);
        });
    }, []);
    
  const addToSpotify = () => {
  
      const headers = { Authorization: `Bearer ${token}` };
      const name = 'testapp';
  
      return fetch("https://api.spotify.com/v1/me", { headers: headers })
        .then(response => response.json())
        .then(jsonResponse => {
          userId = jsonResponse.id;
          console.log(jsonResponse)
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: "POST",
            body: JSON.stringify({ name: name })
          })
            .then(response => response.json())
            .then(jsonResponse => {
              const playlistId = jsonResponse.id;
              return fetch(
                `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
                {
                  headers: headers,
                  method: "POST",
                  body: JSON.stringify({ uris: songs })
                }
              );
            });
        });
    }
  
  return (
    <PlaylistViewContainer>
        <ButtonContainer>
            <HomeButton onClick={() => setView('home') }>Back to playlists</HomeButton>
            {/*<AddToSpotify onClick={ () => addToSpotify() }>Open in Spotify</AddToSpotify>*/}
        </ButtonContainer>
        <PlaylistTitle className="playlist-title">{ playlist[0].title }</PlaylistTitle>
        { songs === 'fetching' ?
            <LoaderContainer>
              <Loader type="Bars" color="orange" height={80} width={250} />
            </LoaderContainer>
            : 
            <SongsList songs={ songs } view='playlistView' token={token} />
        }
    </PlaylistViewContainer>
  );
};

export default PlaylistView;

const PlaylistViewContainer = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const HomeButton = styled.button`
    background: grey;
    color: black;
    padding: 10px 13px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    width: 150px;
    cursor: pointer;
    margin-right: 30px;
`;

const AddToSpotify = styled.button`
    background: #2DD760;
    color: black;
    padding: 10px 13px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    width: 150px;
    cursor: pointer;
`;

const PlaylistTitle = styled.h2`
    ${'' /* color: white; */}
    font-weight: bold;
`;

const Song = styled.div`
    ${'' /* color: white; */}
`;

const LoaderContainer = styled.div`
  width: 100vw - 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
