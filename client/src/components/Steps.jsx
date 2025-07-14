import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40 '>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4 mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent '>Steps to remove background <br /> from image in seconds</h1>
        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>
            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 '>
                <img className='max-w-9' src={assets.upload_icon} alt="Upload icon" />
                <div>
                    <p className="text-black text-xl font-medium">Upload Image</p>
                    <p className=" text-neutral-500 mt-1 font-medium">Upload your image and let our AI work its magic!</p>
                </div>
            </div>
            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 '>
                <img className='max-w-9' src={assets.remove_bg_icon} alt="Upload icon" />
                <div>
                    <p className="text-black text-xl font-medium">Remove Background</p>
                    <p className=" text-neutral-500 mt-1 font-medium">Remove the background with AI in seconds.</p>
                </div>
            </div>
            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 '>
                <img className='max-w-9' src={assets.download_icon} alt="Upload icon" />
                <div>
                    <p className="text-black text-xl font-medium">Download Image</p>
                    <p className=" text-neutral-500 mt-1 font-medium">Download your image instantly, ready to use!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps