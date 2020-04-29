import { useEffect, useState } from 'react'
import axios from 'axios'

function useMovieApi(url) {
  const [movies, setMovies] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  // const [mode, setMode] = useState('HOT')
  // console.log('yyoyo', movies)
  useEffect(() => {
    if (url === '') return
    else {

      const fetchingData = async () => {
        await axios.get(url)
          .then(res => {
            // console.log('modal', res.data)
            setMovies(res.data.results || res.data)
            setTotalPages(res.data.total_pages)
            setTotalResults(res.data.total_results)
          })
      }
      fetchingData()
    }
  }, [url, currentPage])

  return { movies, totalPages, totalResults, currentPage, setCurrentPage }

}

export default useMovieApi