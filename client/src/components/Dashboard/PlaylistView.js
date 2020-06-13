import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlaylistView = ( { playlist, setView, userId, token, songs } ) => {
    
  // const addToSpotify = () => {
  // //   fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
  // //               headers: { 
  // //                   'Content-Type': 'application/json', 
  // //                   Authorization: `Bearer ${token}` 
  // //               },
  // //               method: 'POST',
  // //               body: JSON.stringify( { name: playlist[0].title } )
  // //           }).then(response => {
  // //               console.log('response', response
  // //               response.json()
  // //           })
  // //           // .then(jsonResponse => {
  // //           //     console.log('jsonresponse', jsonResponse )
  // //           //     const playlistId = jsonResponse.id;
  // //           //     return fetch(`­https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
  // //           //     {
  // //           //         headers: { Authorization: `Bearer ${token}` },
  // //           //         method: 'POST',
  // //           //         body: JSON.stringify({ uris: songs }) 
  // //           //     }).then( window.open("https://open.spotify.com/playlist/" + playlistId, "_blank") )
  // //           // })    
  // // }
  // 
  // const headers = { Authorization: `Bearer ${token}` };
  // const name = 'testapp';
  // 
  // return fetch("https://api.spotify.com/v1/me", { headers: headers })
  //   .then(response => response.json())
  //   .then(jsonResponse => {
  //     userId = jsonResponse.id;
  //     console.log(jsonResponse)
  //     return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
  //       headers: headers,
  //       method: "POST",
  //       body: JSON.stringify({ name: name })
  //     })
  //       .then(response => response.json())
  //       .then(jsonResponse => {
  //         const playlistId = jsonResponse.id;
  //         return fetch(
  //           `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
  //           {
  //             headers: headers,
  //             method: "POST",
  //             body: JSON.stringify({ uris: songs })
  //           }
  //         );
  //       });
  //   });
  //   }
  
  return (
    <PlaylistViewContainer>
        <ButtonContainer>
            <HomeButton onClick={() => setView('home') }>Back to playlists</HomeButton>
            {/*<AddToSpotify onClick={ () => addToSpotify() }>Open in Spotify</AddToSpotify>*/}
        </ButtonContainer>
        <PlaylistTitle className="playlist-title">{ playlist[0].title }</PlaylistTitle>
        { playlist[0].songs.map( ( song, i ) => (
            <Song key={ 'song-' + i } className="song">{song}</Song>
        ) ) }
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
