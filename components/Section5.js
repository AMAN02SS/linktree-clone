"use client";
import React, { useEffect, useRef, useState } from "react";

const IMAGE_WIDTH_PERCENT = 20; // since 5 images = 100 / 5
const INTERVAL = 3000;
const TRANSITION_DURATION = 1500;
const MAX_LOOPS = 200;

const Section5 = () => {
  /* ---------------- IMAGE CAROUSEL ---------------- */
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const loopCountRef = useRef(0);

  const [index1, setIndex1] = useState(0);


  const originalImages = [
    "Pic/img1.jpg",
    "Pic/img2.jpg",
    "Pic/img3.jpg",
    "Pic/img4.jpg",
    "Pic/img5.jpg",
  ];

  const images = [...originalImages, ...originalImages];

  const startCarousel = () => {
    stopCarousel();
    intervalRef.current = setInterval(() => {
      setIndex1((prev) => prev + 1);
    }, INTERVAL);
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startCarousel();
    return stopCarousel;
  }, []);

  useEffect(() => {
    // completed one full loop
    if (index1 === originalImages.length) {
      loopCountRef.current += 1
    }

    // reset position for seamless loop
    if (index1 === images.length) {
      setIndex1(0);
      return
    }

    // stop completely after MAX_LOOPS
    if (loopCountRef.current >= MAX_LOOPS) {
      stopCarousel();

      const track = trackRef.current;
      const lastIndex = images.length - 1;

      track.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
      track.style.transform = `translateX(-${lastIndex * IMAGE_WIDTH_PERCENT}%)`;
    }
  }, [index1]);

  /* ---------------- TITLE SCROLLER ---------------- */
  const titles = [
    "streamers", "vlogger", "fitness coach", "ecommerce seller",
    "retailer", "products", "wellness leader", "musicians",
    "brands", "podcasters", "fashion designer", "culture creator",
    "DJs", "merch sellers", "writer creators", "influencers",
    "small businesses", "athletes", "models", "monetizers",
    "health educator",
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(titleInterval);
  }, [titles.length]);

  /* ---------------- RENDER ---------------- */
  return (
    <div className="h-full bg-[#f3f3f1]">
      {/* -------- Titles -------- */}
      <div className="flex flex-col justify-center items-center pt-30">
        <h1 className="text-[55px] tracking-tighter ExtraBold800">
          The only link in bio trusted by 70M+
        </h1>

        <div className="h-18 overflow-hidden">
          <div
            className="will-change-transform"
            style={{
              transform: `translateY(-${titleIndex * 100 / titles.length}%)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            {titles.map((title, i) => (
              <h1
                key={i}
                className="text-[55px] h-18 flex items-center justify-center tracking-tighter ExtraBold800 text-[#2665d6]"
              >
                {title}
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* -------- Image Carousel -------- */}
      <div className="w-full flex justify-center my-10">
        <div className="w-screen overflow-hidden">
          <div
            ref={trackRef}
            onMouseEnter={stopCarousel}
            onMouseLeave={startCarousel}
            className="flex ease-in-out"
            style={{
              transform: `translateX(-${index1 * IMAGE_WIDTH_PERCENT}%)`,
              transition: `transform ${TRANSITION_DURATION}ms`,
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-100 h-100 object-cover rounded-[40px] mx-5"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center m-20 gap-5 my-40">
        <div className="flex justify-center h-225 w-1/2 flex-col gap-5">
          <div className="bg-[#e9c0e9] w-full px-10 py-10 h-1/2 rounded-4xl flex flex-col items-center">
            <div className="w-auto my-10">
              <img className="object-contain object-[50%_50%] w-auto block max-w-150" width={"90%"} height={"50%"} src="/Pic/section-6.avif" alt="" />
            </div>
            <h1 className="font-bold text-3xl">Share every type of content in limitless ways</h1>
          </div>

          <div className="bg-[#d2e823] w-full px-10 py-10 h-1/2 rounded-4xl flex flex-col items-center">
            <div className="w-auto pb-10 px-10">
              <img className="object-contain object-[50%_50%] w-auto block max-w-150" width={"90%"} height={"50%"} src="/Pic/section-6-product.avif" alt="" />
            </div>
            <h1 className="font-bold text-3xl">Sell products, collect payments and make monetization simple</h1>
          </div>
        </div>
        <div className="bg-[#061492] px-10 py-9 flex h-225 w-1/2 flex-col rounded-4xl gap-9">
          <div className="mx-auto block px-10">
            <img className="object-contain object-[50%_50%] w-auto max-w-125 h-auto  block" src="/Pic/section-6-group.avif" alt="" />
          </div>
          <h1 className="font-bold text-3xl text-white">Grow, own and engage your audience across all of your channels</h1>
        </div>
      </div>
    </div >
  );
};

export default Section5;
