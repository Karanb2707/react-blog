import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Card from '../components/Card';

const BlogPage = () => {
  
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlog] = useState([]);
  const { setLoading } = useContext(AppContext);

  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split('/').at(-1);
  const baseUrl = 'https://codehelp-apis.vercel.app/api/';

  async function fetchRelatedBlogs() {
    setLoading(true);
    const url = `${baseUrl}get-blog?blogId=${blogId}`;
    console.log('Blog URL:', url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);

    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <button onClick={() => navigate(-1)}>Back</button>
      {
        blog && <Card post={blog} />
      }

      <h1>Related Blogs</h1>

      {
        relatedBlogs.map((relatedBlog) => (
          <Card post={relatedBlog} key={relatedBlog.id} />
        ))
      }
    </div>
  );
};

export default BlogPage;
