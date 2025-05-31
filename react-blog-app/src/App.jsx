import { useContext, useEffect } from "react"
import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { AppContext } from "./context/AppContext"

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
