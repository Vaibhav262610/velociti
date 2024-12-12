import React from 'react'
import { MdDirectionsRailway } from "react-icons/md";

const LocationSearchPanel = (props) => {
    console.log(props);


    const locations = [
        "Near railway station road, Nighoi road, Shahjahanpur, Uttar Pradesh",
        "Near railway station road, Nighoi road, Shahjahanpur, Uttar Pradesh",
        "Near railway station road, Nighoi road, Shahjahanpur, Uttar Pradesh",
        "Near railway station road, Nighoi road, Shahjahanpur, Uttar Pradesh",
        "Near railway station road, Nighoi road, Shahjahanpur, Uttar Pradesh",
    ]


    return (
        <>
            <div className='px-2'>
                <h1 className='font-semibold mb-3 text-xl ml-3'>Choose a destination</h1>
                {
                    locations.map((elem, index) => {
                        return (
                            // <>
                            <div key={index} onClick={() => {
                                props.setVehiclePanel(true)
                                props.setPanelOpen(false)
                            }} className='flex border-2 active:border-black rounded-md py-3 px-2 gap-3 mb-1 items-center'>
                                <div className='bg-gray-200 p-2 rounded-full'>
                                    <MdDirectionsRailway className='text-xl' />
                                </div>
                                <h2 className='text-sm font-medium'>{elem}</h2>
                            </div>
                            // </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default LocationSearchPanel