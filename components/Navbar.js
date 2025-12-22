import React from 'react'

const Navbar = () => {
    return (
        <div className='text-black bg-white w-[90vw] h-20 rounded-full mx-auto mt-12' >
            <div className='flex justify-between items-center h-20 p-3 font-semibold text-2xl'>
                <div className='flex gap-10'>
                    <div className='flex justify-center items-center pl-5'>
                        <h1 className='text-2xl'>Linktree</h1><img width={20} height={20} src='https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b48ad59add9f2777bb76f_download-2.svg' />
                    </div>
                    <ul className='flex justify-between items-center font-semibold text-lg gap-10'>
                        <li>Products</li>
                        <li>Templates</li>
                        <li>Marketplace</li>
                        <li>Learn</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='flex gap-2 text-lg '>
                    <button className='bg-gray-500 rounded-lg py-4 px-8'>Login</button>
                    <button className='bg-gray-500 rounded-full py-4 px-8'>Sign up free</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
