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
                        <div className="pb-4 font-semibold text-slate-600">
                            Author
                        </div>
                        <div className="pr-2 flex flex-row">
                            <div className="pt-4 px-2">
                            <Avatar name={blog.author.name || "Anonymous"} />
                            </div>
                            <div className="flex flex-col font-semibold text-xl">
                                {blog.author.name || "Anonymous"}
                                <div className="text-slate-500 font-light text-base">
                            Random catch phrase for the user to know about the ability of the user
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center ${size === "big" ? "w-10 h-10" : "w-7 h-7"} overflow-hidden bg-gray-600 rounded-full`}>
        <span className={`font-small ${size === "small" ? "text-xs" : "text-md"} text-gray-600 dark:text-gray-300`}>{(name[0]).toUpperCase()}</span>
    </div>
}