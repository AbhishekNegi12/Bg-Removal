import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useUser, useClerk } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContextContext.jsx";

const Upload = () => {
  const { removeBg } = useContext(AppContext);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4 mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent py-6 md:py-16">
        See the magic.Try now
      </h1>
      <div className="text-center mb-20">
        {user ? (
          <>
            <input
              onChange={(e) => removeBg(e.target.files[0])}
              accept="image/*"
              type="file"
              name="image-upload"
              id="upload2"
              hidden
              aria-label="Upload your image"
            />
            <label
              className="inline-flex gap-3  px-8 py-3.5 rounded-full cursor-pointer bg-black m-auto hover:scale-105 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-black"
              htmlFor="upload2"
              tabIndex={0}
            >
              <img
                width={20}
                src={assets.upload_btn_icon}
                alt="Upload Button"
              />
              <span className="text-white text-sm">Upload your Image</span>
            </label>
          </>
        ) : (
          <button
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-black m-auto hover:scale-105 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-black text-white text-sm font-semibold"
            onClick={() => openSignIn()}
          >
            <img width={20} src={assets.upload_btn_icon} alt="Upload Button" />
            <span>Sign in to upload your image</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Upload;
