
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
    <>
      <div className="h-screen bg-[#d2e823]">
        <div className="pt-10"><Navbar /></div>
        <div className="flex ">
          <div className="text-black h-full w-1/2 flex flex-col justify-end items-center">
            <h1 className="text-[80px] text-start ml-20 mt-40 text-[#254f1a] text-base/20  tracking-tighter ExtraBold800">A link in bio built for you.</h1>
            <p className="text-xl text-start ml-20 mt-10   text-[#254f1a] ExtraBold400 ">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          </div>
          <div className="bg-gray-200 h-full w-1/2" >

          </div>
        </div>
      </div>
    </>
  )
}
