import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').at(-1).replaceAll('%20', ' ');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className='flex items-center mt-4 gap-6 lg:ml-[330px] lg:justify-normal justify-center'>
        <button onClick={() => navigate(-1)} className='py-1 px-4 ring ring-red-950 rounded-xl bg-red-600 text-white cursor-pointer'>
          Back
        </button>
        <h1 className='text-2xl'>
          Blogs Related with Category: <span className='text-blue-500 font-semibold'>{category}</span>
        </h1>
      </div>

      <main className="flex-1">
        <Blogs />
      </main>
      <Footer />
    </div>
  )
}

export default CategoryPage