import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../Styles/DarkTheme';

const Burger = ({ open, setOpen }) => {
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
  margin: 1.8rem 2rem 0 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  @media screen and (max-width: 768px) {
    margin-right: 1rem;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 1.8rem;
    height: 0.25rem;
    background: white;
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
