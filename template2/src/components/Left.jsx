import React from "react";

const Left = () => {
  return (
    <>
      <div className="">
        <div className="bg-black w-5/12 h-56 absolute"></div>
        <img
          src=""
          alt=""
          className="bg-white w-52 h-60 ml-8 relative mt-16 "
        />
        <div className="ml-12 ">
          <div>
            <div className="bg-gray-300 rounded-full w-12 h-12 mt-11  ">
              <h1 className="text-3xl font-bold absolute mt-2 ml-3">
                PROFILE SUMMARY
              </h1>
            </div>

            <p className="text-lg font-sans font-normal w-[600px] mt-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              porro eos. Iusto pariatur ab officia dignissimos adipisci dicta
              necessitatibus tempore! Rerum, quaerat hic! Omnis libero iste
              nostrum eaque laborum quasi autem consequuntur?
            </p>
          </div>
          <div>
            <div>
              {" "}
              <div className="bg-gray-300 rounded-full w-12 h-12 mt-11  ">
                <h1 className="text-3xl font-bold absolute mt-2 ml-3">
                  EDUCATION
                </h1>
              </div>
              <div>
                <h3 className="text-xl font-semibold mt-5">UNIVERSITY NAME</h3>
                <p className="text-lg font-sans font-normal mt-2">
                  Ravenshaw university
                </p>
                <p className="text-lg font-sans font-normal mt-3 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae dignissimos numquam fugit expedita veniam
                  praesentium ab, repudiandae facere unde necessitatibus?
                </p>
              </div>
            </div>
            <div>
              {" "}
              <h3 className="text-xl font-semibold mt-5">UNIVERSITY NAME</h3>
              <p className="text-lg font-sans font-normal mt-2">
                Ravenshaw university
              </p>
              <p className="text-lg font-sans font-normal mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae dignissimos numquam fugit expedita veniam praesentium
                ab, repudiandae facere unde necessitatibus?
              </p>
            </div>
            <div>
              {" "}
              <h3 className="text-xl font-semibold mt-5">UNIVERSITY NAME</h3>
              <p className="text-lg font-sans font-normal mt-2">
                Ravenshaw university
              </p>
              <p className="text-lg font-sans font-normal mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae dignissimos numquam fugit expedita veniam praesentium
                ab, repudiandae facere unde necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
