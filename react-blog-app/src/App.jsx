import { useContext, useEffect } from "react"
import { AppContext } from "./context/AppContext"
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom"
import Home from "./pages/Home";

function App() {

  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  useEffect(() => {
    const page = searchParams.get('page') ?? 1

    if (location.pathname.includes('tags')) {
      // show tag page
      const tag = location.pathname.split('/').at(-1).replaceAll('-', '');
      fetchBlogPosts(Number(page), tag)
    }
    else if (location.pathname.includes('category')) {
      // show category page
      const category = location.pathname.split('/').at(-1).replaceAll('-', '');
      fetchBlogPosts(Number(page), category);
    }
    else {
      fetchBlogPosts(Number(page));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return (

    // 50 min
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:blogId" element={<BlogPage />} />
      <Route path="/tag/:tag" element={<TagPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  )
}

export default App
