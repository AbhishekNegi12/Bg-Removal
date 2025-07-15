import React, { useContext } from 'react'
import {  plans } from '../assets/assets'
import EraseLogo from '../assets/EraseLogo.png';
import { AppContext } from '../context/AppContextContext';
import { useNavigate } from 'react-router-dom';
import { useAuth, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const BuyCredit = () => {

  const {backendUrl,loadCreditsData} = useContext(AppContext)

  const navigate = useNavigate();
  const {getToken} = useAuth();
  const {user} = useUser()

  const initPay = (order) => {
    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded. Please check your internet connection.");
      return;
    }
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response)=> {
        console.log(response);
        // You can add further logic here, e.g. verify payment, update credits, etc.
        const token = await getToken()
        try {
          const {data} = await axios.post(backendUrl+'/api/user/verify-razor',response,{headers:{token}})
          if(data.success){
            loadCreditsData()
            navigate('/')
            toast.success('Credits Added');

          }

        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  const paymentRazorpay = async (planId) => {
    try {
      const token = await getToken();
      const clerkId = user?.id
      const { data } = await axios.post(backendUrl + '/api/user/pay-razor', { planId,clerkId }, { headers: { token } });
      if (data.success && data.order) {
        initPay(data.order);
      } else {
        toast.error(data.message || "Unable to initiate payment.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 bg-[#FFEFD5]'>
      <button className='border-2 border-black px-10 py-2 rounded-full mb-6 text-black font-bold bg-white shadow hover:bg-black hover:text-white transition-all duration-300'>Our Plans</button>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-12 bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent tracking-tight">Choose the plan that's right for you</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((item)=>(
          <div key={item.id} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border-2 border-black hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img width={48} src={EraseLogo} alt="Erase Logo" className="mb-4" />
            <p className="text-xl font-bold mb-2 text-black uppercase tracking-wider">{item.id}</p>
            <p className="text-gray-700 mb-4 text-base">{item.desc}</p>
            <p className="mb-6 text-2xl font-extrabold text-black">
              <span className=''>${item.price}</span>
              <span className="text-base font-medium text-gray-500"> / {item.credits} credits</span>
            </p> 
            <button onClick={()=>paymentRazorpay(item.id)} className="w-full px-6 py-2 rounded-full bg-black text-white font-semibold shadow hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit