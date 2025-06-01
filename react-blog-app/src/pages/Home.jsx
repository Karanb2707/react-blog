import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Blogs />
      </main>
      <Footer />
    </div>
  )
}

export default Home