import React, { useContext } from 'react'
import { useLocation } from "react-router-dom"
import { AppContext } from '../context/AppContext'

const Footer = () => {

  const { page, totalPages, handlePageChange } = useContext(AppContext)
  const location = useLocation();
  let tag, category;

  if (location.pathname.includes('tags')) {
    tag = location.pathname.split('/').at(-1).replaceAll('-', '');
  }
  if (location.pathname.includes('category')) {
    category = location.pathname.split('/').at(-1).replaceAll('-', '');
  }

  return (
    <div className='flex items-center justify-evenly p-2 sticky bottom-0 bg-amber-200'>
      <div className='flex gap-2'>
        {
          page > 1 &&
          (
            <button onClick={() => handlePageChange(page - 1, tag, category)}
              className='bg-red-600 text-white text-[13px] px-3 py-1 font-semibold rounded-md cursor-pointer'>
              Previous
            </button>
          )
        }
        {
          page < totalPages &&
          (
            <button onClick={() => handlePageChange(page + 1, tag, category)}
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