import { RiArrowDownSLine } from 'react-icons/ri'

const VehiclePanel = (props) => {
    return (
        <div>
            <div className='flex justify-between'>
                <h3 className='text-2xl mb-4 font-semibold'>Choose a Vehicle</h3>
                {/* </div> */}
                <RiArrowDownSLine ref={props.panelCloseRef} onClick={() => props.setVehiclePanel(false)} className='text-3xl  font-black' />
            </div>
            <div onClick={() => props.setConfirmedRide(true)} className='flex justify-center mb-2 border-2 active:border-black rounded-xl gap-4 items-center bg-white'>
                <div>
                    <img src="https://www.svgrepo.com/download/408291/car-white.svg" className='h-20' alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-base'>VelocitiGo</h1>
                    <h2 className='text-xs'>2 mins away</h2>
                    {/* <h3 className='text-xs'>14:44</h3> */}
                    <h2 className='text-gray-500 text-xs'>Affordable, compact rides</h2>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>$193.20</h1>
                </div>
            </div>
            <div onClick={() => props.setConfirmedRide(true)} className='flex justify-center mb-2 border-2 active:border-black rounded-xl py-3 gap-4 items-center bg-white'>
                <div>
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" className='h-12' alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-base'>Moto</h1>
                    <h2 className='text-xs'>4 mins away</h2>
                    {/* <h3 className='text-xs'>14:44</h3> */}
                    <h2 className='text-gray-500 text-xs'>Affordable, compact rides</h2>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>$23.4</h1>
                </div>
            </div>
            <div onClick={() => props.setConfirmedRide(true)} className='flex justify-center mb-2 border-2 active:border-black py-3 rounded-xl gap-4 items-center bg-white'>
                <div>
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" className='h-12 ' alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-base'>Auto</h1>
                    <h2 className='text-xs'>7 mins away</h2>
                    {/* <h3 className='text-xs'>14:44</h3> */}
                    <h2 className='text-gray-500 text-xs'>Affordable, compact rides</h2>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>$112.50</h1>
                </div>
            </div></div>
    )
}

export default VehiclePanel;