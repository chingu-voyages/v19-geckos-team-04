import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlaylistView = ( { playlist, setView } ) => {
    console.log(playlist)
  return (
    <PlaylistViewContainer>
        <HomeButton onClick={() => setView('home') }>Back to playlists</HomeButton>
        {/*<span>Add to Spotify</span>*/}
        <PlaylistTitle className="playlist-title">{ playlist[0].title }</PlaylistTitle>
        { playlist[0].songs.map( song => (
            <Song className="song">{song}</Song>
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

const HomeButton = styled.button`
    background: #2DD760;
    color: black;
    padding: 10px 13px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    margin-bottom: 30px;
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
