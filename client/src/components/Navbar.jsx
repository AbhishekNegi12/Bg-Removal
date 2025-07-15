
import React, { useState } from 'react';
import EraseLogo from '../assets/EraseLogo.png';
import { Link, useNavigate } from 'react-router-dom';

import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextContext.jsx';
import { useEffect } from 'react';


const Navbar = () => {
  const { openSignIn, signOut } = useClerk();
  const { user,isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate()

  const {credit,loadCreditsData}= useContext(AppContext)

  useEffect(()=>{
    if(isSignedIn){
      loadCreditsData()
    }
  },[isSignedIn, loadCreditsData])

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={EraseLogo} alt="Logo" className="h-13 w-auto" />
        </Link>
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-black border-black hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`flex-col md:flex-row md:flex md:items-center md:static absolute left-0 w-full md:w-auto bg-white md:bg-transparent z-20 transition-all duration-200 ease-in-out ${menuOpen ? 'flex top-16' : 'hidden md:flex top-[-9999px]'}`}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 px-4 md:px-0 py-2 md:py-0">
            <li>
              {user ? (
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-black font-semibold text-lg px-2">
                    {user.username || user.firstName || user.emailAddress}
                  </span>
                  <button
                    className="bg-black text-white rounded px-4 py-1 flex items-center justify-center font-semibold text-lg mx-2 whitespace-nowrap hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                    onClick={() => navigate('/buy')}
                    title="Buy more credits"
                  >
                    Credits: {credit}
                  </button>
                  <UserButton afterSignOutUrl="/" />
                  <button
                    onClick={() => signOut()}
                    style={{ backgroundColor: 'black' }}
                    className="w-full px-6 py-2 rounded text-white text-2xl font-semibold shadow cursor-pointer bg-black m-auto hover:scale-105 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => openSignIn()}
                  style={{ backgroundColor: 'black' }}
                  className="w-full px-6 py-2 rounded text-white text-2xl font-semibold shadow cursor-pointer bg-black m-auto hover:scale-105 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Get Started
                </button>
              )}
            </li>
            {/* <li>
              <Link to="/signup" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium">Signup</Link>
            </li>
            <li>
              <Link to="/about" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"></Link>
            </li> */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
