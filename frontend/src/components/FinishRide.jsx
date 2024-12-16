import { BiCurrentLocation } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";

const FinishRide = () => {

    return (
        <div className="">
            <div className='flex justify-between pt-12'>
                <h3 className='text-2xl font-semibold'>Finish this ride</h3>
            </div>
            <div>
                <div className="flex justify-between items-center h-full">
                    <div className="flex gap-2 items-center justify-between px-4 border-2 border-yellow-400 my-8 py-2 rounded-lg w-full">
                        <img src="https://wallpapers.com/images/hd/meme-faces-funny-pictures-1164-x-1146-a5k82zsnhuk7lidn.jpg" className="border-2 border-green-500 h-[3.5rem] w-[3.6rem] rounded-full" alt="" />
                        <h1 className="text-md font-medium">Blackbeard</h1>
                        <h1 className="font-bold text-xl">2.4KM</h1>
                    </div>
                </div>
                <div>
                    <div className='flex items-center p-3 border-b-gray-200 border-b-2  gap-4'>
                        <BiCurrentLocation className='text-xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                562/11-A
                            </h2>
                            <h3 className='text-xs font-normal'>
                                Tilhar,Shahjahanpur
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center p-3 border-b-gray-200 border-b-2  gap-4'>
                        <IoLocation className='text-xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                562/11-A
                            </h2>
                            <h3 className='text-xs font-normal'>
                                Tilhar,Shahjahanpur
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center p-3  gap-4'>
                        <FaMoneyBillWave className='text-xl' />
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium'>
                                $234.23
                            </h2>
                            <h3 className='text-xs font-normal'>
                                Cash cash
                            </h3>
                        </div>
                    </div>
                    <div className="my-4">

                        <Link onClick={() => requestHandler()} to='/captain-home' className='mt-4 flex justify-center bg-green-400 w-full py-3 font-semibold rounded-md '>Finish this ride</Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishRide