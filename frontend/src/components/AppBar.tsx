import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return (
        <div className="border-b shadow flex justify-between items-center py-4 px-10 fixed w-full bg-white z-10">
            <div className="max-w-lg text-3xl font-bold">
            <Link to="/blogs" className="cursor-pointer">Medium</Link>
            </div>
            <div>
                <Avatar size="big" name={"Charik"}/>
            </div>
        </div>
    )
}