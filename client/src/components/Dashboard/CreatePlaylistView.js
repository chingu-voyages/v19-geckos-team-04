import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../Shared/Styles/DarkTheme';

const CreatePlaylistView = () => {
  return (
    <CreatePlaylistViewContainer>
      <FilterControls>
        <Category>
          <Label>Category</Label>
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
      </FilterControls>
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
  display: grid;
  padding-top: 2rem;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  height: 15vw;
`;

const Label = styled.label`
  color: ${DarkTheme.lightgray};
`;

const Category = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const RadioButtons = styled.div`
  color: ${DarkTheme.orange};
`;
