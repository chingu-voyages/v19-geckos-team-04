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
  width: min-content;
`;

const BlockWrapper = styled.div`
  display: table-cell;
  height: 69vh;
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
  height: 17px;
  margin: 13px;
  width: 50px;
  z-index: -999;
`;