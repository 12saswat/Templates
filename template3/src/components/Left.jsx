import React from "react";
import { WiMoonAltFull } from "react-icons/wi";
import { WiMoonAltNew } from "react-icons/wi";
import { BiHeadphone } from "react-icons/bi";
import { LiaCameraRetroSolid } from "react-icons/lia";
import { GiCommercialAirplane } from "react-icons/gi";
import { SlGameController } from "react-icons/sl";
import { GiOldMicrophone } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";

const Left = () => {
  return (
    <div className="mt-10 ">
      <div className="">
        <p className="bg-red-400 pl-10 text-2xl font-medium text-white">
          ABOUT ME
        </p>
        <ul className="ml-10 text-zinc-600 text-lg mt-3 leading-10">
          <li>Date of Birth : Aprill 19, 2001</li>
          <li>Age: 23</li>
          <li>Gender: Male</li>
          <li>Birth of Place: Odisha, India</li>
        </ul>
      </div>
      <div className=" mt-8">
        <p className="bg-red-400 pl-10 text-2xl font-medium text-white">
          SKILLS
        </p>
        <table className="ml-10 text-zinc-600 text-lg leading-10 mt-3">
          <tr className="">
            <td>Creativity</td>

            <td className="flex text-2xl text-red-700 mt-3 ml-4">
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltFull />
            </td>
          </tr>

          <tr>
            <td>Leadership</td>

            <td className="flex text-2xl text-red-700 mt-3 ml-4">
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltFull />
            </td>
          </tr>
          <tr>
            <td>Communictaion</td>

            <td className="flex text-2xl text-red-700 mt-3 ml-4">
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltFull />
            </td>
          </tr>
          <tr>
            <td>Collaboration</td>

            <td className="flex text-2xl text-red-700 mt-3 ml-4">
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltFull />
            </td>
          </tr>
          <tr>
            <td>Inquisitiveness</td>

            <td className="flex text-2xl text-red-700 mt-3 ml-4">
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltNew />
              <WiMoonAltFull />
            </td>
          </tr>
        </table>
      </div>
      <div className="mt-8">
        <p className="bg-red-400 pl-10 text-2xl font-medium text-white">
          LANGUAGES
        </p>
        <table className="ml-10 text-zinc-600 text-lg mt-3 leading-10 ">
          <tr className="">
            <td>Java</td>
            <td className="pl-8">C++</td>
          </tr>
          <tr>
            <td>SQL</td>
            <td className="pl-8">Python</td>
          </tr>
          <tr>
            <td>C#</td>
            <td className="pl-8">iOS</td>
          </tr>
          <tr>
            <td>Java Script</td>
            <td className="pl-8">PHP</td>
          </tr>
        </table>
      </div>
      <div className="mt-8">
        <p className="bg-red-400 pl-10 text-2xl font-medium text-white">
          INTEREST
        </p>
        <div className="ml-10 flex flex-wrap w-96  gap-5 mt-3 ">
          <BiHeadphone className="text-7xl" />
          <LiaCameraRetroSolid className="text-7xl" />
          <GiCommercialAirplane className="text-7xl" />
          <SlGameController className="text-7xl" />
          <GiOldMicrophone className="text-7xl" />
          <IoFootballOutline className="text-7xl" />
          <GiNotebook className="text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default Left;
