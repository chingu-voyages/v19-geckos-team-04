import React from 'react';
import styled from 'styled-components';

const SoundBars = () => {
  return (
    <SoundBarContainer>
      <GridContainer>
        {/* <!-- Bar #1 --> */}
        {/* <!-- 2 bars --> */}
        <NewBlockWrapper style={{marginTop: '80px'}}>
          <PTag>1</PTag>
          <PTag>2</PTag>
        </NewBlockWrapper>
        <NewBlockWrapper>
          <PTag>1</PTag>
          <PTag>2</PTag>
          <PTag>3</PTag>
          <PTag>4</PTag>
          <PTag>5</PTag>
        </NewBlockWrapper>
        <NewBlockWrapper>
          <PTag>1</PTag>
          <PTag>2</PTag>
          <PTag>3</PTag>
          <PTag>4</PTag>
          <PTag>5</PTag>
          <PTag>6</PTag>
          <PTag>7</PTag>
        </NewBlockWrapper>

        <NewBlockWrapper>
          <PTag>1</PTag>
          <PTag>2</PTag>
          <PTag>3</PTag>
          <PTag>4</PTag>
          <PTag>5</PTag>
          <PTag>6</PTag>
          <PTag>7</PTag>
          <PTag>8</PTag>
          <PTag>9</PTag>
        </NewBlockWrapper>
        <NewBlockWrapper>
          <PTag>1</PTag>
          <PTag>2</PTag>
          <PTag>3</PTag>
          <PTag>4</PTag>
          <PTag>5</PTag>
          <PTag>6</PTag>
        </NewBlockWrapper>
        <NewBlockWrapper>
          <PTag>1</PTag>
          <PTag>2</PTag>
          <PTag>3</PTag>
          <PTag>4</PTag>
          <PTag>5</PTag>
        </NewBlockWrapper>

        {/* <!-- Bar #2 --> */}
        {/* <!-- 4 bars --> */}
      </GridContainer>
    </SoundBarContainer>
  );
};

export default SoundBars;

const SoundBarContainer = styled.div`
  width: min-content;
  margin: 0 auto;
  ${'' /* height: 69vh; */}
`;

const GridContainer = styled.div`
  ${'' /* display: grid; */}
  ${'' /* grid-template-columns: repeat(12, 80px); */}
`;

const Block = styled.div`
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 40%,
    rgba(255, 230, 0, 0.897) 80%,
    rgb(255, 244, 141) 100%
  );
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 15px;
  margin-bottom: 14px;
  width: 50px;
`;

const NewBlockWrapper = styled.div`
  height:200px; 
  width:300px; 
  display:table-cell; 
  vertical-align:bottom; }
  color: black;
  ${'' /* display: grid; */}
  ${'' /* grid-auto-rows: 100px;  */}
  ${'' /* grid-template-columns: repeat(3, 1fr); */}
  ${'' /* row-gap: 1em; */}
`;


const PTag = styled.p`
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 40%,
    rgba(255, 230, 0, 0.897) 80%,
    rgb(255, 244, 141) 100%
  );
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  ${'' /* margin-bottom: 5px; */}
  border: 3px solid red;
  max-height:200px;
  height: 20px;
  padding: 10px;
  width: 50px;
  margin: 10px;
  z-index: -999;
  opacity: 0.6;
`;