import React from "react";

const Index = () => {
  return (
    <div className="pt-[100px] pl-[100px] bg-[#010108]">
      {/* who we are */}
      <div className="flex items-center gap-10">
        <p>
          <span className="span text-[#0beade]">01&nbsp;&nbsp;|</span>
          <span className="text-wrapper-2">&nbsp;</span>
          <span className="text-wrapper-3">WHO WE ARE</span>
        </p>
        <div>
          <img src="./Line1.png" alt="" />
        </div>
      </div>
      {/* flicker paragraph */}
      <div className="flex  mt-[50px]">
        <div className=" -translate-y-5">
          <img src="./Group2.png" alt="" />
        </div>
        <div className="w-[40vw]">
          <h1 className="text-[30px] font-bold ">
            FLICKER is an advertising and marketing agency based in Egypt that
            Desires to provide and enhance a creative marketing content within
            Egypt and worldwide
          </h1>
          <h1 className="text-[#C6C6C6] mt-7 text-[22px]">
            {" "}
            Desires to provide and enhance a creative marketing content within
            Egypt and worldwide.
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mt-10">
          <img src="./Group15.png" alt="image" />
        </div>
        <ul className="flex flex-col gap-2 -translate-y-[90px]">
          <li className=" text-[20px]  flex items-center gap-3">
            <div>
              <img src="./checkIcon.png" alt="" />
            </div>
            <h1 className="text-[#C6C6C6]">
              Build and establish brands by combining strategic solutions and
              creativity
            </h1>
          </li>
          <li className=" text-[20px]  flex items-center gap-3">
            <div>
              <img src="./checkIcon.png" alt="" />
            </div>
            <h1 className="text-[#C6C6C6]">
              Implementing a wide and comprehensive range of marketing services
            </h1>
          </li>
          <li className=" text-[20px]  flex items-center gap-3">
            <div>
              <img src="./checkIcon.png" alt="" />
            </div>
            <h1 className="text-[#C6C6C6]"> Desires to provide and enhance a creative marketing</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
