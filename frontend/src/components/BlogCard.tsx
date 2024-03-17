import { Link } from "react-router-dom";

interface BlogCardProps {
    id:string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}
export const BlogCard = ({
    id, authorName, title, content, publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
        <div className="border-b-2 border-slate-200 hover:bg-slate-100 active:bg-slate-200 p-4 w-screen max-w-screen-lg cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="font-extralight text-sm ml-2 flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="ml-2 font-light text-slate-400 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-400 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>
        </div>
        </Link>
    )
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name, size="small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center ${size === "big" ? "w-10 h-10" : "w-6 h-6"} overflow-hidden bg-gray-600 rounded-full`}>
        <span className={`font-small ${size==="small"? "text-xs" : "text-md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>
}