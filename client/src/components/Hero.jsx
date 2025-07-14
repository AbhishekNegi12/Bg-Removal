import React from 'react'
import { assets } from '../assets/assets'
import { useUser, useClerk } from '@clerk/clerk-react';

const Hero = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  return (
    <div className="mt-10 max-w-5xl mx-auto px-4">
      <h1 
        className="text-center text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent tracking-tight"
      >
        Say goodbye to manual cropping and say hello to flawless, background-free images instantly!
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-gray-600 leading-relaxed text-lg">
        <div className="flex-1 flex flex-col items-center p-4">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-xs w-full flex items-center justify-center">
            <img 
              src={assets.header_img} 
              alt="AI background removal preview" 
              className="rounded-xl w-full object-cover" 
            />
          </div>
        </div>
        <div className="flex-1 p-4">
          <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black leading-tight' >
            Remove the <br className='max-md:hidden'/><span className='text-black'> background </span>from <br className='max-md:hidden' /> the images for free
          </h1>
          <div>
            {user ? (
              <>
                <input 
                  type="file" 
                  name="image-upload" 
                  id="upload1" 
                  hidden 
                  aria-label="Upload your image" 
                />
                <label 
                  className='mt-2 inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-black m-auto hover:scale-105 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-black' 
                  htmlFor="upload1"
                  tabIndex={0}
                >
                    <img width={20} src={assets.upload_btn_icon} alt="Upload Button" />
                    <span className='text-white text-sm'>Upload your Image</span>
                </label>
              </>
            ) : (
              <button
                className='mt-2 inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-black m-auto hover:scale-105 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-black text-white text-sm font-semibold'
                onClick={() => openSignIn()}
              >
                <img width={20} src={assets.upload_btn_icon} alt="Upload Button" />
                <span>Sign in to upload your image</span>
              </button>
            )}
          </div>
          <p className="mt-4 text-[15px] text-black">
            Effortlessly remove image backgrounds in seconds with our advanced AI tool! Perfect for e-commerce, designers, and social media, our technology delivers clean, professional edits with just one click. 
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Hero