import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";

const Right = () => {
  return (
    <div className="right text-white bg-sky-950 h-fullscreen w-6/12 p-5">
      <div className="w-36 h-40 ml-36 rounded-md bg-white">
        <image src="" />
      </div>
      <div className="mt-10 flex">
        <TfiEmail className="text-4xl font-extrabold" />
        <div className="text-sm font-sans font-semibold ml-2">
          <p>Email:</p>
          <p>saswatp813@gmail.com</p>
        </div>
      </div>
      <div className="flex mt-10">
        <PiPhoneCallBold className="text-4xl font-extrabold" />
        <div className="text-sm font-sans font-semibold ml-2">
          <p>Mobile No:</p>
          <p>6372824345</p>
        </div>
      </div>
      <div className="flex mt-10">
        <IoHome className="text-4xl font-extrabold" />
        <div className="text-sm font-sans font-semibold ml-2">
          <p>Address:</p>
          <p className="w-8/12">8-124, Nayagar, Hydrabad, Telengana, 500027</p>
        </div>
      </div>
      <div className="mt-10 ">
        <h1 className="text-xl font-bold">PERSIONAL INFORMATION</h1>
        <div className="ml-5 leading-3">
          <h3 className="text-base font-medium mt-5"> DOB: 04 December 1999</h3>
          <h3 className="text-base font-medium">Gender:Female</h3>
          <h3 className="text-base font-medium">Father's name:Santosh patra</h3>
          <h3 className="text-base font-medium">Nationality:Indian</h3>
          <h3 className="text-base font-medium">
            LAnguage Known:English & hindi
          </h3>
          <h3 className="text-base font-medium">
            Intrest:Reading books & Playing chess
          </h3>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-sans font-bold">Links</h1>
        <h1 className="text-lg font-semibold mt-2">Blog:</h1>
        <p className="text-blue-600">links</p>

        <h1 className="text-lg font-semibold mt-5">LinkedIN:</h1>
        <p className="text-blue-600">links</p>
      </div>
    </div>
  );
};

export default Right;
