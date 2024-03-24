import { Circle } from "./BlogCard"

export const BlogsSkeleton = () => {
    return <div>
        <div className="border-b-2 border-slate-200 hover:bg-slate-100 active:bg-slate-200 p-4 w-screen max-w-screen-lg cursor-pointer">
            <div className="flex">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="font-extralight text-sm ml-2 flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="ml-2 font-light text-slate-400 text-sm flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>
            <div className="text-slate-400 text-sm font-thin pt-4">
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            </div>
        </div>
    </div>
}