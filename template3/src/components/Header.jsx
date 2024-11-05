import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="bg-red-400 w-full h-32 relative">
          {" "}
          <h1 className="text-5xl left-40">
            <p className="text-8xl relative font-thin top-8  ml-96 text-white">
              KEVON LEE
            </p>
          </h1>
        </div>
        <div className="bg-red-600 w-full h-12  ">
          <h1 className="font-bold text-3xl relative ml-96 top-2 tight text-white">
            IT Profrsional Graduate
          </h1>
        </div>

        <img
          src=""
          alt=""
          className="bg-white w-56 h-64 absolute top-4 ml-10"
        />
        <div className="flex justify-center gap-5 mt-2 mr-20">
          <div className="flex ">
            <IoMailSharp className="text-red-600 text-2xl mt-1" />
            <p className="text-lg text-zinc-700 ml-1 ">saswatp813@gmail.com</p>
          </div>
          <div className="flex">
            <IoIosCall className="text-red-600 text-2xl " />
            <p className="text-lg text-zinc-700 ">+91 6372824345</p>
          </div>
          <div className="flex">
            <HiLocationMarker className="text-red-600 text-2xl " />
            <p className="text-lg text-zinc-700 ">
              435, Chhatia, Jajpur, Odisha, 754023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
