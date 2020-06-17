import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SongPlayer from './SongPlayer';
import play from '../../images/play.png';
import pause from '../../images/pause.png';

const SongsList = ({ songs, removeFromPlaylist, view, token }) => {
  const [open, setOpen] = useState(false);
  const [song, setSong] = useState('fetching');
  const [albumInfo, setAlbumInfo] = useState('fetching');
  const [nowPlaying, setNowPlaying] = useState('');
  const [playPause, setPlayPause] = useState(false);

  const msToMinAndSec = ms => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  const setModal = song => {
    setOpen(true);
    fetch(`https://api.spotify.com/v1/albums/${song.track.album.id}/tracks`, {
      headers: { Authorization: 'Bearer ' + token }
    })
      .then(res => res.json())
      .then(data => {
        setSong(song);
        setAlbumInfo(data);
      });
  };

  const setPlaying = song => {
    setPlayPause(true);
    setNowPlaying(song);
  };

  const setPause = () => {
    setPlayPause(false);
  };

  const showPausePlay = song => {
    if (
      !nowPlaying ||
      nowPlaying.track.preview_url !== song.track.preview_url
    ) {
      return <PlayPause onClick={() => setPlaying(song)} src={play} />;
    } else if (nowPlaying.track.preview_url === song.track.preview_url) {
      return <PlayPause onClick={() => setPause()} src={pause} />;
    }
  };

  return (
    <>
      <SongPlayer song={nowPlaying} playPause={playPause} />
      {open && song !== 'fetching' && (
        <SongInfoContainer>
          <ModalExit onClick={() => setOpen(false)}>X</ModalExit>
          <AlbumInfo>
            <AlbumImg>
              <img src={song.track.album.images[0].url}></img>
            </AlbumImg>
            <AlbumArtistInfo>
              <AlbumName>{song.track.album.name}</AlbumName>
              <AlbumArtist>{song.track.album.artists[0].name}</AlbumArtist>
              <AlbumDate>{song.track.album.release_date}</AlbumDate>
            </AlbumArtistInfo>
          </AlbumInfo>
          <AlbumSongs>
            {albumInfo !== 'fetching'
              ? albumInfo.items.map((song, i) => (
                  <Songs>
                    <SongNum>{song.track_number}.</SongNum>
                    <Song>{song.name} </Song>
                    <SongDur>{msToMinAndSec(song.duration_ms)}</SongDur>
                  </Songs>
                ))
              : ''}
          </AlbumSongs>
        </SongInfoContainer>
      )}
      <SongContainer style={{ borderTop: 'none', borderBottom: 'none' }}>
        <SongName
          style={{
            color: 'rgba(225,225,225,.6',
            fontSize: '1rem'
          }}
        >
          Title
        </SongName>
        <SongArtist
          style={{
            color: 'rgba(225,225,225,.6',
            fontSize: '1rem'
          }}
        >
          Artist
        </SongArtist>
        <SongAlbum
          style={{
            color: 'rgba(225,225,225,.6',
            fontSize: '1rem'
          }}
        >
          Album
        </SongAlbum>
        <SongDuration
          style={{
            color: 'rgba(225,225,225,.6',
            fontSize: '1rem'
          }}
        >
          Time
        </SongDuration>
        {view === 'playlistSettings' && (
          <SongDelete
            style={{
              color: 'rgba(225,225,225,.6',
              fontSize: '1rem'
            }}
          />
        )}
        <SongPreview
          style={{
            color: 'rgba(225,225,225,.6',
            fontSize: '1rem'
          }}
        />
      </SongContainer>
      {songs.map((song, id) => {
        return (
          <Container key={'song-' + id}>
            <SongContainer key={'song-' + id} onClick={() => setModal(song)}>
              <SongName key={'song-' + id}>{song.track.name}</SongName>
              <SongArtist>{song.track.album.artists[0].name}</SongArtist>
              <SongAlbum>{song.track.album.name}</SongAlbum>
              <SongDuration>
                {msToMinAndSec(song.track.duration_ms)}
              </SongDuration>
            </SongContainer>
            {view === 'playlistSettings' && (
              <SongDelete onClick={() => removeFromPlaylist(song.track.id)}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  l="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.69048 6.66667L9.69048 15.5714M12.9269 6.70331L12.1174 15.6081M6.45072 6.63002L7.26024 15.5348M2.80952 4.2381H16.5714L14.8512 18H4.52976L2.80952 4.2381ZM2 2.61905H17.381V4.2381H2V2.61905ZM7.66667 1H11.7143V2.61905H7.66667V1Z"
                    stroke="#FDFAFF"
                    strokeWidth="0.809524"
                  />
                </svg>
              </SongDelete>
            )}
            <SongPreview>
              {song.track.preview_url && showPausePlay(song)}
            </SongPreview>
          </Container>
        );
      })}
    </>
  );
};

export default SongsList;

const PlayPause = styled.img`
  height: 22px;
  width: 22px;
  cursor: pointer;
  filter: brightness(0) invert(1);
  margin-left: 7px;
`;

const SongInfoContainer = styled.div`
  height: fit-content;
  width: 450px;
  position: absolute;
  background: #10171d;
  top: 15vh;
  left: 30%;
  border-radius: 10px;
  position: fixed;
`;

const ModalExit = styled.span`
  color: white;
  font-weight: bold;
  font-size: 18px;
  position: relative;
  top: 10px;
  left: 94%;
  cursor: pointer;
`;

const AlbumInfo = styled.div`
  display: flex;
  padding: 20px 25px;
`;

const AlbumName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const AlbumArtist = styled.span`
  font-size: 16px;
`;

const AlbumDate = styled.span`
  font-size: 14px;
  color: grey;
  margin-top: 15px;
`;

const AlbumImg = styled.div`
  img {
    height: 100px;
    width: auto;
  }
`;

const AlbumArtistInfo = styled.div`
  margin-left: 15px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const AlbumSongs = styled.div`
  padding: 0 20px 20px 30px;
`;

const Songs = styled.div`
  margin: 5px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SongNum = styled.span`
  color: white;
  width: 7%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const Song = styled.span`
  color: white;
  font-weight: bold;
  width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const SongDur = styled.span`
  color: grey;
  font-size: 12px;
  width: 10%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
`;

const SongContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;

  ${'' /* &:hover {
    background-color: rgba(15, 22, 27, 0.5);
  } */}

  &:first-child:hover {
    background-color: rgba(15, 22, 27, 0.5);
  }
`;

const SongName = styled.div`
  color: white;
  width: 25%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const SongArtist = styled.div`
  color: white;
  width: 25%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const SongAlbum = styled.div`
  color: white;
  width: 25%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const SongDuration = styled.div`
  color: white;
  width: 10%;
  text-align: right;
`;

const SongDelete = styled.div`
  color: white;
  width: 5%;
  text-align: right;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SongPreview = styled.div`
  color: white;
  width: 5%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
