import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainLogo from './CaptainLogo'
import { MdLogout } from 'react-icons/md'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from './FinishRide'

const CaptainRiding = () => {

    const finishRidingPanelRef = useRef()
    const [finishRidingPanel, setFinishRidingPanel] = useState(false)

    useGSAP(() => {
        if (finishRidingPanel) {
            gsap.to(finishRidingPanelRef.current, {
                transform: "translateY(0)"
            })
        }
        else {
            gsap.to(finishRidingPanelRef.current, {
                transform: "translateY(100vh)"
            })
        }
    }, [finishRidingPanel])

    return (
        <div className="h-screen w-full relative overflow-hidden">
            <div>
                {/* <Link to='/'> */}
                <div className="absolute top-4 left-4">
                    <CaptainLogo />
                </div>
                {/* </Link> */}

                {/* <h1 className='font-bold text-2xl '>Confirm your Ride</h1> */}
                <div className='w-full flex justify-center items-center'>
                    <img src="https://preview.redd.it/ty09jdaxkdf91.jpg?width=640&crop=smart&auto=webp&s=f89838deff655d3d654aa9ac5e7821e3c2be0a02" className='h-screen w-screen object-cover' alt="" />
                </div>
                <div className="bg-yellow-300 absolute bottom-0 p-5 h-[20vh] w-screen">
                    <div className='flex justify-between items-center h-full'>
                        <h1 className='text-2xl font-semibold  '>4 KM away</h1>
                        <button onClick={() => setFinishRidingPanel(true)} className=' bg-green-400 w-1/2 py-3 font-semibold rounded-md'>Complete Ride</button>
                    </div>
                </div>
                <div ref={finishRidingPanelRef} className='fixed z-10 bg-white w-full translate-y-full bottom-0 px-3'>
                    <FinishRide setFinishRidingPanel={setFinishRidingPanel} />
                </div>
            </div>

        </div>
    )
}

export default CaptainRiding