import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserRegister = () => {


    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [userData, setUserData] = useState({})

    const [user, setUser] = React.useContext(UserDataContext)


    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(username, email, password);

        const newUser = {
            username,
            email,
            password
        }

        const response = await axios.post(`http://localhost:4000/users/register`, newUser)


        if (response.status === 201) {
            const data = response.data
            localStorage.setItem("token", data.token)

            setUser(data.user)

            navigate("/home")
        }


        setEmail("")
        setPassword("")
        setUsername("")
    }


    return (
        <>
            <div className='flex bg-[url(https://plus.unsplash.com/premium_vector-1726060273712-1f98b2ebdaff?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover justify-center items-center w-full h-screen'>
                <div className='p-7 w-full bg-gray-100 sm:rounded-lg sm:p-20 sm:w-4/12 flex flex-col sm:h-auto h-screen sm:gap-20 justify-between '>
                    <div>
                        <Link to={'/'}>
                            <h1 className='mb-14 flex sm:w-24 w-16 font-black  text-2xl'>VELO  <span className='text-red-500'> CITI</span></h1>
                        </Link>
                        <form onSubmit={submitHandler}>
                            <h3 className='text-md font-medium mb-2'>What&apos;s your name</h3>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="text" required placeholder='luffy' />
                            <h3 className='text-md font-medium mb-2'>What&apos;s your email</h3>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="email" required placeholder='email@example.com' />
                            <h3 className='text-md font-medium mb-2'>Enter password</h3>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none' type="password" required placeholder='password' />
                            <button className='bg-black text-white font-medium mb-3 rounded px-4 py-2  w-full text-md ' >Create account</button>
                            <p className='text-center text-sm'>Already have a account ? <Link to="/login" className='text-blue-600'>Login here</Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserRegister