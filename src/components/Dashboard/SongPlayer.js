import React, { useEffect, useState, Fragment } from 'react';
import ReactPlayer from 'react-player'
import styled from 'styled-components';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const SongPlayer = ( { song, playPause } ) => {
        
  const [controls, setControls] = useState(true);
  
  return (
    <SongPlayerContainer style={{ marginBottom: '10px'}}>
        { song.track ?
            <ReactPlayer
                      className='react-player'
                      width='100%'
                      height='40px'
                      url={ song.track.preview_url }
                      playing={playPause}
                      controls={controls}
                      loop={false}
                      onReady={() => console.log('onReady')}
                      onStart={() => console.log('onStart')}
                      onBuffer={() => console.log('onBuffer')}
                      onError={e => console.log('onError', e)}
                    />
                :
            <div style={ { height: '40px' } }></div>
        }
    </SongPlayerContainer>
  );
};

export default SongPlayer;

const SongPlayerContainer = styled.div`
    video {
        outline: none;
    }
`;
