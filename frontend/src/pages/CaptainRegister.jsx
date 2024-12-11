import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainRegister = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(username, email, password);

        setUserData({
            username,
            email,
            password
        })


        setEmail("")
        setPassword("")
        setUsername("")
    }


    return (
        <>
            <div className='flex bg-[url(https://plus.unsplash.com/premium_vector-1726060273712-1f98b2ebdaff?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover justify-center items-center w-full h-screen'>
                <div className='p-7 w-full bg-green-100 sm:bg-gray-100 sm:rounded-lg sm:p-20 sm:w-4/12 flex flex-col sm:h-auto h-screen sm:gap-20 justify-between '>
                    <div>
                        <Link to={'/'}>
                            <h1 className='mb-14 flex sm:w-24 w-16 font-black text-green-500 text-2xl'>VELO  <span className='text-black'> CITI</span></h1>
                        </Link>
                        <form onSubmit={submitHandler}>
                            <h3 className='text-md font-medium mb-2'>What&apos;s our captain&apos;s name</h3>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="text" required placeholder='luffy' />
                            <h3 className='text-md font-medium mb-2'>What&apos;s our captain&apos;s email</h3>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="email" required placeholder='email@example.com' />
                            <h3 className='text-md font-medium mb-2'>Enter password</h3>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none' type="password" required placeholder='password' />
                            <button className='bg-black text-white font-medium mb-3 rounded px-4 py-2  w-full text-md ' >Register</button>
                            <p className='text-center text-sm'>Already have a account ? <Link to="/login" className='text-blue-600'>Login here</Link></p>
                        </form>
                    </div>
                    <div>
                        <Link to={"/register"} className='bg-green-500 flex justify-center items-center text-white font-medium mb-7 rounded px-4 py-2  w-full text-md '>Register as a User</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaptainRegister