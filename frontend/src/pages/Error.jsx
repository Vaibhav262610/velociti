// import React from 'react'

import { Link } from "react-router-dom"

const Error = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen w-full flex-col p-5 bg-black text-white">
                <h1>
                    ERROR PAGE NOT FOUND
                </h1>
                <Link to='/login'>
                    <button className="mt-4 bg-red-400 flex py-3 font-semibold rounded-md justify-center w-[10rem]">Back to login</button>
                </Link>
            </div>
        </>
    )
}

export default Error