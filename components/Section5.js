"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react';
const IMAGE_HEIGHT = 600;
const INTERVAL = 3000;
const TRANSITION_DURATION = 1500;
const MAX_LOOPS = 2;

const section5 = () => {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const [index1, setIndex1] = useState(0);
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
      setIndex1((prev) => prev + 1);
    }, INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    // when one full cycle completes
    if (index1 === images.length) {
      setLoopCount((prev) => prev + 1);
      setIndex1(0);
    }

    // stop completely after 2 loops
    if (loopCount === MAX_LOOPS) {
      clearInterval(intervalRef.current);

      const track = trackRef.current;
      const lastIndex = images.length - 1;

      // lock on last image
      track.style.transform = `translateX(-${lastIndex * IMAGE_HEIGHT}px)`;
      track.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
    }
  }, [index1, loopCount, images.length]);


  let original_title = ["streamers", "vlogger", "fitness coach", "ecommers seller", "retailer", "products", "wellness leader", "musicians", "brands", "podcasters", "fession designer", "culture creater", "DJs", "merch sellers", "writer creaters", "influencers", "small businesses", "athletes", "models", "monitizers", "health educator"];

  let title = [...original_title, original_title[0]]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervel = setInterval(() => {
      setIndex((prev) => (prev + 1) % title.length)
    }, 2000)

    return () => clearInterval(intervel)
  }, [])

  return (
    <>
      <div className='h-full bg-[#f3f3f1]'>
        <div className='flex flex-col justify-center items-center pt-30'>
          <h1 className='text-[55px] text-start text-base/20  tracking-tighter ExtraBold800'>The only link in bio trusted by 70M+</h1>
          <div className={`h-18 overflow-hidden `}>
            <div className='will-change-transform' style={{ transform: `translateY(-${index * 4.54545455}%)`, transition: "transform 1s ease-in-out" }}>{title.map((title, i) => (
              <h1 className='text-[55px] text-start h-19 flex items-center justify-center tracking-tighter ExtraBold800 text-[#2665d6]' key={i}>{title}</h1>
            ))}</div>
          </div>
        </div>
        <div className="h-full w-full flex justify-center my-10" >
          <div className="w-screen h-full overflow-hidden ">
            <div ref={trackRef} style={{ transform: `translateX(-${index1 * 20}%)`, transitionDuration: `${TRANSITION_DURATION}ms`, }} className=" flex flex-row transform duration-1500 ease-in-out">
              {images.map((src, i) => (
                <img className="w-100 h-100 object-cover rounded-[40] mx-5" key={i} src={src} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default section5
