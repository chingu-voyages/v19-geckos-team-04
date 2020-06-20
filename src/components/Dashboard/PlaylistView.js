import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SongsList from './SongsList';
import Loader from 'react-loader-spinner';

const PlaylistView = ( { playlist, setView, userId, token } ) => {
    const [open, setOpen] = useState(false);
    
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
  
  const deletePlaylist = (playlist, userId) => {
      //delete ID from backend
      console.log(playlist)

    //   const data = { id: playlist, spotifyID: userId };

    //   const options = {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    //   }
  
      fetch(`${process.env.REACT_APP_BACKEND_URI}/api/delete-playlist/${playlist}`)
      .then(res => res.json())
      .then(data => console.log('delete playlist', data))
      .catch(error => console.error(`Error: ${error}`))

      setView( 'home' );
  }
  
  return (
    <PlaylistViewContainer>
        { open && 
            <ConfirmDeleteContainer>
              <p>Are you sure you want to delete this playlist?</p>
              <ModalExit onClick={() => setOpen(false)}>Cancel</ModalExit>
              <ModalConfirm onClick={() => deletePlaylist( playlist[0].id ) }>Confirm</ModalConfirm>
            </ConfirmDeleteContainer>
        }
        <ButtonContainer>
            <HomeButton onClick={() => setView('home') }>Back to playlists</HomeButton>
            <DeletePlaylist onClick={() => setOpen(true)}>Delete</DeletePlaylist>
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

const ConfirmDeleteContainer = styled.div`
    height: fit-content;
    padding: 10px 30px 30px 30px;
    width: 200px;
    position: absolute;
    background: #36444e;
    top: 15vh;
    left: 30%;
    border-radius: 10px;
    position: fixed;
    -webkit-box-shadow: -8px 11px 46px 5px rgba(19,28,32,0.72);
    -moz-box-shadow: -8px 11px 46px 5px rgba(19,28,32,0.72);
    box-shadow: -8px 11px 46px 5px rgba(19,28,32,0.72);
    z-index: 5;
    
    p {
        color: white;
    }
`;

const ModalExit = styled.button`
    background: transparent;
    border: 4px solid rgba(15,22,27,0.5);
    color: white;
    border-radius: 7px;
    padding: 15px;
    font-weight: bold;
    margin-right: 29px;
    cursor: pointer;
`;

const ModalConfirm = styled.button`
    background: rgba(15,22,27,.9);
    border: 4px solid rgba(15,22,27,0.5);
    color: white;
    border-radius: 7px;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
`;


const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const HomeButton = styled.button`
    background: rgba(15, 22, 27, 0.5);
    color: white;
    padding: 15px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    width: 150px;
    cursor: pointer;
    margin-right: 30px;
    outline: none;
`;

const DeletePlaylist = styled.button`
    background: #36444e;
    color: white;
    border-radius: 8px;
    border: none;
    width: 80px;
    cursor: pointer;
    outline: none;
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
