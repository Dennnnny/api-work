import React from 'react'

const videoDetailStyle = {
  margin: '35px 15px',
  width: '65%'
}

const videoStyle = {
  width: '100%',
  height: '350px'
}

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
  marginTop: '35px',
}

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

const ModalTrailer = ({ trailers, selectedTrailer, setSelectedTrailer }) => {

  return (
    <>
      <div style={videoDetailStyle}>
        {selectedTrailer !== null &&
          <div >
            <iframe style={videoStyle} src={`https://www.youtube.com/embed/${selectedTrailer.id.videoId}`} />
            <div style={videoContentStyle}>
              <h4>{selectedTrailer.snippet.title}</h4>
              <p>頻道 : {selectedTrailer.snippet.channelTitle}</p>
              <p>發布日期: {selectedTrailer.snippet.publishedAt.slice(0, 10)}</p>
            </div>
          </div>
        }
      </div>
      <div style={videoPlaylistStyle}>
        {trailers.map(trailer => <button style={videoCardStyle} key={trailer.etag} onClick={() => setSelectedTrailer(trailer)}>
          <img width={trailer.snippet.thumbnails.medium.width} height={trailer.snippet.thumbnails.medium.height} src={trailer.snippet.thumbnails.medium.url} />
          <p className="text-left">{trailer.snippet.title}</p></button>)}
      </div>
    </>
  )
}

export default ModalTrailer