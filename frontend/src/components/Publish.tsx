import axios from "axios"
import { AppBar } from "./AppBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const postForm = async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content: description
        },{
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })
        if(response){
            console.log(response)
            navigate(`/blog/${response.data.id}`)
        }
    }
    return (
        <div>
            <AppBar />
            <div className="pt-24 flex justify-center flex-col">
                <div>
                    <textarea onChange={(e) => setTitle(e.target.value)} rows={1} className="focus:outline-none block mb-2 p-1 w-full text-sm text-gray-900 bg-white rounded-lg border-gray-300" placeholder="Title" required></textarea>
                </div>
                <div className="w-full mb-4 border border-gray-200 mt-2 rounded-lg bg-gray-50">
                    <div className="p-1 bg-white rounded-t-lg">
                        <textarea onChange={(e) => setDescription(e.target.value)} rows={8} className="focus:outline-none p-1 w-full resize max-h-fit px-0 text-sm text-slate-600 bg-white" placeholder="Write an article..." required />
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t">
                        <button onClick={postForm} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}