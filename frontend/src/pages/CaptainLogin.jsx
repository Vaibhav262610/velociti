import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';  // Correct import
import axios from 'axios';
import CaptainLogo from '../components/CaptainLogo';

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    // Using useContext correctly
    // const [captain, setCaptain] = useContext(CaptainDataContext);  // Destructure the context value

    const { captain, setCaptain } = React.useContext(CaptainDataContext)

    // const context = useContext(CaptainDataContext);
    // console.log(context); // This should log something like [captain, setCaptain]
    const submitHandler = async (e) => {

        e.preventDefault();
        const captain = {
            email: email,
            password: pass,
        };


        const response = await axios.post('http://localhost:4000/captains/login', captain);

        if (response.status === 201) {
            // console.log(response.data);
            const data = response.data;
            localStorage.setItem('token', data.token);
            setCaptain(data.user);  // Update the context with the logged-in captain's data
            navigate('/captain-home');

            setEmail('');
            setPass('');
        };
    }

    return (
        <>
            <div className='flex bg-[url(https://plus.unsplash.com/premium_vector-1726237903434-f52e797fc3d8?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover justify-center items-center w-full h-screen'>
                <div className='p-7 w-full bg-gray-100 sm:rounded-lg sm:p-20 sm:w-4/12 flex flex-col sm:h-auto h-screen sm:gap-20 justify-between'>
                    <div>
                        <Link to='/'>
                            <CaptainLogo />
                        </Link>
                        <form onSubmit={submitHandler}>
                            <h3 className='text-md font-medium mb-2'>What&apos;s our captain&apos;s email</h3>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none'
                                type='email'
                                required
                                placeholder='email@example.com'
                            />
                            <h3 className='text-md font-medium mb-2'>Enter password</h3>
                            <input
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder:text-sm outline-none'
                                type='password'
                                required
                                placeholder='password'
                            />
                            <button className='bg-black text-white font-medium mb-3 rounded px-4 py-2 w-full text-md'>
                                Login
                            </button>
                            <p className='text-center text-sm'>
                                Have a vehicle?{' '}
                                <Link to='/captain-register' className='text-blue-600'>
                                    Register as Captain
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div>
                        <Link to='/login' className='bg-yellow-500 flex justify-center items-center text-white font-medium mb-7 rounded px-4 py-2 w-full text-md'>
                            Sign in as User
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaptainLogin;
