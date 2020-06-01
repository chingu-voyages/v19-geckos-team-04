import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../../images/plus-icon.png';

const MyPlaylistsView = ( { setPlaylists }) => {
  return (
    <MyPlaylistsViewContainer>
      {/* Below text needs to be set to disappear if playlist(s) exist */}
      <EmptyPlaylistText>
        Get started on a new playlist now
      </EmptyPlaylistText>
      <CreatePlaylistButton
        src={ PlusIcon }
        onClick={ setPlaylists }
      />
    </MyPlaylistsViewContainer>
  );
};

export default MyPlaylistsView;

const MyPlaylistsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  align-items: center;
  color: white;
  text-align: left;
  height: 100vh;
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
