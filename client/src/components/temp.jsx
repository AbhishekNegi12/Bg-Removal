import React from 'react'
import { testimonialsData } from '../assets/assets'
import { BsChatRightQuote } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div>
      {/* Title */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4 mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5'>Customer Testimonials</h1>

      <div className="">
        {testimonialsData.map((item,index)=>{
          <div key={index}>
            <p><BsChatRightQuote /></p>
            <p>{item.text}</p>
            <div>
              <img src={item.image} alt="" />
              <div>
                <p>{item.author}</p>
                <p>{item.jobTitle}</p>
              </div>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}

export default Testimonials