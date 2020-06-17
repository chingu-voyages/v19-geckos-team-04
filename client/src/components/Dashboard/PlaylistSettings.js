import React, { useContext, useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import PlaylistName from './PlaylistName';
import SongsList from './SongsList';
import 'rc-slider/assets/index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { UserContext } from '../../context/UserContext';

const PlaylistSettings = ({ setView, selected, token, setSongs, view }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [allSongs, setAllSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState(allSongs);
  const [bpmValues, setBpmValues] = useState([65, 105]);
  const [danceabilityValues, setDanceabilityValues] = useState([0.0, 1.0]);
  const [energyValues, setEnergyValues] = useState([0.0, 1.0]);
  const [instrumentalnessValues, setInstrumentalnessValues] = useState([
    0.0,
    1.0
  ]);
  const [valenceValues, setValenceValues] = useState([0.0, 1.0]);
  const [title, setTitle] = useState('My Playlist');
  const { user } = useContext(UserContext);

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
    let updatedPlaylist = filteredSongs.filter(song => song.track.id !== id);
    setFilteredSongs(updatedPlaylist);
  };

  useEffect(() => {
    setFilteredSongs(
      allSongs.filter(
        ({
          features: { tempo, danceability, energy, instrumentalness, valence }
        }) =>
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
  }, [
    bpmValues,
    danceabilityValues,
    energyValues,
    instrumentalnessValues,
    valenceValues
  ]);

  useEffect(() => {
    selected.forEach(id => {
      fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: { Authorization: 'Bearer ' + token }
      })
        .catch(error => {
          console.log(error);
        })
        .then(res => res.json())
        .then(data => {
          const songIds = data.items.map(x => x.track.id).join(',');
          fetch(`https://api.spotify.com/v1/audio-features/?ids=${songIds}`, {
            headers: { Authorization: 'Bearer ' + token }
          })
            .catch(error => {
              console.log(error);
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
                setIsFetching(false);
              });
            });
        });
    });
  }, []);

  const savePlaylist = () => {

    const data = { spotifyID: user.display_name, title: title, songs: filteredSongs };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }

    fetch("http://localhost:8888/api/saved-playlist", options)
    .then(res => res.json())
    .then(data => console.log('playlist', data))
    .catch(error => console.error(`Error: ${error}`))

    setView('home');
    setSongs(filteredSongs);
  };

  return (
    <PlaylistSettingsContainer>
      <SettingsHeader>Playlist Settings</SettingsHeader>
      <BackButton onClick={() => setView('selectPlaylists')}>Back</BackButton>
      <Button onClick={() => savePlaylist()}>Save Playlist</Button>
      <PlaylistName title={title} setTitle={setTitle} />
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
        {isFetching ? (
          <LoaderContainer>
            <Loader type="Bars" color="orange" height={80} width={250} />
          </LoaderContainer>
        ) : !filteredSongs.length ? (
          <span>No matching songs. Please reset your filters</span>
        ) : (
          <SongsList songs={ filteredSongs } 
                     removeFromPlaylist={removeFromPlaylist} 
                     view="playlistSettings" 
                     token={token}
          />
        )}
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
