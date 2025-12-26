import React from 'react'

const Section7 = () => {
    return (
        <>
            <div className='bg-[#502274] h-300 relative'>
                <div className='relative flex flex-col justify-center items-center pt-40 z-10'>
                    <h1 className='text-[#e9c0e9] text-6xl ExtraBold800'>Jumpstart your corner of the</h1>
                    <h1 className='text-[#e9c0e9] text-6xl ExtraBold800'>internet today </h1>

                    <div>
                        <button className="bg-[#d2e823] rounded-full px-17 py-5 mt-10 text-xl font-semibold ">Claim your Linktree</button>
                    </div>
                </div>
                <div className='z-1 absolute w-130 h-130  top-10 rotate-12'>
                    <img src="/Pic/person.svg" alt="" />
                </div>
                <div className='z-1 absolute w-130 h-130 right-1 bottom-40'>
                    <img src="/Pic/flower.svg" alt="" />
                </div>
                <div className='z-1 left-35 bottom-20 absolute w-[80vw] h-[70vh] bg-white flex flex-col rounded-2xl p-10'>
                    <div className='flex justify-evenly'>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <h1 className='text-black font-semibold text-2xl'>Company</h1>
                            <p>The Linktree Blog</p>
                            <p>Engineering Blog</p>
                            <p>Marketplace</p>
                            <p>What's New</p>
                            <p>About</p>
                            <p>Press</p>
                            <p>Careers</p>
                            <p>Link in Bio</p>
                            <p>Social Good</p>
                            <p>Contact</p>
                        </div>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <h1 className='text-black font-semibold text-2xl'>Community</h1>
                            <p>Linktree for Enterprise</p>
                            <p>2023 Creator Report</p>
                            <p>2022 Creator Report</p>
                            <p>Charities</p>
                            <p>Creator Profile Directory</p>
                            <p>Explore Templates</p>
                        </div>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <h1 className='text-black font-semibold text-2xl'>Support</h1>
                            <p>Help Topics</p>
                            <p>Getting Started</p>
                            <p>Linktree Pro</p>
                            <p>Features & How-Tos</p>
                            <p>FAQs</p>
                            <p>Report a Violation</p>
                        </div>
                        <div className='flex flex-col gap-2 text-gray-600'>
                            <h1 className='text-black font-semibold text-2xl'>Trust & Legal</h1>
                            <p>Terms & Conditions</p>
                            <p>Privacy Notice</p>
                            <p>Cookie Notice</p>
                            <p>Trust Center</p>
                            <p>Cookies Preferences</p>
                            <p>Transparency Report</p>
                            <p>Law Enforcement Access Policy</p>
                            <p>Human Rights</p>
                        </div>
                    </div>
                    <div className='flex items-end pt-10 justify-between'>
                        <div className='flex gap-2 text-lg'>
                            <button className='bg-[#eff0ec] font-semibold rounded-lg py-4 px-8'>Login</button>
                            <button className='bg-[#d2e823] font-semibold rounded-full py-4 px-8'>Get Started for free</button>
                        </div>
                        <div className='flex flex-row justify-center gap-2'>
                            <button className='bg-black rounded-full'><img className='w-35 h-15' src="/Pic/App_Store.svg" alt="" /></button>
                            <button className='bg-black rounded-full'><img className='w-35 h-15' src="/Pic/Google_Play.svg" alt="" /></button>
                            <button className='bg-[#1e2330] rounded-full py-4 px-5'><img className='w-6 h-6 invert' src="/Pic/logo.svg" alt="" /></button>
                            <button className='bg-[#1e2330] text-white rounded-full py-4 px-4'><svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13011_173742)">
                                    <path d="M24.2215 12.0505C24.1095 11.9968 23.9957 11.9452 23.8805 11.8957C23.6798 8.19788 21.6593 6.08089 18.2665 6.05922C18.2512 6.05912 18.2359 6.05912 18.2205 6.05912C16.1912 6.05912 14.5035 6.92533 13.4647 8.50155L15.3306 9.78153C16.1066 8.60415 17.3245 8.35315 18.2214 8.35315C18.2317 8.35315 18.2421 8.35315 18.2524 8.35325C19.3695 8.36037 20.2125 8.68517 20.7581 9.31856C21.1551 9.7797 21.4207 10.4169 21.5522 11.2211C20.5617 11.0528 19.4906 11.001 18.3455 11.0667C15.1198 11.2525 13.0461 13.1338 13.1854 15.7479C13.2561 17.0739 13.9166 18.2146 15.0454 18.9598C15.9997 19.5898 17.2288 19.8979 18.5063 19.8281C20.1932 19.7356 21.5167 19.092 22.4399 17.9151C23.1411 17.0213 23.5846 15.8631 23.7804 14.4037C24.5844 14.8889 25.1802 15.5274 25.5093 16.295C26.0688 17.5997 26.1015 19.7437 24.352 21.4917C22.8192 23.023 20.9768 23.6855 18.1923 23.7059C15.1035 23.683 12.7675 22.6924 11.2487 20.7617C9.82649 18.9537 9.09147 16.3424 9.06405 13C9.09147 9.65762 9.82649 7.04622 11.2487 5.23828C12.7675 3.30754 15.1035 2.31698 18.1922 2.29403C21.3034 2.31716 23.6801 3.31248 25.257 5.25254C26.0302 6.20392 26.6132 7.40036 26.9975 8.79535L29.1841 8.21196C28.7183 6.49488 27.9853 5.01525 26.9878 3.78815C24.9661 1.3009 22.0095 0.0264263 18.1998 0H18.1846C14.3827 0.0263345 11.4592 1.30566 9.4951 3.80241C7.74735 6.0242 6.84582 9.11567 6.81552 12.9909L6.81543 13L6.81552 13.0091C6.84582 16.8843 7.74735 19.9759 9.4951 22.1976C11.4592 24.6943 14.3827 25.9737 18.1846 26H18.1998C21.5799 25.9766 23.9624 25.0916 25.9252 23.1307C28.4931 20.5652 28.4157 17.3494 27.5694 15.3753C26.9622 13.9597 25.8045 12.8099 24.2215 12.0505ZM18.3855 17.5374C16.9717 17.617 15.503 16.9825 15.4306 15.6233C15.3769 14.6155 16.1478 13.491 18.4723 13.3571C18.7385 13.3417 18.9997 13.3342 19.2563 13.3342C20.1006 13.3342 20.8905 13.4162 21.6086 13.5732C21.3408 16.9183 19.7697 17.4614 18.3855 17.5374Z" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_13011_173742">
                                        <rect width="36" height="26" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg></button>
                            <button className='bg-[#1e2330] text-white rounded-full py-4 px-4'><svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6393 9.10226V17.3229C22.6393 21.4277 19.2956 24.7715 15.1908 24.7715C13.6087 24.7715 12.1292 24.2669 10.9234 23.4203C8.99929 22.0691 7.74219 19.8371 7.74219 17.3229C7.74219 13.2095 11.0774 9.87432 15.1822 9.87432C15.5243 9.87432 15.8578 9.89998 16.1913 9.94274V14.0732H16.1571C16.0117 14.0305 15.8578 13.9877 15.7039 13.9621H15.6354C15.4815 13.945 15.3361 13.9193 15.1736 13.9193C13.2923 13.9193 11.7615 15.4501 11.7615 17.3314C11.7615 19.2128 13.2923 20.7436 15.1736 20.7436C17.055 20.7436 18.5858 19.2128 18.5858 17.3314V1.22852H22.6308C22.6308 1.57914 22.665 1.92121 22.7248 2.25472C23.0156 3.79404 23.9221 5.11956 25.1963 5.94908C26.0857 6.53059 27.129 6.86411 28.2578 6.86411V10.9091C26.1664 10.9091 24.2199 10.2359 22.6393 9.10226Z" fill="white"></path>
                            </svg></button>
                            <button className='bg-[#1e2330] text-white rounded-full py-4 px-4'><img className='w-8 h-8 invert' src="/Pic/Instagram.svg" alt="" /></button>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Section7
