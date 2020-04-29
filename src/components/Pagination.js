import React from 'react'

const pageStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  listStyle: 'none',
  borderRadius: '0.25rem'
}


const Paginations = ({ totalPages, currentPage, setCurrentPage }) => {

  const pagesList = () => {
    const pageLink = []
    const startPage = Math.min(currentPage, totalPages - 4)
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageLink.push(<li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}><button className="page-link" onClick={() => {
          changePage(i)
        }}>{i}</button></li>)
      }
      return pageLink
    } else {
      for (let i = startPage; i < startPage + 3; i++) {
        pageLink.push(<li key={i} className={`page-item ${currentPage === i ? `active` : ``}`} onClick={() => changePage(i)}><button className="page-link">{i}</button></li>)
      }
      if (startPage === totalPages - 4) {
        for (let i = totalPages - 1; i <= totalPages; i++) {
          pageLink.push(<li key={i} className={`page-item ${currentPage === i ? `active` : ``}`} onClick={() => changePage(i)}><button className="page-link">{i}</button></li>)
        }
        return pageLink
      } else {
        pageLink.push(<li key='...' className="page-item disabled" ><button className="page-link">...</button></li>)
        for (let i = totalPages - 1; i <= totalPages; i++) {
          pageLink.push(<li key={i} className={`page-item ${currentPage === i ? `active` : ``}`} onClick={() => changePage(i)}><button className="page-link">{i}</button></li>)
        }
        return pageLink
      }
    }
  }

  const changePage = (page) => {
    if (page <= 0) return
    return setCurrentPage(page)
  }

  return (
    <ul style={pageStyle} >
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => changePage(p => p - 1)}>Previous</button>
      </li>
      {pagesList()}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => changePage(p => p + 1)}>Next</button>
      </li>
    </ul>
  )
}

export default Paginations