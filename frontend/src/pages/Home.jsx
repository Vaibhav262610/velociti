import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>
                <div className='sm:bg-[url(https://plus.unsplash.com/premium_vector-1726060273770-d82a42b914ed?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-[url(https://plus.unsplash.com/premium_vector-1725641810176-2c543b8ee480?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-bottom h-screen w-full pt-8 flex flex-col justify-between'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' className='ml-8 sm:w-24 w-16 ' />
                    <div className='bg-white pb-7 py-4 px-4 '>
                        <h2 className='text-3xl font-black '>Continue With Velociti</h2>
                        <Link to={"/login"} className='flex  items-center justify-center bg-black text-white py-3 rounded mt-5 w-full'>Continue</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home