// import React from 'react'
import { BiCurrentLocation } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiPinDistanceFill } from "react-icons/ri";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const ConfirmedRide = (props) => {
    // const { request, setRequest } = useContext(UserDataContext)
    const { selectedRide } = useContext(UserDataContext);
    const updatedRideRequest = true
    const { selectedLocation } = useContext(UserDataContext);

    const token = localStorage.getItem("token")

    useEffect(() => {
        axios
            .get("http://localhost:4000/users/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    // setRideRequest(response.data.rideRequest);
                    // setRideRequest(response.data.rideRequest)
                    console.log("User Data:", response.data.rideRequest);
                }
            })
            .catch((err) => {
                console.error("Error fetching user data:", err.response || err.message);
            });
    }); // Empty array ensures this runs only on mount


    const requestHandler = (e) => {
        e.preventDefault();
        axios
            .put(
                "http://localhost:4000/users/update",
                { updatedRideRequest },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token for authorization
                    },
                }
            )
            .then(result => {
                console.log("User updated successfully:", result.data);
            })
            .catch(err => {
                console.error("Error updating user:", err);
            });
    };
    if (!selectedRide) {
        return <div>No location selected</div>; // Show message if no location is selected
    }

    if (!selectedLocation) {
        return <div>No location selected</div>; // Show message if no location is selected
    }

    return (
        <>
            <div>
                <h1 className='font-bold text-2xl '>Confirm your Ride</h1>
                <div className='w-full flex justify-center items-center'>
                    <img src={selectedRide.img} className='h-40' alt="" />
                </div>
                <div>
                    <div className='flex items-center p-3 border-b-gray-200 border-b-2  gap-4'>
                        <BiCurrentLocation className='text-2xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                {selectedLocation.current_location}
                            </h2>
                            <h3 className='text-sm font-medium'>
                                Current location
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center p-3 border-b-gray-200 border-b-2  gap-4'>
                        <IoLocation className='text-2xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                {selectedLocation.destination}
                            </h2>
                            <h3 className='text-sm font-medium'>
                                Destination
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center p-3  gap-4'>
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
                    <button onClick={(e) => {
                        // e.preventDefault();
                        props.setVehicleFound(true)
                        props.setConfirmedRide(false)
                        requestHandler(e)
                    }} className='mt-4 bg-green-400 w-full py-3 active:bg-black active:text-white duration-200 font-semibold rounded-md '>Confirm</button>
                </div>
            </div>
        </>
    )
}

export default ConfirmedRide