import { useEffect, useState } from 'react'
import axios from 'axios'

function useMovieApi(url) {
  const [movies, setMovies] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  useEffect(() => {
    if (url === '') return
    else {
      const fetchingData = async () => {
        await axios.get(url)
          .then(res => {
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