import React from 'react'

const Section4 = () => {
    return (
        <>
            <div className="h-[calc(100vh-5rem)] bg-[#e8efd6]">
                <div className="h-full flex items-center mx-40">
                    <div className="h-full w-1/2 flex justify-center" >
                        <div className="w-150 h-full flex items-center justify-center">
                            <div className="flex justify-center items-center">
                               <img src="/Pic/section-4.avif" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-1/2 flex flex-col justify-center items-start">
                        <h1 className="text-[60px] text-[#1e2330] text-base/15 tracking-tighter ExtraBold800 ">Analyze your audience and keep them engaged</h1>
                        <p className="text-xl text-start mt-10 text-[#1e2330] ExtraBold400 ">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
                        <button className="bg-pink-200 rounded-full px-17 py-5 mt-10 text-xl font-semibold">Get Start for free</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4
