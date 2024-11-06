import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
const Templ1 = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="left p-10">
          <h1 className="text-4xl font-semibold font-serif text-sky-950">
            ASMITA JAIN
          </h1>
          <h3 className="text-xl font-semibold font-serif text-sky-950">
            Content Writer
          </h3>
          <div>
            <h1 className="rounded-md bg-sky-950 w-52   px-3  py-2 mt-10 font-bold text-white ">
              <p className=" text-xl">CAREER OBJECTIVE</p>
            </h1>
            <p className="text-xl font-medium mt-5 ">
              A dynamic and self-driven individuals lookink for a content writer
              position in a reputed organization where i can enhance my content
              writing skills and contribute to the organizations's growth.
            </p>
          </div>

          <div>
            <h1 className="rounded-md bg-sky-950 w-52 text-xl px-3  py-2 mt-10 font-bold text-white  ">
              <p className=" text-xl">EDUCATION</p>
            </h1>

            <ul className="list-disc text-xl font-medium font-serif mt-5 ml-5">
              <li>M.C.A from Osmania University in 2020-22 with GPA 8.5</li>
              <li>
                B. Sc Computer Science, Vivekananda Degree College in 2017-20
                with GPA 8.3
              </li>
              <li>
                Intermediate (MPC) from Sri Chaitanya Jr College in 2015-17 with
                GPA 8.5
              </li>
              <li>
                10th Class from Brilliant Grammar Hight School in 2015 with GPA
                8.7
              </li>
            </ul>
          </div>

          <div>
            <h1 className="rounded-md bg-sky-950 w-52 text-xl px-3  py-2 mt-10 font-bold text-white ">
              <p className=" text-xl">PROJECTS</p>
            </h1>

            <p className="mt-5 text-xl font-medium font-serif">
              2 months internship at ABC Technologies from 1 may 2022 to 30 june
              2022
            </p>
            <div>
              <h1 className="text-xl font-semibold font-serif ">
                key Responsibilities:
              </h1>
              <ul className="list-disc text-xl font-medium font-serif ml-7">
                <li>Reserarch keyword and include them in the articles.</li>
                <li>Write well-researched blog articles with no plagiarism.</li>
                <li>
                  Develop content for multiple platforms such as websites,
                  e-mails and social media.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="rounded-md bg-sky-950 w-52  px-3  py-2 mt-10 font-bold text-white ">
              <p className=" text-xl">SKILLS</p>
            </h1>

            <ul className="list-disc text-xl font-medium font-serif mt-5 ml-5">
              <li>Ability to write unique content </li>
              <li>SEO optimization</li>
              <li>Website analysis</li>
              <li>Detailed reserch skills </li>
              <li>Product description writing </li>
              <li>product description writing </li>
              <li>Excelenet communication skills </li>
              <li>team palyer</li>
              <li>Quick learner</li>
            </ul>
          </div>
        </div>
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
              <p className="w-8/12">
                8-124, Nayagar, Hydrabad, Telengana, 500027
              </p>
            </div>
          </div>
          <div className="mt-10 ">
            <h1 className="text-xl font-bold">PERSIONAL INFORMATION</h1>
            <div className="ml-5 leading-3">
              <h3 className="text-base font-medium mt-5">
                {" "}
                DOB: 04 December 1999
              </h3>
              <h3 className="text-base font-medium">Gender:Female</h3>
              <h3 className="text-base font-medium">
                Father's name:Santosh patra
              </h3>
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
      </div>
    </>
  );
};

export default Templ1;
