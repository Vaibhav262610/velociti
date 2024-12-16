import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import CaptainLogo from "../components/CaptainLogo";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Map from "../components/Map";
import { CaptainDataContext } from "../context/CaptainContext"
import { UserDataContext } from "../context/UserContext";

const CaptainHome = () => {

    const { captain } = useContext(CaptainDataContext)
    const request = localStorage.getItem('request')
    console.log(request);

    var newRequest = false
    if (request) {
        newRequest = true
        console.log("Request is true", newRequest);
    } else {
        console.log("Request is false");
    }

    const [popupPanel, setPopupPanel] = useState(newRequest);
    const [confirmPopupPanel, setConfirmPopupPanel] = useState(false);
    const popupPanelRef = useRef();
    const confirmPopupPanelRef = useRef();

    useGSAP(() => {
        if (popupPanel) {
            gsap.to(popupPanelRef.current, {
                transform: "translateY(0)",
            });
        } else {
            gsap.to(popupPanelRef.current, {
                transform: "translateY(100vh)",
            });
        }
    }, [popupPanel]);

    useGSAP(() => {
        if (confirmPopupPanel) {
            gsap.to(confirmPopupPanelRef.current, {
                transform: "translateY(0)",
            });
        } else {
            gsap.to(confirmPopupPanelRef.current, {
                transform: "translateY(100vh)",
            });
        }
    }, [confirmPopupPanel]);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Logo and Logout */}
            <div className="absolute top-4 left-4 z-20">
                <CaptainLogo />
            </div>
            <Link to="/captain-login">
                <div className="fixed bg-white p-2 rounded-full right-2 top-2 z-20">
                    <MdLogout className="text-2xl" />
                </div>
            </Link>

            {/* Map */}
            <div className="absolute inset-0 z-10">
                <Map />
            </div>
            <div className="bg-white absolute bottom-0 p-5 h-[35vh] w-screen z-20">
                <div className="flex justify-between items-center h-full">
                    <div className="flex gap-2 items-center">
                        <img
                            src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif"
                            className="h-16 rounded-full"
                            alt=""
                        />
                        <h1 className="text-lg font-semibold capitalize">{captain.username}</h1>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="font-bold text-2xl">$295.21</h1>
                        <h1 className="text-gray-400 font-medium">Earned</h1>
                    </div>
                </div>
            </div>

            <div
                ref={popupPanelRef}
                className="fixed z-30 bg-white w-full translate-y-full bottom-0 p-3"
            >
                <RidePopUp
                    setPopupPanel={setPopupPanel}
                    setConfirmPopupPanel={setConfirmPopupPanel}
                />
            </div>
            <div
                ref={confirmPopupPanelRef}
                className="fixed z-30 bg-white w-full translate-y-full bottom-0 px-3"
            >
                <ConfirmRidePopUp
                    setConfirmPopupPanel={setConfirmPopupPanel}
                    setPopupPanel={setPopupPanel}
                />
            </div>
        </div>
    );
};

export default CaptainHome;
