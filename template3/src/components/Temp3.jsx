import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { WiMoonAltFull } from "react-icons/wi";
import { WiMoonAltNew } from "react-icons/wi";
import { BiHeadphone } from "react-icons/bi";
import { LiaCameraRetroSolid } from "react-icons/lia";
import { GiCommercialAirplane } from "react-icons/gi";
import { SlGameController } from "react-icons/sl";
import { GiOldMicrophone } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";

const Temp3 = () => {
  return (
    <>
      {/* Header */}
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
              <p className="text-lg text-zinc-700 ml-1 ">
                saswatp813@gmail.com
              </p>
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
      <div className="flex justify-evenly">
        {/* Left */}
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
        {/* Right */}
        <div className="mt-10 w-full ml-20">
          <div className="h-[235px]">
            <p className="bg-red-400  text-2xl font-medium text-white ">
              CAREER OBJECTIVE
            </p>
            <p className="w-10/12 mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              deleniti praesentium veritatis asperiores pariatur consectetur
              temporibus, recusandae ab labore optio est illo exercitationem
              perspiciatis, adipisci beatae in rem alias voluptatibus?
            </p>
          </div>
          <div className=" ">
            <p className="bg-red-400  text-2xl font-medium text-white  ">
              ACADEMIC BACKGRAOUND
            </p>
            <div className=" text-zinc-600 text-lg mt-3 leading-6">
              <h1 className="font-semibold text-xl">MASTERAL DEGREE</h1>
              <h2>BS- Information Technology</h2>
              <h2>University of Odisha</h2>
              <ul className="mt-2 text-base list-disc ml-5">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>

            <div className="text-zinc-600 text-lg mt-3 leading-6">
              <h1 className="font-semibold text-xl">BACHELOR DEGREE</h1>
              <h2>BS- Information Technology</h2>
              <h2>University of Odisha</h2>
              <ul className="mt-2 text-base list-disc ml-5">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>

            <div className="text-zinc-600 text-lg mt-3 leading-6">
              <h1 className="font-semibold text-xl">INTERMIDEATE </h1>
              <h2>BS- Information Technology</h2>
              <h2>University of Odisha</h2>
              <ul className="mt-2 text-base list-disc ml-5">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[65px]">
            <p className="bg-red-400  text-2xl font-medium text-white ">
              INTERNSHIPS & PROJECTS COMPLETED
            </p>
            <div className="mt-3">
              <h1 className="text-xl font-semibold">
                Ample App Corp. -IT Support Officer 2020 - Present
              </h1>
              <p className="text-lg">3046 Limer Street, India, Odisha</p>
              <ul className="w-8/12 text-zinc-600 text-base mt-3 leading-6 list-disc ml-5">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  maxime deserunt veniam quasi exercitationem sit?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp3;
