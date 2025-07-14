import React from 'react'
import { assets } from '../assets/assets'
import EraseLogo from '../assets/EraseLogo.png';

const Footer = () => {
  return (
    <div className='px-4 py-3 flex items-center justify-between gap-4 lg:px-44'>
        <img src={EraseLogo} className='h-13 w-auto' alt="" />
        <p className='flex-1 pl-4 text-wm text-gray-500 max-sm:hidden'>Copyright @Abhishek | All right reserved.</p>
        <div className=' flex gap-1'>
            <img width={40} src={assets.facebook_icon} alt="" />
            <img width={40} src={assets.twitter_icon} alt="" />
            <img width={40} src={assets.google_plus_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer