import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit"
import Result from './pages/Result'
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { SignInButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFEFD5]">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result" element={<Result/>}></Route>
        <Route path="/buy" element={<BuyCredit/>}></Route>
        {/* if any other invalid slug is there it will redirect to notfound page */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
