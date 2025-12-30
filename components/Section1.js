"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const IMAGE_HEIGHT = 600;
const INTERVAL = 3000;
const TRANSITION_DURATION = 1500;
const MAX_LOOPS = 2;

export default function Section1() {
    const trackRef = useRef(null);
    const intervalRef = useRef(null);

    const [index, setIndex] = useState(0);
    const [loopCount, setLoopCount] = useState(0);

    const images = [
        "Pic/img1.jpg",
        "Pic/img2.jpg",
        "Pic/img3.jpg",
        "Pic/img4.jpg",
        "Pic/img5.jpg",
    ];

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, INTERVAL);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        // when one full cycle completes
        if (index === images.length) {
            setLoopCount((prev) => prev + 1);
            setIndex(0);
        }

        // stop completely after 2 loops
        if (loopCount === MAX_LOOPS) {
            clearInterval(intervalRef.current);

            const track = trackRef.current;
            const lastIndex = images.length - 1;

            // lock on last image
            track.style.transform = `translateY(-${lastIndex * IMAGE_HEIGHT}px)`;
            track.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
        }
    }, [index, loopCount, images.length]);
    
    const [text, setText] = useState("")
    const router = useRouter()
    const createTree = (params) => {
        router.push(`/generate?handle=${text}`)

      
    }
    

    return (
        <>
            <div className="h-screen bg-[#d2e823]">
                <div className="flex items-center">
                    <div className="text-black h-full w-1/2 flex flex-col justify-baseline items-center">
                        <h1 className="text-[80px] text-start ml-20 mt-40 text-[#254f1a] text-base/20  tracking-tighter ExtraBold800">A link in bio built for you.</h1>
                        <p className="text-xl text-start ml-20 mt-10 text-[#254f1a] ExtraBold400 ">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
                        <div className="flex gap-2">
                            <input value={text} onChange={(e)=>setText(e.target.value)} className="bg-white rounded-lg px-5 py-5 mt-10 text-xl font-semibold" placeholder="linktree/" type="text" />
                            <button  onClick={()=>{createTree()}} className="bg-[#254f1a] rounded-full px-17 py-5 mt-10 text-xl font-semibold text-white">Get Start for free</button>
                        </div>
                    </div>
                    <div className="h-full w-1/2 flex justify-center" >
                        <div className="w-150 h-screen overflow-hidden ">
                            <div ref={trackRef} style={{ transform: `translateY(-${index * IMAGE_HEIGHT}px)`, transitionDuration: `${TRANSITION_DURATION}ms`, }} className=" flex flex-col transform duration-1500 ease-in-out">
                                {images.map((src, i) => (
                                    <img className="w-155.5 h-155.5 object-cover rounded-[40] mt-10" key={i} src={src} alt="" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
