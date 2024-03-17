import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs()
    if (loading) {
        return (
            <div>
                <AppBar />
                <div className="flex justify-center flex-col pt-20">
                    <div className="max-w-xl">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div key={index} className="animate-pulse mb-4">
                                {/* Skeleton for BlogCard */}
                                <div className="bg-gray-200 rounded-lg w-screen max-w-screen-lg">
                                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                </div>
                            </div>
                        ))}
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