// import React from 'react'
import { BiCurrentLocation } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { RiPinDistanceFill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";

const LookingForDriver = () => {

    const { selectedLocation } = useContext(UserDataContext);
    if (!selectedLocation) {
        return <div>Loading or No Location Selected</div>; // Show a loading message or fallback content
    }

    const km = 27
    // console.log(selectedLocation.distance * km);



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
                                {selectedLocation.destination}
                            </h2>
                            <h3 className='text-sm font-medium'>
                                Destination
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center p-3 border-b-gray-200 border-b-2  gap-4'>
                        <RiPinDistanceFill className='text-2xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                {selectedLocation.distance} KM
                            </h2>
                            <h3 className='text-sm font-medium'>
                                distance
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center p-3  gap-4'>
                        <FaMoneyBillWave className='text-2xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                ₹{selectedLocation.distance * km}
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