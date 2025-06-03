import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'


const TagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className=''>
        <button onClick={() => navigate(-1)}>
          Back
        </button>
        <h1>
          Blogs Tagged <span>#{tag}</span>
        </h1>
      </div>

      <Blogs/>
      <Footer />
    </div>
  )
}

export default TagPage