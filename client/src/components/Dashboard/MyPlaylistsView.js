import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlusIcon from '../../images/plus-icon.png';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const MyPlaylistsView = ( { setPlaylists, setViewPlaylist, setPlaylistId, setPlaylist } ) => {
    
    const [ userPlaylists, setUserPlaylists ] = useState( 'fetching' );
    useEffect(() => {
        // test function for loading states and playlist view
        setTimeout( () => {
            setUserPlaylists( [ { id: 1, title: 'test1', songs: [ 'song1', 'song2' ] }, { id: 2, title: 'test2', songs: [ 'song3', 'song4' ] }, { id: 3, title: 'test3', songs: [ 'song5', 'song6' ] } ])
            // setUserPlaylists( [] );
        }, 3000 )
        
      // fetch user's saved playlists and setUserPlaylists to array of playlist objects - title, songs array, playlist ID
    }, []);
    
    const viewPlaylist = id => {
        let selectedPlaylist = userPlaylists.filter( playlist => playlist.id === id );
        setViewPlaylist();
        setPlaylistId( id );
        setPlaylist( selectedPlaylist )
    }
    
  return (
    <MyPlaylistsViewContainer style={ { marginTop: ( userPlaylists === 'fetching' || !userPlaylists.length ? '20%' : '8%' ) } }>
      { userPlaylists === 'fetching' ?
          <Loader type="Bars" color="orange" height={80} width={250} />
          :
          ( userPlaylists !== 'fetching' && userPlaylists.length ? 
              <>
                  <UserPlaylistsContainer>
                      { userPlaylists.map( playlist => (
                          <UserPlaylistContainer>
                              <UserPlaylistTitle>{ playlist.title }</UserPlaylistTitle>
                              <AddToSpotify>{ playlist.songs[1]}</AddToSpotify>
                              <ViewPlaylistButton onClick={ () => viewPlaylist( playlist.id ) }>View Playlist</ViewPlaylistButton>
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
  color: white;
  text-align: left;
  height: 100vh;
`;

const UserPlaylistsContainer = styled.div`
  padding: 20px 0 30px 0;
  display: flex;
  flex-direction: column;
`;

const UserPlaylistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  padding: 20px 0;
  border-top: 1px solid white;
`;

const UserPlaylistTitle = styled.span`
  color: white;
`;

const AddToSpotify = styled.span`
`;

const ViewPlaylistButton = styled.span`
  cursor: pointer;
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
