import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const PlaylistSettings = ({ setView, selected, token }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    selected.forEach(id => {
      fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: { Authorization: 'Bearer ' + token }
      })
        .then(res => res.json())
        .then(data => {
          data.items.forEach(song => {
            setSongs(songs => [...songs, song]);
          });
        });
    });
  }, []);

  const msToMinAndSec = ms => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <PlaylistSettingsContainer>
      <SettingsHeader>Playlist Settings</SettingsHeader>
      <BackButton onClick={() => setView('selectPlaylists')}>Back</BackButton>
      <Button onClick={() => setView('playlistSettings')}>Next</Button>
      <RangeControlsContainer>
        <BPMContainer>
          <CustomRange
            title={'BPM'}
            min={30}
            max={130}
            step={5}
            defaultValue={[65, 105]}
          />
        </BPMContainer>
        <DanceabilityContainer>
          <CustomRange
            title={'Danceability'}
            min={0.0}
            max={1.0}
            step={0.1}
            defaultValue={[0.1, 0.9]}
          />
        </DanceabilityContainer>
        <EnergyContainer>
          <CustomRange
            title={'Energy'}
            min={0.0}
            max={1.0}
            step={0.1}
            defaultValue={[0.1, 0.9]}
          />
        </EnergyContainer>
        <InstrumentalnessContainer>
          <CustomRange
            title={'Instrumentalness'}
            min={0.0}
            max={1.0}
            step={0.1}
            defaultValue={[0.1, 0.9]}
          />
        </InstrumentalnessContainer>
        <ValenceContainer>
          <CustomRange
            title={'Valence'}
            min={0.0}
            max={1.0}
            step={0.1}
            defaultValue={[0.1, 0.9]}
          />
        </ValenceContainer>
      </RangeControlsContainer>
      <PlaylistSongs>
        {!songs.length ? (
          <span>Loading...</span>
        ) : (
          <>
            <SongContainer style={{ borderTop: 'none', borderBottom: 'none' }}>
              <SongName
                style={{
                  color: 'rgba(225,225,225,.6',
                  fontSize: '1rem'
                }}
              >
                Title
              </SongName>
              <SongArtist
                style={{
                  color: 'rgba(225,225,225,.6',
                  fontSize: '1rem'
                }}
              >
                Artist
              </SongArtist>
              <SongAlbum
                style={{
                  color: 'rgba(225,225,225,.6',
                  fontSize: '1rem'
                }}
              >
                Album
              </SongAlbum>
              <SongDuration
                style={{
                  color: 'rgba(225,225,225,.6',
                  fontSize: '1rem'
                }}
              >
                Time
              </SongDuration>
            </SongContainer>
            {songs.map((song, id) => {
              return (
                <SongContainer>
                  <SongName key={'song-' + id}>{song.track.name}</SongName>
                  <SongArtist>{song.track.album.artists[0].name}</SongArtist>
                  <SongAlbum>{song.track.album.name}</SongAlbum>
                  <SongDuration>
                    {msToMinAndSec(song.track.duration_ms)}
                  </SongDuration>
                </SongContainer>
              );
            })}
          </>
        )}
      </PlaylistSongs>
    </PlaylistSettingsContainer>
  );
};

export default PlaylistSettings;

const CustomRange = ({ title, min, max, step, defaultValue }) => {
  const RangeWithSlider = createSliderWithTooltip(Range);
  return (
    <Fragment>
      <RangeHeader>{title}</RangeHeader>
      <RangeWithSlider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        minimumTrackStyle={{ marginTop: '10px' }}
        railStyle={{ backgroundColor: 'gray' }}
        trackStyle={[{ backgroundColor: 'orange' }]}
        handleStyle={[
          { backgroundColor: 'orange', border: 'none' },
          { backgroundColor: 'orange', border: 'none' }
        ]}
      />
    </Fragment>
  );
};

const PlaylistSettingsContainer = styled.div`
  position: relative;
  margin: 30px;

  @media screen and (max-width: 768px) {
    margin: 15px;
  }
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
  background-color: #2dd760;
  border-radius: 3px;
  color: black;
  padding: 10px 15px;
  margin-bottom: 30px;
  font-weight: bold;
  border: none;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
  cursor: pointer;
`;

const RangeControlsContainer = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 47.5% 5% 47.5%;
  grid-template-rows: repeat(3, 3.5rem);

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(5, 3.5rem);
  }
`;

const RangeHeader = styled.span`
  color: white;
  :1.1rem ;
`;

const BPMContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: grid;
  grid-column: 60% 40%;
  grid-row: auto;
`;

const DanceabilityContainer = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  display: grid;
  grid-column: 60% 40%;
  grid-row: auto;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

const EnergyContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: grid;
  grid-column: 60% 40%;
  grid-row: auto;

  @media screen and (max-width: 768px) {
    grid-row: 3/4;
  }
`;

const InstrumentalnessContainer = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  display: grid;
  grid-column: 60% 40%;
  grid-row: auto;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 4/5;
  }
`;

const ValenceContainer = styled.div`
  grid-columm: 1/2;
  grid-row: 3/4;
  display: grid;
  grid-column: 60% 40%;
  grid-row: auto;

  @media screen and (max-width: 768px) {
    grid-row: 5/6;
  }
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
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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
