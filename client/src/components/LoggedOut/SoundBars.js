import React from 'react';
import styled from 'styled-components';

const SoundBars = () => {
  return (
    <SoundBarContainer>
      <GridContainer>
        {/* <!-- Bar #1 --> */}
        {/* <!-- 2 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #2 --> */}
        {/* <!-- 4 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #3 --> */}
        {/* <!-- 8 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #4 --> */}
        {/* <!-- 6 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #5 --> */}
        {/* <!-- 10 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #6 --> */}
        {/* <!-- 11 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #7 --> */}
        {/* <!-- 7 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #8 --> */}
        {/* <!-- 5 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #9 --> */}
        {/* <!-- 9 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #10 --> */}
        {/* <!-- 10 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #11 --> */}
        {/* <!-- 6 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>

        {/* <!-- Bar #12 --> */}
        {/* <!-- 3 bars --> */}
        <Block>
          <Block></Block>
          <Block></Block>
          <Block></Block>
        </Block>
      </GridContainer>
    </SoundBarContainer>
  );
};

export default SoundBars;

const SoundBarContainer = styled.div`
  transform: scale(1, -1);
   {
    /* Flips bars upside-down. By default the rows are built DOWNWARD. */
  }
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  width: min-content;
  margin: 0 auto;
  height: 69vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 80px);
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
