import { useContext, useEffect } from "react"
import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { AppContext } from "./context/AppContext"

function App() {

  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

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

export default App
