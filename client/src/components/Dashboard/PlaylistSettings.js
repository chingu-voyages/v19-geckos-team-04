import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

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
    
    const msToMinAndSec = ms => {
      var minutes = Math.floor(ms / 60000);
      var seconds = ((ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    
  return (
      <PlaylistSettingsContainer>
          <SettingsHeader>Playlist Settings</SettingsHeader>
          <BackButton onClick={ () => setView( 'selectPlaylists' ) }>Back</BackButton>
          <Button onClick={ () => setView( 'playlistSettings' ) }>Next</Button>
          <RangeContainer>
              <RangeHeader>BPM</RangeHeader>
              <Range min={ 30 } max={ 130 } step={ 5 } defaultValue={ [ 65, 105 ] } minimumTrackStyle={ { marginTop: '10px' } } />
          </RangeContainer>
          <PlaylistSongs>
              { !songs.length ? 
                  <span>Loading...</span>
                  :
                  <>
                  <SongContainer style={ { borderTop: 'none', borderBottom: 'none' } }>
                      <SongName style={ { color: 'rgba(225,225,225,.6', fontSize: '12px' } }>Title</SongName>
                      <SongArtist style={ { color: 'rgba(225,225,225,.6', fontSize: '12px' } }>Artist</SongArtist>
                      <SongAlbum style={ { color: 'rgba(225,225,225,.6', fontSize: '12px' } }>Album</SongAlbum>
                      <SongDuration style={ { color: 'rgba(225,225,225,.6', fontSize: '12px' } }>Time</SongDuration>
                  </SongContainer>
                  { songs.map( ( song, id ) => {
                      return (
                          <SongContainer>
                              <SongName key={ 'song-' + id }>{ song.track.name }</SongName>
                              <SongArtist>{ song.track.album.artists[0].name}</SongArtist>
                              <SongAlbum>{ song.track.album.name }</SongAlbum>
                              <SongDuration>{ msToMinAndSec( song.track.duration_ms ) }</SongDuration>
                          </SongContainer>
                      )
                  } ) }
                  </>
                  
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
  cursor: pointer;
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
  cursor: pointer;
`;

const RangeContainer = styled.div`
  width: 40%;
  padding: 20px 0;
`;

const RangeHeader = styled.span`
  color: rgba(255,255,255, .5);
  font-size: 14px;
  margin-bottom: 15px;
`;

const PlaylistSongs = styled.div`
  display: flex;
  flex-direction: column;
`;

const SongContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid rgba(255,255,255, .3);
  border-bottom: 1px solid rgba(255,255,255, .3);
`;

const SongName = styled.div`
  color: white;
  width: 30%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const SongArtist = styled.div`
  color: white;
  width: 30%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const SongAlbum = styled.div`
  color: white;
  width: 30%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const SongDuration = styled.div`
  color: white;
  width: 10%;
  text-align: right;
`;