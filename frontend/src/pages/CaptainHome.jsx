// import React from 'react'

import { Link } from "react-router-dom"
import { MdLogout } from "react-icons/md";
import CaptainLogo from "../components/CaptainLogo";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {


    const [popupPanel, setPopupPanel] = useState(true)
    const [confirmPopupPanel, setConfirmPopupPanel] = useState(false)
    const popupPanelRef = useRef()
    const confirmPopupPanelRef = useRef()

    useGSAP(() => {
        if (popupPanel) {
            gsap.to(popupPanelRef.current, {
                transform: "translateY(0)"
            })
        }
        else {
            gsap.to(popupPanelRef.current, {
                transform: "translateY(100vh)"
            })
        }
    }, [popupPanel])
    useGSAP(() => {
        if (confirmPopupPanel) {
            gsap.to(confirmPopupPanelRef.current, {
                transform: "translateY(0)"
            })
        }
        else {
            gsap.to(confirmPopupPanelRef.current, {
                transform: "translateY(100vh)"
            })
        }
    }, [confirmPopupPanel])


    return (
        <div>
            <div className="h-screen w-full relative overflow-hidden">
                <div>
                    {/* <Link to='/'> */}
                    <div className="absolute top-4 left-4">
                        <CaptainLogo />
                    </div>
                    {/* </Link> */}
                    <Link to="/captain-login">
                        <div className="fixed bg-white p-2 rounded-full right-2 top-2">
                            <MdLogout className="text-2xl" />
                        </div>
                    </Link>
                    {/* <h1 className='font-bold text-2xl '>Confirm your Ride</h1> */}
                    <div className='w-full flex justify-center items-center'>
                        <img src="https://newsroomadmin.uberinternal.com/wp-content/uploads/2021/06/Product-Selector-MVP.png" className='h-screen w-screen object-cover' alt="" />
                    </div>
                    <div className="bg-white absolute bottom-0 p-5 h-[35vh] w-screen">
                        <div className="flex justify-between items-center h-full">
                            <div className="flex gap-2 items-center">
                                <img src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif" className="h-16 rounded-full" alt="" />
                                <h1 className="text-lg font-semibold">Captain Patel</h1>
                            </div>
                            <div className="flex flex-col items-end justify-center ">
                                <h1 className="font-bold text-2xl">$295.21</h1>
                                <h1 className="text-gray-400 font-medium">Earned</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={popupPanelRef} className='fixed z-10 bg-white w-full translate-y-full bottom-0 p-3'>
                    <RidePopUp setPopupPanel={setPopupPanel} setConfirmPopupPanel={setConfirmPopupPanel} />
                </div>
                <div ref={confirmPopupPanelRef} className='fixed z-10 bg-white w-full translate-y-full bottom-0 px-3 '>
                    <ConfirmRidePopUp setConfirmPopupPanel={setConfirmPopupPanel} setPopupPanel={setPopupPanel} />
                </div>
            </div>
        </div>
    )
}

export default CaptainHome