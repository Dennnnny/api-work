import React from 'react'
import styled from 'styled-components'

const VideoDetail = styled.div`
  margin: 50px 15px;
  width: 65%
`

const Video = styled.iframe`
  width: 100%;
  height: 350px
`

const videoContentStyle = {
  width: '100%',
}

const videoPlaylistStyle = {
  width: '35%',
  height: '550px',
  overflowY: 'auto',
  overflowX: 'none',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '50px',
}

const VideoPlaylist = styled.div`
  width: 35%;
  height: 550px;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

const videoCardStyle = {
  border: 'none',
  background: 'none',
  outline: 'none',
  borderBottom: '1px solid #f9f9f9',
  marginBottom: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const VideoCard = styled.button`
  border: none;
  background: none;
  outline: none;
  border-bottom: 1px solid #f9f9f9;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start

`

const VideoImg = styled.img`
  width:100%;
`

const ModalTrailer = ({ trailers, selectedTrailer, setSelectedTrailer }) => {

  return (
    <>
      <VideoDetail>
        {selectedTrailer !== null &&
          <div >
            <Video src={`https://www.youtube.com/embed/${selectedTrailer.id.videoId}`} />
            <div>
              <h4>{selectedTrailer.snippet.title}</h4>
              <p>頻道 : {selectedTrailer.snippet.channelTitle}</p>
              <p>發布日期: {selectedTrailer.snippet.publishedAt.slice(0, 10)}</p>
            </div>
          </div>
        }
      </VideoDetail>
      <VideoPlaylist>
        {trailers.map(trailer => <VideoCard key={trailer.etag} onClick={() => setSelectedTrailer(trailer)}>
          <VideoImg src={trailer.snippet.thumbnails.medium.url} />
          <p className="text-left">{trailer.snippet.title}</p></VideoCard>)}
      </VideoPlaylist>
    </>
  )
}

export default ModalTrailer