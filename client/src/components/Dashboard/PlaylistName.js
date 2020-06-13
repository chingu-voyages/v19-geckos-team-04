import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlaylistName = ( { songs, title, setTitle } ) => {
  const [ isEditting, setIsEditting ] = useState( false );

  return (
    <InputContainer>
        <Title>Title</Title>
        <PlaylistNameContainer>
            { isEditting ? 
                <>
                    <Input onChange={ e => setTitle( e.target.value ) } defaultValue={ title } placeholder={ title } type="text" onBlur={ () => setIsEditting( false ) } />
                    <Button onClick={ () => setIsEditting( false ) }>Save</Button>
                </>
                :
                <>
                    <PlaylistHeader>{ title }</PlaylistHeader>
                    <EditIcon onClick={ () => setIsEditting( true ) } width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9032 4.22581L17.7742 8.09677M13.9032 4.22581L3.58065 14.5484M13.9032 4.22581L15.1935 2.93548M17.7742 8.09677L7.45161 18.4194M17.7742 8.09677L19.0645 6.80645M7.45161 18.4194L3.58065 14.5484M7.45161 18.4194L2.92739 19.0564L3.58065 14.5484M15.1935 2.93548L19.0645 6.80645M15.1935 2.93548V2.93548C16.2625 1.86655 17.9956 1.86654 19.0645 2.93548V2.93548C20.1334 4.00442 20.1334 5.73751 19.0645 6.80645V6.80645" stroke="#2dd760" strokeWidth="0.912396"/>
                    </EditIcon>
                </>
            }
        </PlaylistNameContainer>
    </InputContainer>
  );
};

export default PlaylistName;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const PlaylistNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 12px;
  color: gray;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px 15px;
  color: white;
  background-color: black;
  border-radius: 5px;
  border: 1px solid #2dd760;
`;

const Button = styled.button`
  background-color: #2dd760;
  border-radius: 3px;
  color: black;
  padding: 10px;
  font-weight: bold;
  border: none;
  box-shadow: 7px 7px 19px -5px rgb(18, 28, 37);
  cursor: pointer;
  font-size: 12px;
  margin-left: 10px;
`;

const PlaylistHeader = styled.h2`
  color: white;
  margin: 0 10px 0 0;
`;

const EditIcon = styled.svg`
  cursor: pointer;
`;
