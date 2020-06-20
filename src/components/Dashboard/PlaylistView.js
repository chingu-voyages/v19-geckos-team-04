import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SongsList from './SongsList';
import Loader from 'react-loader-spinner';

const PlaylistView = ( { playlist, setView, userId, token } ) => {
    
  // const addToSpotify = () => {
  // 
  //     const headers = { Authorization: `Bearer ${token}` };
  //     const name = 'testapp';
  // 
  //     return fetch("https://api.spotify.com/v1/me", { headers: headers })
  //       .then(response => response.json())
  //       .then(jsonResponse => {
  //         userId = jsonResponse.id;
  //         console.log(jsonResponse)
  //         return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
  //           headers: headers,
  //           method: "POST",
  //           body: JSON.stringify({ name: name })
  //         })
  //           .then(response => response.json())
  //           .then(jsonResponse => {
  //             const playlistId = jsonResponse.id;
  //             return fetch(
  //               `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
  //               {
  //                 headers: headers,
  //                 method: "POST",
  //                 body: JSON.stringify({ uris: songs })
  //               }
  //             );
  //           });
  //       });
  //   }
  
  
  const playlistDuration = () => {
      let ms = 0;
      playlist[0].songs.forEach( song => {
          return ms += song.track.duration_ms;
      })
      let minutes = Math.round(ms/60000)
      return( minutes + ' min' );
  }
  
  return (
    <PlaylistViewContainer>
        <ButtonContainer>
            <HomeButton onClick={() => setView('home') }>Back to playlists</HomeButton>
            {/*<AddToSpotify onClick={ () => addToSpotify() }>Open in Spotify</AddToSpotify>*/}
        </ButtonContainer>
        <PlaylistTitle className="playlist-title">{ playlist[0].title }</PlaylistTitle>
        <PlaylistInfo>
            <PlaylistNumOfSongs>{ playlist[0].songs.length } songs,</PlaylistNumOfSongs>
            <PlaylistDuration>{ playlistDuration() }</PlaylistDuration>
        </PlaylistInfo>
        { !playlist[0].songs.length ?
            <LoaderContainer>
              <Loader type="Bars" color="orange" height={80} width={250} />
            </LoaderContainer>
            : 
            <SongsList songs={ playlist[0].songs } view='playlistView' token={token} />
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

const PlaylistTitle = styled.span`
    font-size: 28px;
    font-weight: bold;
    padding: 10px 0 5px 0;
`;

const PlaylistInfo = styled.div`
    display: flex;
    padding-bottom: 16px;
`;

const PlaylistNumOfSongs = styled.span`
    font-size: 14px;
    color: rgba(225, 225, 225, 0.6);
    padding-right: 5px;
`;

const PlaylistDuration = styled.span`
    font-size: 14px;
    color: rgba(225, 225, 225, 0.6);
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
