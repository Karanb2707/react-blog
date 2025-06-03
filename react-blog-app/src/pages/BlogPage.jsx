import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Card from '../components/Card';
import { baseUrl } from '../context/baseurl';

const BlogPage = () => {

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlog] = useState([]);
  const { setLoading } = useContext(AppContext);

  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.posts);
      console.log(blog);
      // setRelatedBlog(data.relatedBlogs);
    }
    catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div>
      <Header />

      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <Card post={blog}/>

      <h1>Related Blogs</h1>

      {/* {
        relatedBlogs.map((relatedBlog) => {
          return <Card post={relatedBlog} key={relatedBlog.id}/>
        })
      } */}
    </div>
  )
}

export default BlogPage