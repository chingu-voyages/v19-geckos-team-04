import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../../images/plus-icon.png';

const MyPlaylistsView = ( { setPlaylists }) => {
  return (
    <MyPlaylistsViewContainer>
      {/* Below text needs to be set to disappear if playlist(s) exist */}
      <EmptyPlaylistText>
        Wow, so empty. Hit the button below to create a playlist.
      </EmptyPlaylistText>
      <CreatePlaylistButton
        src={PlusIcon}
        onClick={ setPlaylists }
      />
    </MyPlaylistsViewContainer>
  );
};

export default MyPlaylistsView;

const MyPlaylistsViewContainer = styled.div`
  display: block;
  color: white;
  text-align: left;
`;

const EmptyPlaylistText = styled.div`
  ${'' /* display: ${props => (props.playlists ? 'block' : 'none')}; */}
`;

const CreatePlaylistButton = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;

  @media screen and (max-width: 320px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
