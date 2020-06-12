import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import PlaylistName from './PlaylistName';
import 'rc-slider/assets/index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const PlaylistSettings = ({ setView, selected, token }) => {
  const [isFetching, setIsFetching] = useState( true );
  const [allSongs, setAllSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState(allSongs);
  const [bpmValues, setBpmValues] = useState([65, 105]);
  const [danceabilityValues, setDanceabilityValues] = useState([0.0, 1.0]);
  const [energyValues, setEnergyValues] = useState([0.0, 1.0]);
  const [instrumentalnessValues, setInstrumentalnessValues] = useState([0.0, 1.0]);
  const [valenceValues, setValenceValues] = useState([0.0, 1.0]);
  const [title, setTitle] = useState( 'My Playlist' );

  const onBpmValuesChangedHandler = values => {
    setBpmValues(values);
  };

  const onDanceabilityValuesChangedHandler = values => {
    setDanceabilityValues(values);
  };

  const onEnergyValuesChangedHandler = values => {
    setEnergyValues(values);
  };

  const onInstrumentalnessValuesChangedHandler = values => {
    setInstrumentalnessValues(values);
  };

  const onValenceValuesChangedHandler = values => {
    setValenceValues(values);
  };
  
  const removeFromPlaylist = id => {
    let updatedPlaylist = filteredSongs.filter( song => song.track.id !== id );
    setFilteredSongs( updatedPlaylist );
  }

  useEffect(() => {
    setFilteredSongs(
      allSongs.filter(
        ({ features: { tempo, danceability, energy, instrumentalness, valence } }) =>
          tempo >= bpmValues[0] &&
          tempo <= bpmValues[1] &&
          danceability >= danceabilityValues[0] &&
          danceability <= danceabilityValues[1] &&
          energy >= energyValues[0] &&
          energy <= energyValues[1] &&
          instrumentalness >= instrumentalnessValues[0] &&
          instrumentalness <= instrumentalnessValues[1] &&
          valence >= valenceValues[0] &&
          valence <= valenceValues[1]
      )
    );
  }, [bpmValues, danceabilityValues, energyValues, instrumentalnessValues, valenceValues]);

  useEffect(() => {
    selected.forEach(id => {
      fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: { Authorization: 'Bearer ' + token }
      })
        .then(res => res.json())
        .then(data => {
          const songIds = data.items.map(x => x.track.id).join(',');
          fetch(`https://api.spotify.com/v1/audio-features/?ids=${songIds}`, {
            headers: { Authorization: 'Bearer ' + token }
          })
            .then(res => res.json())
            .then(features => {
              const featuresDictionary = {};
              features.audio_features.forEach(
                feature => (featuresDictionary[feature.id] = feature)
              );
              data.items.forEach(song => {
                const features = featuresDictionary[song.track.id];
                setAllSongs(allSongs => [...allSongs, { ...song, features }]);
                setFilteredSongs(allSongs => [
                  ...allSongs,
                  { ...song, features }
                ]);
                setIsFetching( false );
              });
            });
        });
    });
  }, []);

  const msToMinAndSec = ms => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };
  
  const savePlaylist = () => {
      const savedPlaylist = { title: title, songs: filteredSongs }
      console.log( 'playlist', savedPlaylist )
      
      //Function to save playlist object to backend
  }

  return (
    <PlaylistSettingsContainer>
      <SettingsHeader>Playlist Settings</SettingsHeader>
      <BackButton onClick={ () => setView('selectPlaylists') }>Back</BackButton>
      <Button onClick={ () => savePlaylist() }>Save Playlist</Button>
      <PlaylistName title={ title } setTitle={ setTitle} />
      <RangeControlsContainer>
        <BPMContainer>
          <CustomRange
            title={'BPM'}
            min={30}
            max={130}
            step={5}
            defaultValue={bpmValues}
            onRangeValuesChanged={onBpmValuesChangedHandler}
          />
        </BPMContainer>
        <DanceabilityContainer>
          <CustomRange
            title={'Danceability'}
            min={0.0}
            max={1.0}
            step={0.1}
            defaultValue={danceabilityValues}
            onRangeValuesChanged={onDanceabilityValuesChangedHandler}
          />
        </DanceabilityContainer>
        <EnergyContainer>
          <CustomRange
            title={'Energy'}
            min={0.0}
            max={1.0}
            step={0.1}
            defaultValue={energyValues}
            onRangeValuesChanged={onEnergyValuesChangedHandler}
          />
        </EnergyContainer>
        <InstrumentalnessContainer>
          <CustomRange
            title={'Instrumentalness'}
            min={0.0}
            max={1.0}
            step={0.1}
            defaultValue={instrumentalnessValues}
            onRangeValuesChanged={onInstrumentalnessValuesChangedHandler}
          />
        </InstrumentalnessContainer>
        <ValenceContainer>
          <CustomRange
            title={'Valence'}
            min={0.0}
            max={1.0}
            step={0.1}
            defaultValue={valenceValues}
            onRangeValuesChanged={onValenceValuesChangedHandler}
          />
        </ValenceContainer>
      </RangeControlsContainer>
      <PlaylistSongs>
        { isFetching ? 
            <LoaderContainer>
                <Loader type="Bars" color="orange" height={80} width={250} />
            </LoaderContainer>
            :
            ( !filteredSongs.length ?
              <span>No matching songs. Please reset your filters</span>
              :
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
                  <SongDelete style={{
                    color: 'rgba(225,225,225,.6',
                    fontSize: '1rem'
                  }}
                  >
                  </SongDelete>
                </SongContainer>
                {filteredSongs.map((song, id) => {
                  return (
                    <SongContainer>
                      <SongName key={'song-' + id}>{song.track.name}</SongName>
                      <SongArtist>{song.track.album.artists[0].name}</SongArtist>
                      <SongAlbum>{song.track.album.name}</SongAlbum>
                      <SongDuration>
                        {msToMinAndSec(song.track.duration_ms)}
                      </SongDuration>
                      <SongDelete onClick={ () => removeFromPlaylist( song.track.id ) }>
                          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.69048 6.66667L9.69048 15.5714M12.9269 6.70331L12.1174 15.6081M6.45072 6.63002L7.26024 15.5348M2.80952 4.2381H16.5714L14.8512 18H4.52976L2.80952 4.2381ZM2 2.61905H17.381V4.2381H2V2.61905ZM7.66667 1H11.7143V2.61905H7.66667V1Z" stroke="#FDFAFF" strokeWidth="0.809524"/>
                          </svg>
                      </SongDelete>
                    </SongContainer>
                  );
                })}
              </>
            )
        }
      </PlaylistSongs>
    </PlaylistSettingsContainer>
  );
};

export default PlaylistSettings;

const CustomRange = ({
  title,
  min,
  max,
  step,
  defaultValue,
  onRangeValuesChanged
}) => {
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
        onAfterChange={onRangeValuesChanged}
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

const LoaderContainer = styled.div`
  width: 100vw - 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
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

const SongDelete = styled.div`
  color: white;
  width: 5%;
  text-align: right;
  cursor: pointer;
`;
