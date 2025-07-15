import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextContext";

const Result = () => {

  const {resultImage, image, setimage, setresultImage} = useContext(AppContext);
  const navigate = useNavigate();
  const handleTryAnother = () => {
    setimage(false);
    setresultImage(false);
    navigate('/');
  };

  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        {/* Image COntainer */}
        <div className="flex flex-column sm:grid grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            {image && (
              <img
                className="rounded-md border"
                src={URL.createObjectURL(image)}
                alt="image w bg"
              />
            )}
          </div>
          {/* Right Side */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Background Remove
            </p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden flex items-center justify-center">
              {resultImage && (
                <img src={resultImage} alt="image wo bg" />
              )}
              {!resultImage && image &&            
                <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
              }
            </div>
          </div>
        </div>
        {/* Button */}
        {resultImage && <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button onClick={handleTryAnother} className="px-8 py-2.5 text-white text-base font-semibold rounded-full bg-black shadow hover:bg-gray-900 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black">
            Try another image
          </button>
          <a 
            className="px-8 py-2.5 text-black text-base font-semibold rounded-full border-2 border-black bg-white shadow hover:bg-gray-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black"
            href={resultImage}
            download
          >
            Download image
          </a>
        </div>}
      </div>
    </div>
  );
};

export default Result;
