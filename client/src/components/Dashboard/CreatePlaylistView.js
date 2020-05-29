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
            <label htmlFor="warmup">Warm-up</label>
            <input type="radio" id="workout" value="Workout" name="category" />
            <label htmlFor="workout">Workout</label>
            <input
              type="radio"
              id="cooldown"
              value="Cool-down"
              name="category"
            />
            <label htmlFor="cooldown">Cool-down</label>
          </RadioButtons>
        </Category>
        <BPM>
          <FilterLabel>BPM</FilterLabel>
        </BPM>
        <Genre>
          <FilterLabel>Genre</FilterLabel>
          <CustomSelect>
            <select>
              <option>Electronic</option>
              <option>Hip-hop</option>
              <option>Rap</option>
              <option>Pop</option>
            </select>
          </CustomSelect>
        </Genre>
        <Time>
          <FilterLabel>Time</FilterLabel>
        </Time>
      </FilterControls>
      <CollapseExpand onClick={() => setCollapse(!collapse)}>
        {collapse ? (
          <div>
            Expand
            <img src={ExpandDownArrow} />
          </div>
        ) : (
          <div>
            Collapse
            <img src={CollapseUpArrow} />
          </div>
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

const FilterLabel = styled.div`
  color: ${DarkTheme.lightgray};
  margin-bottom: 1rem;
`;

const Category = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const RadioButtons = styled.div`
  color: ${DarkTheme.orange};

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

const CustomSelect = styled.div`
  select {
    font-size: 1.1rem;
    color: ${DarkTheme.orange};
    width: 12rem;
    border: none;
    background: none;
    border-bottom: 3px solid ${DarkTheme.orange};
  }
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
