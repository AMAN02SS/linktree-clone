import React from 'react'

const Section2 = () => {
    return (
        <>
            <div className="h-screen bg-[#2665d6]">
                <div className="flex items-center">
                    <div className="h-full w-1/2 flex justify-center" >
                        <div className="w-150 h-screen flex items-center">
                            <div className="flex justify-center items-center">
                                <video id="customize-your-linktree" autoPlay playsInline loop muted poster="/Pic/video_section2.webp">
                                    <source src="/Video/video_section2.webm" type="video/webm"></source>
                                </video>

                            </div>
                        </div>
                    </div>
                    <div className="text-black h-full w-1/2 flex flex-col justify-center items-start">
                        <h1 className="text-[70px] text-[#d2e823] text-base/20  tracking-tighter ExtraBold800">Create and customize your Linktree in minutes</h1>
                        <p className="text-xl text-start mt-10 text-white ExtraBold400 ">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks. </p>
                        <button className="bg-[#d2e823] rounded-full px-17 py-5 mt-10 text-xl font-semibold text-white">Get Start for free</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
