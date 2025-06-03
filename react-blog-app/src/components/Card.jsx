import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ post }) => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col shadow rounded-2xl shadow-slate-500 p-2 gap-2'>
      <p className='font-semibold text-[18px]'>{post.title}</p>
      <p>
        By <span className='text-red-700 font-semibold'>{post.author}</span> on <span className='text-purple-900 font-semibold cursor-pointer' onClick={() => navigate(`/category/${post.category}`)}>{post.category}</span>
      </p>
      <p className='text-sm text-slate-600'>
        Posted on {post.date}
      </p>
      <p className='text-[15px]'>{post.content}</p>
      <div>
        {post.tags.map((tag) => {
          return <span key={tag.index} className='text-blue-800 cursor-pointer hover:underline' onClick={() => navigate(`/tags/${tag}`)}>#{tag} </span>
        })}
      </div>
    </div>
  )
}

export default Card