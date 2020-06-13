import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlaylistView = ( { playlist, setView, userId, token } ) => {
    console.log(playlist)
    
  const addToSpotify = () => {
    fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: { Authorization: `Bearer ${token}` },
                method: 'POST',
                body: JSON.stringify( { name: playlist[0].title })
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch(`­https://api.spotify.com/v1/playlists/${playlist[0].id}/tracks`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                        method: 'POST',
                        body: JSON.stringify({ uris: playlist[0].songs }) 
                    })
            })
            
    // save playlist, then open new spotify tab
  }
  
  return (
    <PlaylistViewContainer>
        <ButtonContainer>
            <HomeButton onClick={() => setView('home') }>Back to playlists</HomeButton>
            <AddToSpotify>Open in Sotify</AddToSpotify>
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
