import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlusIcon from '../../images/plus-icon.png';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import placeholder from './../../images/placeholder.jpg';
import { DarkTheme } from '../Shared/Styles/DarkTheme';

const MyPlaylistsView = ( { setPlaylists, setViewPlaylist, setPlaylistId, setPlaylist } ) => {
    
    const [ userPlaylists, setUserPlaylists ] = useState( 'fetching' );
    useEffect(() => {
        // test function for loading states and playlist view
        setTimeout( () => {
            setUserPlaylists( [ { id: 1, title: 'test1', songs: [ 'song1', 'song2' ] }, { id: 2, title: 'test2', songs: [ 'song3', 'song4' ] }, { id: 3, title: 'test3', songs: [ 'song5', 'song6' ] } ])
            // setUserPlaylists( [] );
        }, 1000 )
        
      // fetch user's saved playlists and setUserPlaylists to array of playlist objects - title, songs array, playlist ID
    }, []);
    
    const viewPlaylist = id => {
        let selectedPlaylist = userPlaylists.filter( playlist => playlist.id === id );
        setViewPlaylist();
        setPlaylistId( id );
        setPlaylist( selectedPlaylist )
    }
    
  return (
    <MyPlaylistsViewContainer 
      style={ { marginTop: ( userPlaylists === 'fetching' || !userPlaylists.length ? '20%' : '8%' ) } }
      className="my-playlist-view-text"
      >
      { userPlaylists === 'fetching' ?
          <Loader type="Bars" color="orange" height={80} width={250} />
          :
          ( userPlaylists !== 'fetching' && userPlaylists.length ? 
              <>
                  <UserPlaylistsContainer>
                      { userPlaylists.map( ( playlist, i ) => (
                          <UserPlaylistContainer className="user-playlist-container" key={ 'playlist-' + i }>
                              <PlaylistImage>
                                  <UserPlaylistImage src={ placeholder } />
                              </PlaylistImage>
                              <PlaylistInfo>
                                  <UserPlaylistTitle>{ playlist.title }</UserPlaylistTitle>
                                  <NumberOfSongs>{ playlist.songs.length } songs</NumberOfSongs>
                                  <ViewPlaylistButton onClick={ () => viewPlaylist( playlist.id ) }>View Playlist</ViewPlaylistButton>
                              </PlaylistInfo>
                          </UserPlaylistContainer>
                      ) ) }
                  </UserPlaylistsContainer>
                  <CreatePlaylistButton
                    src={ PlusIcon }
                    onClick={ setPlaylists }
                  />
              </>
              :
              <>
                  <EmptyPlaylistText>
                    Get started on a new playlist
                  </EmptyPlaylistText>
                  <CreatePlaylistButton
                    src={ PlusIcon }
                    onClick={ setPlaylists }
                  />
              </>
          )
      }
    </MyPlaylistsViewContainer>
  );
};

export default MyPlaylistsView;

const MyPlaylistsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${'' /* color: white; */}
  text-align: left;
  height: 100vh;
`;

const UserPlaylistsContainer = styled.div`
  padding: 20px 0 30px 0;
  display: flex;
  flex-wrap: wrap;
  
  @media screen and (max-width: 660px) {
    justify-content: center;
  }
`;

const UserPlaylistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-top: 1px solid;
  background: #f0f5f1;
  color: #212f3a;
  border-radius: 5px;
  margin: 15px;
  -webkit-box-shadow: 0px 0px 45px -15px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 45px -15px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 45px -15px rgba(0,0,0,0.75);
  width: 225px;
  height: 150px
`;

const PlaylistImage = styled.div`
  display: flex;
  align-items: center;
`;

const UserPlaylistImage = styled.img`
  height: 135px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 22px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 22px -3px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 22px -3px rgba(0,0,0,0.75);
`;

const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPlaylistTitle = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const NumberOfSongs = styled.span`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ViewPlaylistButton = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: #00ABB8;
  }
`;

const EmptyPlaylistText = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
  ${'' /* display: ${props => (props.playlists ? 'block' : 'none')}; */}
`;

const CreatePlaylistButton = styled.img`
  cursor: pointer;
  width: 3rem;
  height: 3rem;

  @media screen and (max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;