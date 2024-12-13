import { RiArrowDownSLine } from 'react-icons/ri'
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';
import vehicle from "../data/vehicle.json"
import locationData from "../data/data.json"

const VehiclePanel = (props) => {

    const { setSelectedRide } = useContext(UserDataContext);

    const rideHandler = (ride) => {
        setSelectedRide(ride)
    }

    const { selectedLocation } = useContext(UserDataContext);
    if (!selectedLocation) {
        return <div>No location selected</div>; // Show message if no location is selected
    }



    // console.log(vehicleData[0].bike);


    return (

        <>
            <div className='flex justify-between'>
                <h3 className='text-2xl mb-4 font-semibold'>Choose a Vehicle</h3>
                {/* </div> */}
                <RiArrowDownSLine onClick={() => props.setVehiclePanel(false)} className='text-3xl  font-black' />
            </div>
            {
                vehicle.map((elem, index) => {
                    return (
                        <>
                            <div>
                                <div onClick={() => {
                                    props.setConfirmedRide(true)
                                    rideHandler(elem)
                                    console.log(elem.id);

                                }} className='flex justify-center mb-2 border-2 active:border-black rounded-xl gap-4 py-3 items-center bg-white'>
                                    <div>
                                        <img src={elem.img} className='h-16' alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-base'>{elem.type}</h1>
                                        <h2 className='text-xs'>{elem.time}</h2>
                                        {/* <h3 className='text-xs'>14:44</h3> */}
                                        <h2 className='text-gray-500 text-xs'>{elem.desc}</h2>
                                    </div>
                                    <div>
                                        <h1 className='text-xl font-bold'>₹{selectedLocation.distance * elem.price}</h1>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>

        // }
    )
}

export default VehiclePanel;