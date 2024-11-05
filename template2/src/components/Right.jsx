import React from "react";
import { IoCall } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Right = () => {
  return (
    <div className=" mt-10 ">
      <div className="w-96">
        <h1 className="text-8xl w-40">
          CLIFF <span className="font-extrabold">HANGER</span>
        </h1>
        <p className="text-3xl font-medium mt-3">Digital Marketing Manager</p>
      </div>
      <div>
        <div className="bg-gray-300 rounded-full w-12 h-12  mt-14 ">
          <h1 className="text-3xl font-bold absolute mt-2 ml-3">
            PROFESSIONAL SKILLS
          </h1>
        </div>

        <ul className="text-lg font-sans font-normal w-[800px] mt-3">
          <li>SEO and Marketing Analytics</li>
          <li>Social media startergy</li>
          <li>Marketing</li>
          <li>Web content development</li>
          <li>Copywriting</li>
          <li>Corporate blogging</li>
          <li>Project management</li>
        </ul>
      </div>
      <div>
        <div className="bg-gray-300 rounded-full w-12 h-12  mt-7  ">
          <h1 className="text-3xl font-bold absolute mt-2 ml-3">
            PERSONAL SKILLS
          </h1>
        </div>
        <ul className="text-lg font-sans font-normal w-[800px] mt-3">
          <li>Creative spirit</li>
          <li>Reliable and professional</li>
          <li>Time management</li>
          <li>Team player</li>
          <li>Fast learner</li>
          <li>Motivated</li>
        </ul>
      </div>
      <div>
        <div className="bg-gray-300 rounded-full w-12 h-12  mt-7 ">
          <h1 className="text-3xl font-bold absolute mt-2 ml-3">CONTACT</h1>
        </div>

        <ul className=" mt-5 font-sans">
          <li className="flex ">
            <IoCall className="text-2xl font-bold" />
            <p className="text-lg ml-4 ">+91 6372824345</p>
          </li>
          <li className="flex mt-3">
            <TbWorld className="text-2xl font-bold" />{" "}
            <p className="text-lg ml-4 ">www.theLink.com</p>
          </li>
          <li className="flex mt-3">
            <MdEmail className="text-2xl font-bold" />
            <p className="text-lg ml-4 ">saswatp813@gmail.com</p>
          </li>
          <li className="flex mt-3">
            <FaLocationDot className="text-2xl font-bold" />
            <p className="text-lg ml-4 ">
              445, Chhatia, Jajapur, Odisha, 754023
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Right;
