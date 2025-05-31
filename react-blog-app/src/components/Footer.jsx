import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {

  const { page, totalPages, handlePageChange } = useContext(AppContext)

  return (
    <div className=''>
      <div>
        {
          page > 1 &&
          (
            <button onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>
          )
        }
        {
          page < totalPages &&
          (
            <button onClick={() => handlePageChange(page + 1)}>
              Next
            </button>
          )
        }
      </div>

      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  )
}

export default Footer