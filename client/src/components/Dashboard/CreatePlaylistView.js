import React, { useState } from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../Shared/Styles/DarkTheme';
import CollapseUpArrow from '../../images/collapse-up-arrow.svg';
import ExpandDownArrow from '../../images/expand-down-arrow.svg';

const CreatePlaylistView = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <CreatePlaylistViewContainer>
      <FilterControls collapse={collapse}>
        <Category>
          <FilterLabel>Category</FilterLabel>
          <RadioButtons>
            <input type="radio" id="warmup" value="warmup" name="category" />
            <label for="warmup">Warm-up</label>
            <input type="radio" id="workout" value="Workout" name="category" />
            <label for="workout">Workout</label>
            <input
              type="radio"
              id="cooldown"
              value="Cool-down"
              name="category"
            />
            <label for="cooldown">Cool-down</label>
          </RadioButtons>
        </Category>
        <BPM>
          <FilterLabel>BPM</FilterLabel>
        </BPM>
        <Genre>
          <FilterLabel>Genre</FilterLabel>
        </Genre>
        <Time>
          <FilterLabel>Time</FilterLabel>
        </Time>
      </FilterControls>
      <CollapseExpand onClick={() => setCollapse(!collapse)}>
        {collapse ? (
          <span>
            Expand <img src={ExpandDownArrow} />
          </span>
        ) : (
          <span>
            Collapse <img src={CollapseUpArrow} />
          </span>
        )}
      </CollapseExpand>
      <HorizontalRule />
    </CreatePlaylistViewContainer>
  );
};

export default CreatePlaylistView;

const CreatePlaylistViewContainer = styled.div`
  display: block;
  color: white;
  text-align: left;
  margin-right: 4rem;
`;

const FilterControls = styled.div`
  display: ${props => (props.collapse ? 'none' : 'grid')};
  padding-top: 2rem;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  height: 15vw;
`;

const FilterLabel = styled.label`
  color: ${DarkTheme.lightgray};
`;

const Category = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const RadioButtons = styled.div`
  color: ${DarkTheme.orange};
  margin-top: 1rem;

  input[type='radio'] {
    visibility: hidden;
    position: absolute;
  }

  input[type='radio'] + label:before {
    height: 1rem;
    width: 1rem;
    margin-right: 2px;
    content: ' ';
    display: inline-block;
    vertical-align: baseline;
    border: 2px solid ${DarkTheme.orange};
    margin-right: 0.5rem;
  }

  input[type='radio']:checked + label:before {
    background: ${DarkTheme.orange};
  }

  input[type='radio'] + label:before {
    border-radius: 50%;
  }

  label {
    margin-right: 1rem;
  }
`;

const BPM = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
`;

const Genre = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
`;

const Time = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
`;

const HorizontalRule = styled.div`
  color: ${DarkTheme.lightgray};
  border: 1px solid ${DarkTheme.charcoal};
`;

const CollapseExpand = styled.div`
  text-align: right;
  font-size: 0.9rem;
  cursor: pointer;

  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
