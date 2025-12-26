import React from 'react'

const Generate = () => {
    return (
        <>
            <div className='h-screen w-full flex overflow-hidden'>
                <div className='h-full w-1/2 flex flex-col justify-center items-center'>
                    <div className='text-3xl font-bold'>Welcome to Linktree</div>
                    <div>Create your Link today!</div>
                    <div className='flex flex-col items-center justify-center gap-4 py-10'>
                        <div className='flex flex-col items-center justify-center'>
                            <label className='text-xl font-semibold' htmlFor="">Step 1: Claim your Handle</label>
                            <input className='border p-2 w-100 bg-gray-300 rounded-lg' type="text" placeholder='Chose your handle' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <label className='text-xl font-semibold' htmlFor="">Step 2: Add Links</label>
                            <input className='border p-2  w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link text' />
                            <input className='border p-2  w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link text' />
                            <button className='bg-[#1e2330] text-white rounded-full py-4 px-8'>Add Link</button>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <label className='text-xl font-semibold' htmlFor="">Step 3: Add Picture and Finalize</label>
                            <input className='border p-2  w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link of Picture' />
                        </div>
                        <button className='bg-[#1e2330] text-white rounded-full py-4 px-8'>Create Your LinkTree</button>
                    </div>
                </div>
                <div className='h-full block bg-blue-500 w-1/2'>
                    <img className='w-full h-full object-cover' src="/Pic/gen-form.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Generate
