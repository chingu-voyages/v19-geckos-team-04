import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default UserPlaylists;

function UserPlaylists( { userPlaylists, 
                          featuredPlaylists, 
                          selected, 
                          setSelected, 
                          setView } ) {
    const [ playlistView, setPlaylistView ] = useState( 'user' );
    
    const addToSelectedPlaylists = id => {
        if ( !selected.includes( id ) ) {
            setSelected( selected => [ ...selected, id ] );
        } else {
            setSelected( selected.filter( el => el !== id ) );
        }
    }
    
    const isSelectedPlaylist = ( id, img ) => {
        if ( selected.includes( id ) ) {
            return { border: '2px solid #2DD760', backgroundImage: `url(${img}` }
        } else {
            return { backgroundImage: `url(${img}` }
        }
    }
    
    return (
        <SelectPlaylistsContainer>
            {console.log(featuredPlaylists)}
            <SelectPlaylists>Select Playlists</SelectPlaylists>
            <BackButton onClick={ () => setView( 'home' ) }>Back</BackButton>
            <Button disabled={ selected.length ? false : true }
                    onClick={ () => setView( 'playlistSettings' ) }>Next</Button>
            <PlaylistTabs>
                <UserTab 
                    style={ playlistView === 'user' ? { textDecoration: 'underline', fontWeight: 'bold' } : { textDecoration: 'none' } } 
                    onClick={ () => setPlaylistView( 'user' ) }>
                    Your Playlists
                </UserTab>
                <FeaturedTab 
                    style={ playlistView === 'spotify' ? { textDecoration: 'underline', fontWeight: 'bold' } : { textDecoration: 'none' } }
                    onClick={ () => setPlaylistView( 'spotify' ) }>
                    Spotify Featured Playlists
                </FeaturedTab>
            </PlaylistTabs>
            <UsersPlaylists>
                { userPlaylists === 'fetching' ? 
                    <span>Loading...</span>
                    :
                    ( playlistView === 'user' ? 
                        ( userPlaylists.map( ( playlist, id ) => {
                            return (
                                <PlaylistContainer>
                                    <Playlist 
                                                key={ 'playlist-' + id }
                                                onClick={ () => addToSelectedPlaylists( playlist.id ) }
                                                style={ isSelectedPlaylist( playlist.id, playlist.images[0].url ) }>
                                                { playlist.name }
                                    </Playlist>
                                    <PlaylistName>{ playlist.name }</PlaylistName>
                                </PlaylistContainer>
                            )
                        } ) )
                        :
                        ( featuredPlaylists.map( ( playlist, id ) => {
                            return <Playlist 
                                        key={ 'playlists-' + id }
                                        onClick={ () => addToSelectedPlaylists( playlist.id ) } 
                                        style={ isSelectedPlaylist( playlist.id, playlist.images[0].url ) }></Playlist>
                        } ) )
                    )
                    
                }
            </UsersPlaylists>
        </SelectPlaylistsContainer>
    )
}

const SelectPlaylistsContainer = styled.div`
  position: relative;
  margin: 30px;
`;

const SelectPlaylists = styled.h1`
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

const UsersPlaylists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PlaylistTabs = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const UserTab = styled.span`
  font-size: 20px;
  margin-right: 30px;
  color: white;
  cursor: pointer;
`;

const FeaturedTab = styled.span`
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const PlaylistContainer = styled.div`
  position: relative;
`;

const Playlist = styled.span`
  color: white;
  font-weight: bold;
  margin: 10px 10px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: 200px;
  height: 200px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
  border: 2px solid transparent;
  background-repeat: no-repeat;
  background-position: center;
`;

const PlaylistName = styled.span`
  color: white;
  font-weight: bold;
  padding: 12px;
  border: 1px solid white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
`;
