import { AppBar } from "./AppBar"

interface Blog {
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string
    }
}

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 w-full px-10 pt-20 max-w-screen-2xl">
                    <div className="col-span-8 pt-10">
                        <div className="text-3xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-1">
                            Posted on 2nd Dec
                        </div>
                        <div className="pt-3">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4 pt-10 px-1">
                        <div className="flex items-center font-semibold text-xl">
                            <div className="pr-2 flex">
                            <Avatar name={blog.author.name || "Anonymous"}/>
                            </div>
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div>
                            Random catch phrase for the user to know about the ability of the user
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function Avatar({ name, size="small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center ${size === "big" ? "w-10 h-10" : "w-6 h-6"} overflow-hidden bg-gray-600 rounded-full`}>
        <span className={`font-small ${size==="small"? "text-xs" : "text-md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>
}