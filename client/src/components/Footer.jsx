import React from 'react'
import { assets } from '../assets/assets'
import EraseLogo from '../assets/EraseLogo.png';

const Footer = () => {
  return (
    <div className='px-4 py-3 flex flex-col gap-2 lg:flex-row items-center justify-between lg:px-44'>
      <img src={EraseLogo} className='h-13 w-auto' alt="" />
      <div className='flex-1 pl-4 text-wm text-gray-500 flex flex-col items-center'>
        <p className='text-center'>Copyright @Abhishek | All right reserved.</p>
        <p className='mt-1 text-center'>Made with <span style={{color: '#FFD600'}}>💛</span> by Abhishek Negi </p>
      </div>
      <div className='flex gap-1'>
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer