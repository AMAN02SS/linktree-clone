import React from 'react'

const Generate = () => {
    return (
        <>
            <div className='h-screen w-full flex overflow-hidden'>
                <div className='h-full w-1/2 flex flex-col justify-center items-center'>
                    <div className='text-3xl font-bold'>Welcome to Linktree</div>
                    <div>Create your Link today!</div>
                    <div className='flex flex-col items-center gap-4'>
                        <input className='border' type="text" placeholder='Enter link text' />
                        <input type="text" placeholder='Enter link ' />
                        <input type="text" placeholder='Enter link ' />
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
