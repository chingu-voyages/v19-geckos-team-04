import React from 'react';
import styled from 'styled-components';

const SignInButton = () => {
  return (
    <SignInStyle
      className="spotify-login" 
      onClick={ () => window.location = '/auth/spotify' }>
        Login with Spotify
    </SignInStyle>
  )
}

export default SignInButton;

const SignInStyle = styled.button`
  background-color: #2dd760;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  color: black;
  cursor: pointer;
  display: inline;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 15px 45px;
  width: 250px;
  margin: 0 15px;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
  border: none;
  transition-duration: 0.5s;
  white-space: nowrap;

  &:hover {
    background-color: #14ff5b;
  }

  @media screen and (max-width: 676px) {
    display: block;
    margin: 0 auto;
  }
`;