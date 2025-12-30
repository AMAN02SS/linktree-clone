"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';


const Generate = () => {
    const searchParams = useSearchParams();
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [picture, setPicture] = useState("")
    const [desc, setDesc] = useState("")

    const submitLinks = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "handle":handle,
            "links":links,
            "picture":picture,
            "desc": desc

        });
        console.log(raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
            setLinks([])
            setPicture("")
            sethandle("")
        }
        else {
            toast.error(result.message)
        }
 
    }


    const pictureChange = (e) => {
        setPicture(e.target.value)
    }
    const descChange = (e) => {
        setDesc(e.target.value)
    }
    


    const setLink = (index, link, linktext) => {
        setLinks((initLinks) => {
            return initLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })

        })

    }
    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))

    }



    return (
        <>
            <div className='absolute top-10 left-10 z-10'>
                <div className='flex justify-start items-baseline pl-5'>
                    <h1 className='text-4xl font-bold'>Linktree</h1><img className='' width={25} height={25} src='/Pic/logo.svg' />
                </div>
            </div>
            <div className='h-screen w-full flex overflow-hidden relative bg-[#225ac0]'>
                <ToastContainer />
                <div className='h-full w-1/2 flex flex-col justify-center items-center'>
                    <div className='py-10 bg-[#c2d816] rounded-2xl px-15'>
                        <div className='text-3xl font-bold text-center'>Welcome to Linktree</div>
                        <div className='text-center py-2'>Create your Linktee today!</div>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <label className='text-xl font-semibold' htmlFor="">Step 1: Claim your Handle</label>
                                <input onChange={e=>{sethandle(e.target.value)}} value={handle} className='border p-2 w-100 bg-gray-300 rounded-lg'  type="text" placeholder='Chose your handle' />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <label className='text-xl font-semibold' htmlFor="">Step 2: Add Links</label>
                                {links && links.map((item, index) => {
                                    return <div key={index} className='flex flex-col items-center justify-center gap-2'>
                                        <input onChange={e => { setLink(index, e.target.value, item.linktext) }} value={item.link || ""} className='border p-2  w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link' />
                                        <input onChange={e => { setLink(index, item.link, e.target.value) }} value={item.linktext || ""} className='border p-2  w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link text' />
                                    </div>
                                })}
                                <button onClick={() => addLink()} className='bg-[#1e2330] font-semibold text-white rounded-full py-4 px-8 hover:bg-[#424754]'>+ Add Link</button>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <label className='text-xl font-semibold' htmlFor="">Step 3: Add Picture and And Description</label>
                                <input onChange={pictureChange} value={picture || ""} className='border p-2 w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter link of your Picture' />
                                <input onChange={descChange} value={desc || ""} className='border p-2 w-100 bg-gray-300 rounded-lg' type="text" placeholder='Enter Description' />
                            </div>
                            <button disabled={picture === " "|| handle =="" || links[0].link == ""} onClick={() => { submitLinks() }} className='disabled:bg-slate-200 bg-[#1e2330] font-semibold text-white rounded-full py-4 px-8 hover:bg-[#424754]'>Create Your LinkTree</button>
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
