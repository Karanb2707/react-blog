import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').at(-1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div>
        <button onClick={() => navigate(-1)}>
          Back
        </button>
        <h1>
          Blogs on <span>#{category}</span>
        </h1>
      </div>

      <Blogs/>
      <Footer />
    </div>
  )
}

export default CategoryPage