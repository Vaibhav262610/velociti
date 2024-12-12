// import React from 'react'
// import { BiCurrentLocation } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";


const Riding = () => {
    return (
        <>
            <div className="h-screen w-full relative overflow-hidden">
                <div>
                    <Link to="/home">
                        <div className="fixed bg-white p-2 rounded-full right-2 top-2">
                            <GoHome className="text-2xl" />
                        </div>
                    </Link>
                    {/* <h1 className='font-bold text-2xl '>Confirm your Ride</h1> */}
                    <div className='w-full flex justify-center items-center'>
                        <img src="https://newsroomadmin.uberinternal.com/wp-content/uploads/2021/06/Product-Selector-MVP.png" className='h-screen w-screen object-cover' alt="" />
                    </div>
                    <div className="">
                        <div className='p-5 flex flex-col justify-end absolute bottom-0 w-full bg-white'>
                            <div className="flex justify-between">
                                <div>
                                    <img src="https://www.svgrepo.com/download/408291/car-white.svg" className='h-24' alt="" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <h1 className="font-medium">Vaibhav</h1>
                                    <h1 className="text-xl font-bold">UP27 AB 1234</h1>
                                    <h1 className="font-medium text-xs text-gray-400">BMW M5 Competition</h1>
                                </div>

                            </div>
                            <div className='flex items-center p-3 border-b-gray-200 border-b-2  gap-4'>
                                <IoLocation className='text-2xl' />
                                <div className='flex flex-col'>
                                    <h2 className='text-md font-medium'>
                                        562/11-A
                                    </h2>
                                    <h3 className='text-sm font-medium'>
                                        Tilhar, Shahjahanpur
                                    </h3>
                                </div>
                            </div>
                            <div className='flex items-center p-3  gap-4'>
                                <FaMoneyBillWave className='text-2xl' />
                                <div className='flex flex-col'>
                                    <h2 className='text-md font-medium'>
                                        $234.23
                                    </h2>
                                    <h3 className='text-sm font-medium'>
                                        Cash cash
                                    </h3>
                                </div>
                            </div>
                            <button className='mt-4 bg-green-400 w-full py-3 font-semibold rounded-md '>Make a Payment</button>
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}

export default Riding