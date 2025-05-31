import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {

  // setp 3: Consume Context  
  const { loading, posts } = useContext(AppContext);

  return (
    <div className='w-10/12 lg:w-7/12 flex flex-col mx-auto gap-4 my-4'>
      {
        loading ? <Spinner /> :
          posts.length === 0 ?
            (
              <div className="fixed inset-0 grid place-items-center">
                <div>No Data found</div>
              </div>
            ) :
            posts.map((post) => {
              return <Card post={post} key={post.id} />
            })
      }
    </div>
  )
}

export default Blogs