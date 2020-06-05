import React from 'react';
import styled from 'styled-components';

const SoundBars = () => {
  return (
    <SoundBarContainer>
      {/* <!-- Bar #1 --> */}
      {/* <!-- 2 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #2 --> */}
      {/* <!-- 4 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #3 --> */}
      {/* <!-- 8 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #4 --> */}
      {/* <!-- 6 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #5 --> */}
      {/* <!-- 10 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #6 --> */}
      {/* <!-- 11 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #7 --> */}
      {/* <!-- 7 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #8 --> */}
      {/* <!-- 5 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #9 --> */}
      {/* <!-- 9 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #10 --> */}
      {/* <!-- 10 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #11 --> */}
      {/* <!-- 6 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>

      {/* <!-- Bar #12 --> */}
      {/* <!-- 3 bars --> */}
      <BlockWrapper>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
        <PTag>&nbsp;</PTag>
      </BlockWrapper>
    </SoundBarContainer>
  );
};

export default SoundBars;


const SoundBarContainer = styled.div`
  margin: 0 auto;
  opacity: 0.8;
  width: 800px;
  
  @media screen and (max-width: 990px) {
    width: 660px;
  }
  @media screen and (max-width: 768px) {
    width: 450px;
    opacity: 0.7;
    overflow: hidden;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    opacity: 0.6;
  }
`;

const BlockWrapper = styled.div`
  display: table-cell;
  height: 69vh;
  width: 8.333%; /* 12 columns total. 100 / 12 = 8.333~ */
  vertical-align: bottom;
`;

const PTag = styled.p`
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 212, 255, 1) 65%,
    rgba(255, 230, 0, 0.897) 100%
  );
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: inline-block;
  height: 17px;
  margin: 5px;
  width: 80%;
  z-index: -999;
`;