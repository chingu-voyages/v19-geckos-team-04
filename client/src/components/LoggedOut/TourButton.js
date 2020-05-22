import React from 'react';
import styled from 'styled-components';

const TourButton = (props) => {
  return (
    <TourStyle 
      onClick={() => props.showModal}>
      Take a Tour
    </TourStyle>
  )
}

export default TourButton;

const TourStyle = styled.button`
  background-color: #e5e5e5;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  color: #222;
  cursor: pointer;
  display: inline;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 15px 45px;
  text-transform: uppercase;
  width: 250px;
`;