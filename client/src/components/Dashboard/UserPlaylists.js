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
    
    const isSelectedPlaylist = id => {
        if ( selected.includes( id ) ) {
            return { padding: '5px 10px', backgroundColor: 'gray' }
        }
    }
    
    return (
        <SelectPlaylistsContainer>
            <SelectPlaylists>Select Playlists</SelectPlaylists>
            <BackButton onClick={ () => setView( 'home' ) }>Back</BackButton>
            <Button disabled={ selected.length ? false : true }
                    onClick={ () => setView( 'playlistSettings' ) }>Next</Button>
            <UsersPlaylists>
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
                { userPlaylists === 'fetching' ? 
                    <span>Loading...</span>
                    :
                    ( playlistView === 'user' ? 
                        ( userPlaylists.map( ( playlist, id ) => {
                            return <Playlist 
                                        key={ 'playlist-' + id }
                                        onClick={ () => addToSelectedPlaylists( playlist.id ) }
                                        style={ isSelectedPlaylist( playlist.id ) }>{ playlist.name }</Playlist>
                        } ) )
                        :
                        ( featuredPlaylists.map( ( playlist, id ) => {
                            return <Playlist 
                                        key={ 'playlists-' + id }
                                        onClick={ () => addToSelectedPlaylists( playlist.id ) } 
                                        style={ isSelectedPlaylist( playlist.id ) }>{ playlist.name }</Playlist>
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
  flex-direction: column;
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

const Playlist = styled.span`
  color: white;
  font-weight: bold;
  margin: 10px 0;
  width: fit-content
`;
