import { SignupInput } from "@charik/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signin" ? "signin" : "signup"}`, postInputs)
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate('/blogs');
        } catch(e){
            //alert the user here
            alert(`Something went wrong ${e}`)
        }
        
    }
    return (
        <div className="flex justify-center items-center flex-col px-[200px] md:px-[140px] lg:px-[240px]">
            <div className="max-w-lg text-3xl font-bold">
                Create an Account
            </div>
            <div className="max-w-lg text-lg text-slate-400 mt-1">
                {type === "signin" ? "Doesn't have an account?" : "Already have an account?"}
                <Link className="underline pl-2" to={type === "signin" ? '/signup' : '/signin'}>
                    {type === "signin" ? "Signup" : "Signin"}
                </Link>
            </div>{
                type === "signup" ?
                    <LabeledInput label="Name" placeholder="Enter your name" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }} /> : null
            }
            <LabeledInput label="Email" placeholder="Enter your email" onChange={(e) => {
                setPostInputs(c => ({
                    ...c,
                    email: e.target.value
                }))
            }} />
            <LabeledInput type="password" label="Password" placeholder="Password" onChange={(e) => {
                setPostInputs(c => ({
                    ...c,
                    password: e.target.value
                }))
            }} />
            <div className="w-full mt-4">
                <button onClick={sendRequest} className="w-full bg-black text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-800 active:bg-gray-900">{type == "signup" ? "Sign up" : "Sign in"}</button>
            </div>
        </div>
    )
}

interface labelledInputType {
    label: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

function LabeledInput({ label, placeholder, onChange, type }: labelledInputType) {
    return (
        <div className="w-full my-2">
            <label className="text-black font-semibold mb-2">{label}</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-blue-500 w-full" type={type || "text"} placeholder={placeholder} onChange={onChange} required />
        </div>
    )
}