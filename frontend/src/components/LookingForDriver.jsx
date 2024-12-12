import React from 'react'
import { BiCurrentLocation } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";

const LookingForDriver = () => {
    return (
        <>
            <div>
                <h1 className='font-bold text-2xl '>Looking for a Driver</h1>
                <div className='w-full flex justify-center items-center'>
                    <img src="https://www.svgrepo.com/download/408291/car-white.svg" className='h-40' alt="" />
                </div>
                <div>
                    <div className='flex items-center p-3 border-b-gray-200 border-b-2  gap-4'>
                        <BiCurrentLocation className='text-2xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                562/11-A
                            </h2>
                            <h3 className='text-sm font-medium'>
                                Tilhar,Shahjahanpur
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center p-3 border-b-gray-200 border-b-2  gap-4'>
                        <IoLocation className='text-2xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                562/11-A
                            </h2>
                            <h3 className='text-sm font-medium'>
                                Tilhar,Shahjahanpur
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
                </div>
            </div>
        </>
    )
}

export default LookingForDriver