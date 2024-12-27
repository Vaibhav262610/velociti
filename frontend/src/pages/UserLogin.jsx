import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import UserLogo from '../components/UserLogo'

const UserLogin = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const { setUser, setRideRequest } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: pass,
        }

        const response = await axios.post(`http://localhost:4000/users/login`, userData)

        if (response.status === 201) {
            const data = response.data
            setRideRequest(data.user.rideRequest);
            localStorage.setItem('token', data.token)
            // localStorage.setItem('_id', data._)
            setUser(data.user)
            navigate("/home")
        }
        console.log(email, pass);
        console.log(userData);

        setEmail("")
        setPass("")
    }
    return (
        <>
            <div className=' flex bg-[url(https://plus.unsplash.com/premium_vector-1726060273712-1f98b2ebdaff?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover justify-center items-center w-full h-screen'>
                <div className=' p-7 w-full  bg-gray-100 sm:rounded-lg sm:p-20 sm:w-4/12 flex flex-col sm:h-auto h-screen sm:gap-20 justify-between '>
                    <div>
                        <Link to={'/'}>
                            <UserLogo />
                        </Link>
                        <form onSubmit={(e) => submitHandler(e)}>
                            <h3 className='text-md font-medium mb-2'>What&apos;s your email</h3>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="email" required placeholder='email@example.com' />
                            <h3 className='text-md font-medium mb-2'>Enter password</h3>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="password" required placeholder='password' />
                            <button className='bg-black text-white font-medium mb-3 rounded px-4 py-2  w-full text-md ' >Login</button>
                            <p className='text-center text-sm'>New here? <Link to="/register" className='text-blue-600'>Create an account</Link></p>
                        </form>
                    </div>
                    <div>
                        <Link to={"/captain-login"} className='bg-green-500 flex justify-center items-center text-white font-medium mb-7 rounded px-4 py-2  w-full text-md '>Sign in as Captain</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin