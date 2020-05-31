import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PlaylistSettings = ( { setView, selected, token } ) => {
    
    const [ songs, setSongs ] = useState( [] );
    
    useEffect( () => {
        
        selected.forEach( id => {
            fetch(`https://api.spotify.com/v1/playlists/${ id }/tracks`, {
              headers: { Authorization: 'Bearer ' + token }
            })
              .then(res => res.json())
              .then(data => {
                  data.items.forEach( song => {
                      setSongs( songs => [ ...songs, song ] );
                  })  
              } );
        } )
         
    }, [] )
    
    
  return (
      <PlaylistSettingsContainer>
          {console.log( songs )}
          <SettingsHeader>Playlist Settings</SettingsHeader>
          <BackButton onClick={ () => setView( 'selectPlaylists' ) }>Back</BackButton>
          <Button onClick={ () => setView( 'playlistSettings' ) }>Next</Button>
          <PlaylistSongs>
              { !songs.length ? 
                  <span>Loading...</span>
                  :
                  ( songs.map( ( song, id ) => {
                      return <Song key={ 'song-' + id }>{ song.track.name }</Song>
                  } ) )
              }
          </PlaylistSongs>
      </PlaylistSettingsContainer>

        
  );
};

export default PlaylistSettings;

const PlaylistSettingsContainer = styled.div`
  position: relative;
  margin: 30px;
`;

const SettingsHeader = styled.h1`
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
`;

const Button = styled.button`
  background-color: #2DD760;
  border-radius: 3px;
  color: black;
  padding: 10px 15px;
  margin-bottom: 30px;
  font-weight: bold;
  border: none;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
`;

const PlaylistSongs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Song = styled.div`
  color: white;
  margin: 10px 0;
  width: fit-content;
`;