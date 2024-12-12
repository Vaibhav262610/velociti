import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import CaptainLogo from '../components/CaptainLogo'

const CaptainRegister = () => {


    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [color, setColor] = useState("")
    const [plate, setPlate] = useState("")
    const [capacity, setCapacity] = useState("")
    const [vehicleType, setVehicleType] = useState("")
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(username, email, password);

        const captainData = {
            username,
            email,
            password,
            vehicle: {
                color: color,
                plate: plate,
                capacity: capacity,
                vehicleType: vehicleType,

            }
        }

        const response = await axios.post(`http://localhost:4000/captains/register`, captainData)

        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem("token", data.token)
            navigate("/captain-home")
        }


        setEmail("")
        setPassword("")
        setUsername("")
        setColor("")
        setPlate("")
        setCapacity("")
        setVehicleType("")
    }


    return (
        <>
            <div className='flex bg-[url(https://plus.unsplash.com/premium_vector-1726060273712-1f98b2ebdaff?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover justify-center items-center w-full h-screen'>
                <div className='p-7 w-full bg-gray-100 sm:rounded-lg sm:p-20 sm:w-4/12 flex flex-col sm:h-auto h-screen sm:gap-20 justify-between '>
                    <div>
                        <Link to={'/'}>
                            <CaptainLogo />
                        </Link>
                        <form onSubmit={submitHandler}>
                            <h3 className='text-md font-medium mb-2'>What&apos;s our captain&apos;s name</h3>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="text" required placeholder='luffy' />
                            <h3 className='text-md font-medium mb-2'>What&apos;s our captain&apos;s email</h3>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="email" required placeholder='email@example.com' />
                            <h3 className='text-md font-medium mb-2'>Enter password</h3>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-sm outline-none' type="password" required placeholder='password' />
                            <h3 className='text-md font-medium mb-2'>Vehicle Information</h3>
                            <div className='flex gap-2'>
                                <input value={color} onChange={(e) => setColor(e.target.value)} className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="text" required placeholder='Vehicle Color' />
                                <input value={plate} onChange={(e) => setPlate(e.target.value)} className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="text" required placeholder='Vehicle Plate' />
                            </div>
                            <div className='flex gap-2'>
                                <input value={capacity} onChange={(e) => setCapacity(e.target.value)} className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="number" required placeholder='Vehicle Capacity' />
                                <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none' type="password" required placeholder='Vehicle Type'>
                                    <option value="" disabled >Select Vehicle Type</option>
                                    <option value="car" >Car</option>
                                    <option value="motorcycle" >Motorcycle</option>
                                    <option value="auto" >Auto</option>
                                </select>
                            </div>
                            <button className='bg-black text-white font-medium mb-3 rounded px-4 py-2  w-full text-md ' >Create captain account</button>
                            <p className='text-center text-sm'>Already have a account ? <Link to="/login" className='text-blue-600'>Login here</Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CaptainRegister