import React from 'react';
import styled from 'styled-components';

const ThirdModal = () => {
  return (
    <ModuleDiv>
      <ModuleText>Connect with your Spotify account now to get started!</ModuleText>
      <ModuleButton
        className="spotify-login"
        onClick={ () => window.location = 'http://geckos4-backend.herokuapp.com/login' }>
          Login with Spotify
      </ModuleButton>
    </ModuleDiv>
  )
}

export default ThirdModal;

const ModuleDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const ModuleText = styled.p`
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-align: center;
`;

const ModuleButton = styled.button`
  align-items: center;
  background-color: #0fbe44;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 2px;
  margin-top: 12.5%;
  padding: 12px 35px;
  text-transform: uppercase;
  transition-duration: 1s;
  width: 260px;
  border: none;

  &:hover {
    background-color: #14ff5b;
    color: #222;
  }
`;