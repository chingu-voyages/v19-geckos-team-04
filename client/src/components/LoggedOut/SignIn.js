import React, { useContext } from 'react';

import Header from './Header';
import TourButton from './TourButton';
import SignInButton from './SignInButton';
import SoundBars from './SoundBars';
import Logo from '../LoggedOut/Logo';

// import SunMoonIcon from './SunMoonIcon';
import { ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';

import { ModalContext } from '../../context/ModalContext';

const LandingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const HeaderContainer = styled.div`
  position: relative;
  top: 20%;
  z-index: 1000;
`;

const ButtonsContainer = styled.div`
  text-align: center;
`;

const SoundBarsContainer = styled.div`
  position: relative;
  align-self: center;
  z-index: 999;
  bottom: 0;
`;

const StyledDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;


const SignIn = () => {

  const onOpenModal = useContext(ModalContext);

  return (
    <>
      <StyledDivContainer>
        <Logo />
        {/* <SunMoonIcon /> */}
      </StyledDivContainer>
      <LandingContainer>
        <HeaderContainer>
          <Header />
          <ModalProvider>
            <ButtonsContainer>
              <TourButton showModal={() => onOpenModal()} />
              <SignInButton />
            </ButtonsContainer>
          </ModalProvider>
        </HeaderContainer>
        <SoundBarsContainer>
          <SoundBars />
        </SoundBarsContainer>
      </LandingContainer>
    </>
  )
}

export default SignIn;