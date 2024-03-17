import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog"

interface Blog {
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string
    }
}

export const Blog = () => {
    const {id} = useParams()
    const {loading, blog} = useBlog({id : id || ""})

    if(loading){
        return (
            <div>
                Loading....
            </div>
        )
    }
    if (!blog) {
        return null; // or handle the case where blog is undefined
    }
    return(
        <div>
            <FullBlog blog={blog}/>
        </div>
    )
}