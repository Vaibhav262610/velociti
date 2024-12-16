import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainLogo from "./CaptainLogo";
import { MdLogout } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "./FinishRide";
import Map from "./Map";

const CaptainRiding = () => {
    const finishRidingPanelRef = useRef();
    const [finishRidingPanel, setFinishRidingPanel] = useState(false);

    useGSAP(() => {
        if (finishRidingPanel) {
            gsap.to(finishRidingPanelRef.current, {
                transform: "translateY(0)",
            });
        } else {
            gsap.to(finishRidingPanelRef.current, {
                transform: "translateY(0vh)",
            });
        }
    }, [finishRidingPanel]);

    return (
        <div className="h-screen w-full relative overflow-hidden">
            {/* Logo */}
            <div className="absolute top-4 left-4 z-20">
                <CaptainLogo />
            </div>

            {/* Map */}
            <div className="absolute inset-0 z-10">
                <Map />
            </div>

            {/* Ride Information Panel */}
            <div className="bg-yellow-300 absolute bottom-0 p-5 h-[20vh] w-screen z-20">
                <div className="flex justify-between items-center h-full">
                    <h1 className="text-2xl font-semibold">4 KM away</h1>
                    <button
                        onClick={() => setFinishRidingPanel(true)}
                        className="bg-green-400 w-1/2 py-3 font-semibold rounded-md"
                    >
                        Complete Ride
                    </button>
                </div>
            </div>

            {/* Finish Ride Panel */}
            <div
                ref={finishRidingPanelRef}
                className="fixed z-30 bg-white w-full translate-y-full bottom-0 px-3"
            >
                <FinishRide setFinishRidingPanel={setFinishRidingPanel} />
            </div>
        </div>
    );
};

export default CaptainRiding;
