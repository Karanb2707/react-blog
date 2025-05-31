import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {

  const { page, totalPages, handlePageChange } = useContext(AppContext)

  return (
    <div className='flex items-center justify-evenly  p-2 sticky bottom-0 
        inset-shadow-xs inset-shadow-slate-400 bg-amber-50'>
      <div className='flex gap-2'>
        {
          page > 1 &&
          (
            <button onClick={() => handlePageChange(page - 1)}
              className='bg-red-600 text-white text-[13px] px-3 py-1 font-semibold rounded-md cursor-pointer'>
              Previous
            </button>
          )
        }
        {
          page < totalPages &&
          (
            <button onClick={() => handlePageChange(page + 1)}
              className='bg-red-600 text-white text-[13px] px-3 py-1 font-semibold rounded-md cursor-pointer'>
              Next
            </button>
          )
        }
      </div>

      <p className='text-sm font-semibold'>
        Page {page} of {totalPages}
      </p>
    </div>
  )
}

export default Footer