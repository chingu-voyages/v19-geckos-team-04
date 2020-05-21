import React, { useState } from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../Styles/DarkTheme';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledBurger = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  margin-top: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${DarkTheme.mediumGray};
    border-radius: 10px;
    transition: transform 0.25s, opacity 0.25s;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media screen and (min-width: 990px) {
    display: none;
  }
`;

export default Burger;