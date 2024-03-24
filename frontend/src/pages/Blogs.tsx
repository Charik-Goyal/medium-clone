import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogsSkeleton } from "../components/BlogsSkeleton"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs()
    if (loading) {
        return (
            <div className="flex flex-col h-screen">
                <AppBar />
                <div className="flex justify-center mt-2 pt-20">
                    <div className="flex flex-col">
                        <BlogsSkeleton />
                        <BlogsSkeleton />
                        <BlogsSkeleton />
                        <BlogsSkeleton />
                        <BlogsSkeleton />
                        <BlogsSkeleton />
                        <BlogsSkeleton />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <AppBar />
            <div className="flex justify-center pt-20">
                <div>
                    {
                        blogs.map((blog) => (
                            <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedDate={"16th March 2024"} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}