"use client"
import React from 'react'
import { useState, useEffect } from 'react';

const section5 = () => {
let title = ["streamers", "vlogger", "fitness coach", "ecommers seller", "retailer", "products", "wellness leader", "musicians", "brands", "podcasters","fession designer", "culture creater", "DJs", "merch sellers", "writer, creaters", "influencers", "small businesses", "athletes", "models", "monitizers", "health educator"];

const [index, setIndex] = useState(0)

useEffect(() => {
  const intervel = setInterval(()=>{
    setIndex((prev)=>(prev+1)% title.length)
  }, 2000)

  return () => clearInterval(intervel)
}, [])


  return (
    <>
    <div>
        <div>
            <h1>The only link in bio trusted by 70M+</h1>
            <h1>{title[index]}</h1>
        </div>
    </div>
    </>
  )
}

export default section5
