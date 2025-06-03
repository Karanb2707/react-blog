import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'


const TagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1).replaceAll('%20', ' ');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className='flex items-center mt-4 gap-6 lg:ml-[300px] lg:justify-normal justify-center'>
        <button onClick={() => navigate(-1)} className='py-1 px-3 border rounded-xl text-sm bg-red-600 text-white'>
          Back
        </button>
        <h1 className='text-2xl'>
          Blogs Tagged <span className='text-blue-500 font-semibold'>#{tag}</span>
        </h1>
      </div>

      <Blogs/>
      <Footer />
    </div>
  )
}

export default TagPage