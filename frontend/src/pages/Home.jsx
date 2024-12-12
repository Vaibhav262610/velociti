import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

    const [pickUp, setPickUp] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()

    }

    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70vh',
                // padding: 24,
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1,
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0vh'
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0,
            })
        }
    }, [panelOpen])


    return (
        <>
            <div className='h-screen relative '>
                <div>
                    <h1 className='left-5 top-5 absolute flex sm:w-24 w-16 font-black text-2xl'>VELO <span className='text-red-500'>CITI</span></h1>
                </div>
                <div>
                    <img src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg" className='h-screen w-screen object-cover' alt="" />
                </div>
                <div className='flex flex-col justify-end absolute bottom-0 w-full  '>
                    <div className='h-[30vh] p-5 bg-white'>
                        {/* <div className=''> */}
                        <div className='flex justify-between'>
                            <h3 className='text-2xl mb-4 font-semibold'>Find a trip</h3>
                            {/* </div> */}
                            <RiArrowDownSLine ref={panelCloseRef} onClick={() => setPanelOpen(false)} className='text-3xl  font-black' />
                        </div>
                        <form onSubmit={(e) => submitHandler(e)}>
                            <div className='line absolute h-16 w-1 top-[5.3rem] left-[2.7rem] bg-gray-700 rounded-full  '></div>
                            <input value={pickUp} onClick={() => setPanelOpen(true)} onChange={(e) => setPickUp(e.target.value)} className='mb-3 bg-[#eeeeee] px-12 py-3 text-sm rounded-lg outline-none w-full ' type="text" placeholder='Add a pick-up location' />
                            <input value={destination} onClick={() => setPanelOpen(true)} onChange={(e) => setDestination(e.target.value)} className='mb-3 bg-[#eeeeee] px-12 py-3 text-sm rounded-lg outline-none w-full ' type="text" placeholder='Enter your destination' />
                        </form>
                    </div>
                    <div ref={panelRef} className='h-[0vh] bg-white '>
                        <LocationSearchPanel />
                    </div>
                    <div className='fixed z-10'>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home