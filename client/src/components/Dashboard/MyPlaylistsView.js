import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../../images/plus-icon.png';

const MyPlaylistsView = () => {
  const onCreatePlaylistClickedHandler = () => {
    alert("This will need to route to Create Playlist view");
  }

  return (
    <MyPlaylistsViewContainer>
      {/* Below text needs to be set to disappear if playlist(s) exists */}
      <p>Wow, so empty. Hit the button below to create a playlist.</p>
      <CreatePlaylistButton src={PlusIcon} onClick={onCreatePlaylistClickedHandler} />
    </MyPlaylistsViewContainer>
  );
};

export default MyPlaylistsView;

const MyPlaylistsViewContainer = styled.div`
  display: block;
  color: white;
  text-align: left;

  @media screen and (max-width: 768px) {

  p {

  }
`;

const CreatePlaylistButton = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;
