import { useEffect, useState } from 'react'
import axios from 'axios'

function useYoutubeApi(searchTerm) {
  const [trailers, setTrailers] = useState([])
  const [selectedTrailer, setSelectedTrailer] = useState(null)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [totalPages, setTotalPages] = useState(0)
  // const [totalResults, setTotalResults] = useState(0)
  // https://www.googleapis.com/youtube/v3
  // const [mode, setMode] = useState('HOT')
  // console.log('yyoyo', movies)
  useEffect(() => {
    console.log('serTerm::', searchTerm, searchTerm.length)
    if (searchTerm === '') return
    else {
      const fetchingData = async () => {
        await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyBU9cE_lLvxv0XzzMXtZLEgpZ6Q-MELvGk',
            q: searchTerm
          }
        })
          .then(res => {
            // console.log('youtube', res.data.items)
            // console.log('selected', res.data.items[0])

            setTrailers(res.data.items)
            setSelectedTrailer(res.data.items[0])
            // setTrailers(res???????)
          })
      }
      fetchingData()
    }

  }, [searchTerm])

  return { trailers, selectedTrailer, setSelectedTrailer }

}

export default useYoutubeApi