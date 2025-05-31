import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

  // setp 3: Consume Context  
  const { loading, posts } = useContext(AppContext);

  return (
    <div className='flex flex-col'>
      {
        loading ?
          (<Spinner />) :

          (
            posts.length === 0 ?
              (<div className="fixed inset-0 grid place-items-center">
                <div>No Data found</div>
              </div>
              ) :
              (posts.map((post) => (
                <div key={post.id}>
                  <p>{post.title}</p>
                  <p>
                    By <span>{post.author}</span> on <span>{post.category}</span>
                  </p>
                  <p>
                    Posted on {post.date}
                  </p>
                  <p>{post.content}</p>
                  <div>
                    {post.tags.map((tag) => {
                      return <span key={tag.index}>#{tag}</span>
                    })}
                  </div>
                </div>
              )))
          )
      }
    </div>
  )
}

export default Blogs