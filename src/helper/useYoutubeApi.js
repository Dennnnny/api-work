import { useEffect, useState } from 'react'
import axios from 'axios'

function useYoutubeApi(searchTerm) {
  const [trailers, setTrailers] = useState([])
  const [selectedTrailer, setSelectedTrailer] = useState(null)
  useEffect(() => {
    if (searchTerm === '') return
    else {
      console.log(process.env.YOUTUBE_KEY)
      const fetchingData = async () => {
        await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: process.env.YOUTUBE_KEY,
            q: searchTerm
          }
        })
          .then(res => {
            setTrailers(res.data.items)
            setSelectedTrailer(res.data.items[0])
          })
          .catch(err => console.log(err))
      }
      fetchingData()
    }
  }, [searchTerm])
  return { trailers, selectedTrailer, setSelectedTrailer }
}

export default useYoutubeApi