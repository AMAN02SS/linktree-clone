"use client"

import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY < lastScrollY) {
                setVisible(true)
            }
            else {
                setVisible(false)
            }

            setLastScrollY(currentScrollY)
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);

    }, [lastScrollY]);


    return (
        <div className={`mt-10 text-black bg-white w-[90vw] h-20 rounded-full mx-auto fixed z-1 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${visible ? "top-4 opacity-100" : "-top-20 opacity-0"}`} >
            <div className='flex justify-between items-center h-20 p-3 font-semibold text-2xl'>
                <div className='flex gap-10'>
                    <div className='flex justify-center items-center pl-5'>
                        <h1 className='text-3xl'>Linktree</h1><img width={22} height={22} src='/Pic/logo.svg' />
                    </div>
                    <ul className='flex justify-between items-center font-semibold text-lg gap-10'>
                        <li>Products</li>
                        <li>Templates</li>
                        <li>Marketplace</li>
                        <li>Learn</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='flex gap-2 text-lg'>
                    <button className='bg-[#eff0ec] rounded-lg py-4 px-8'>Login</button>
                    <button className='bg-[#1e2330] text-white       rounded-full py-4 px-8'>Sign up free</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
