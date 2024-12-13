import React, { useContext } from 'react';
import { MdDirectionsRailway, MdOutlineFlight, MdElectricRickshaw } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { UserDataContext } from '../context/UserContext'
import { FaCar } from "react-icons/fa";

import locations from "../data/data.json";

const LocationSearchPanel = (props) => {
    // const [location, setLocation] = useContext(UserDataContext)
    // console.log(props);

    // const LocationSearchPanel = (props) => {
    const { setSelectedLocation } = useContext(UserDataContext); // Access the context

    const handleSelectLocation = (loc) => {
        setSelectedLocation(loc); // Set the selected location in the context
    };

    const icons = [
        MdDirectionsRailway,
        MdOutlineFlight,
        FaCar,
        RiMotorbikeFill,
        MdElectricRickshaw,
    ];

    const getRandomIcon = () => {
        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    };


    return (
        <>
            <div className='px-2'>
                <h1 className='font-semibold mb-3 text-xl ml-3'>Choose a destination</h1>
                <div className="max-h-96 overflow-y-auto">
                    {locations.map((elem, index) => {
                        const RandomIcon = getRandomIcon();
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    props.setVehiclePanel(true);
                                    props.setPanelOpen(false);
                                    console.log("ID: ", elem.id);
                                    handleSelectLocation(elem)
                                    console.log("Distance: ", elem.distance);

                                }}
                                className='flex border-2 overflow-y-auto active:border-black rounded-md py-3 px-2 gap-3 mb-1 items-center'
                            >
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <RandomIcon className='text-xl' />
                                </div>
                                <h2 className='text-sm font-medium'>{`from ${elem.current_location} to ${elem.destination}`}</h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default LocationSearchPanel;
