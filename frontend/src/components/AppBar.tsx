import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return (
        <div className="border-b shadow flex justify-between items-center py-4 px-10 fixed w-full bg-white z-10">
            <div className="max-w-lg text-3xl font-bold">
            <Link to="/blogs" className="cursor-pointer">Medium</Link>
            </div>
            <div>
            <Link to={"/publish"}>
            <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Create</button>
            </Link>
                <Avatar size="big" name={"Charik"}/>
            </div>
        </div>
    )
}