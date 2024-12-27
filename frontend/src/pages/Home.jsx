import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { RiArrowDownSLine } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import Map from "../components/Map"; // Importing the Map component
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Home = () => {
    const [pickUp, setPickUp] = useState("");
    const [destination, setDestination] = useState("");
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [confirmedRide, setConfirmedRide] = useState(false);
    const [waiting] = useState(false);
    const [vehicleFound, setVehicleFound] = useState(false);


    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const waitingForDriverRef = useRef(null);
    const ConfirmedRidePanelRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        // Submission logic

        // const navigate = useNavigate()
    };


    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: "70vh",
            });
            gsap.to(panelCloseRef.current, {
                opacity: 1,
            });
        } else {
            gsap.to(panelRef.current, {
                height: "0vh",
            });
            gsap.to(panelCloseRef.current, {
                opacity: 0,
            });
        }
    }, [panelOpen]);

    useGSAP(() => {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: "translateY(0)",
            });
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: "translateY(100vh)",
            });
        }
    }, [vehiclePanel]);

    useGSAP(() => {
        if (confirmedRide) {
            gsap.to(ConfirmedRidePanelRef.current, {
                transform: "translateY(0)",
            });
        } else {
            gsap.to(ConfirmedRidePanelRef.current, {
                transform: "translateY(100vh)",
            });
        }
    }, [confirmedRide]);

    useGSAP(() => {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: "translateY(0)",
            });
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: "translateY(100vh)",
            });
        }
    }, [vehicleFound]);

    useGSAP(() => {
        if (waiting) {
            gsap.to(waitingForDriverRef.current, {
                transform: "translateY(0)",
            });
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: "translateY(100vh)",
            });
        }
    }, [waiting]);

    return (
        <>
            {/* Map component as the background */}
            <div className="absolute inset-0 z-10">
                <Map />
            </div>

            {/* Main UI content */}
            <div className="relative h-screen overflow-hidden z-20">
                <div>
                    <h1 className="left-5 top-5 absolute flex sm:w-24 w-16 font-black text-2xl">
                        VELO <span className="text-red-500">CITI</span>
                    </h1>
                </div>

                <div className="flex flex-col justify-end absolute bottom-0 w-full">
                    <div className="h-[30vh] p-5 bg-white border-t-2 border-gray-300">
                        <div className="flex justify-between">
                            <h3 className="text-2xl mb-4 font-semibold">Find a trip</h3>
                            <RiArrowDownSLine
                                ref={panelCloseRef}
                                onClick={() => setPanelOpen(false)}
                                className="text-3xl font-black"
                            />
                        </div>
                        <form onSubmit={(e) => submitHandler(e)}>
                            <div className="line absolute h-16 w-1 top-[5.3rem] left-[2.7rem] bg-gray-700 rounded-full"></div>
                            <input
                                value={pickUp}
                                onClick={() => setPanelOpen(true)}
                                onChange={(e) => setPickUp(e.target.value)}
                                className="mb-3 bg-[#eeeeee] px-12 py-3 text-sm rounded-lg outline-none w-full"
                                type="text"
                                placeholder="Add a pick-up location"
                            />
                            <input
                                value={destination}
                                onClick={() => setPanelOpen(true)}
                                onChange={(e) => setDestination(e.target.value)}
                                className="mb-3 bg-[#eeeeee] px-12 py-3 text-sm rounded-lg outline-none w-full"
                                type="text"
                                placeholder="Enter your destination"
                            />
                        </form>
                    </div>

                    <div ref={panelRef} className="h-[0vh] bg-white">
                        <LocationSearchPanel
                            setPanelOpen={setPanelOpen}
                            setVehiclePanel={setVehiclePanel}
                        />
                    </div>

                    <div
                        ref={vehiclePanelRef}
                        className="fixed z-30 bg-white w-full translate-y-full bottom-0 p-3"
                    >
                        <VehiclePanel
                            setConfirmedRide={setConfirmedRide}
                            setVehiclePanel={setVehiclePanel}
                            panelCloseRef={panelCloseRef}
                        />
                    </div>

                    <div
                        ref={ConfirmedRidePanelRef}
                        className="fixed z-30 bg-white w-full translate-y-full bottom-0 p-3"
                    >
                        <ConfirmedRide
                            setVehicleFound={setVehicleFound}
                            setConfirmedRide={setConfirmedRide}
                        />
                    </div>

                    <div
                        ref={vehicleFoundRef}
                        className="fixed z-30 bg-white w-full translate-y-full bottom-0 p-3"
                    >
                        <LookingForDriver />
                    </div>

                    <div
                        ref={waitingForDriverRef}
                        className="fixed z-30 bg-white w-full translate-y-full bottom-0 p-3"
                    >
                        <WaitingForDriver />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
