import React from 'react'

const Generate = () => {
    return (
        <>
            <div className='absolute top-10 left-10 z-10'>
                <div className='flex justify-start items-baseline pl-5'>
                    <h1 className='text-4xl font-bold'>Linktree</h1><img className='' width={25} height={25} src='/Pic/logo.svg' />
                </div>
            </div>
            <div className='h-screen w-full flex overflow-hidden relative bg-[#225ac0]'>
                <div className='h-full w-1/2 flex flex-col justify-center items-center'>
                    <div className='py-10 bg-[#c2d816] rounded-2xl px-15'>
                        <div className='text-3xl font-bold text-center'>Welcome to Linktree</div>
                        <div className='text-center py-2'>Create your Linktee today!</div>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <label className='text-xl font-semibold' htmlFor="">Step 1: Claim your Handle</label>
                                <input className='border p-2 w-100 bg-gray-300 rounded-lg' type="text" placeholder='Chose your handle' />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <label className='text-xl font-semibold' htmlFor="">Step 2: Add Links</label>
                                <input className='border p-2  w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link text' />
                                <input className='border p-2  w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link text' />
                                <button className='bg-[#1e2330] font-semibold text-white rounded-full py-4 px-8 hover:bg-[#424754]'>+ Add Link</button>
                            </div>
                            <div className='flex flex-col items-center justify-centergap-2'>
                                <label className='text-xl font-semibold' htmlFor="">Step 3: Add Picture and Finalize</label>
                                <input className='border p-2 w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link of your Picture' />
                            </div>
                            <button className='bg-[#1e2330] font-semibold text-white rounded-full py-4 px-8 hover:bg-[#424754]'>Create Your LinkTree</button>
                        </div>
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
