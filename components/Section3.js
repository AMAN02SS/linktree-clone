"use client"
import React from 'react'
import Rive from '@rive-app/react-canvas'

const Section3 = () => {

    return (
        <>
            <div className="h-[calc(100vh-5rem)] bg-[#780016]">
                <div className="flex items-center mx-40">
                    <div className="h-full w-1/2 flex flex-col justify-center items-start">
                        <h1 className="text-[60px] text-start text-pink-300 text-base/15  tracking-tighter ExtraBold800">Share your Linktree anywhere you like!</h1>
                        <p className="text-xl text-start mt-10 text-pink-300 ExtraBold400 ">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
                        <button className="bg-pink-300 rounded-full px-17 py-5 mt-10 text-xl font-semibold">Get Start for free</button>
                    </div>
                    <div className="h-full w-1/2 flex justify-center" >
                        <div className="w-150 h-screen">
                            <div className="w-full h-full">
                                <Rive
                                    src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680faadc793de4a67df69d04_homepage_image_3.riv"
                                    artboard="Homepage_image 3"
                                    stateMachines="State Machine"
                                    autoPlay={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3
