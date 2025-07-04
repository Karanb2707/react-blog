import { createContext, useState } from "react";
import { baseUrl } from "./baseurl";

// step 1: Create Context
export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data creation
    async function fetchBlogPosts(page = 1, tag = null, category = null) {
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;
        
        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`
        }

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPosts(data.posts)
            setPages(data.page);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    }

    // page change handling
    function handlePageChange(page, tag = null, category = null) {
        setPages(page);
        fetchBlogPosts(page, tag, category);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPages,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    // step 2: Provide Context
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export { AppContextProvider };