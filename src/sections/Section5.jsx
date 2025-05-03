import React from "react";
import assets from "../constants/assets";

const Section5 = () => {
  return (
    <div className="mt-30 mx-32">
      <div className="flex justify-center items-start gap-5 text-[56px] leading-[70px] font-bold text-[#141414] text-center">
        <div>
          <div className="flex justify-center items-center flex-wrap relative">
            <img
              src={assets.coin1}
              className="absolute -top-15 -left-40"
              alt=""
            />
            <img
              src={assets.coin2}
              className="absolute -bottom-30 -left-8"
              alt=""
            />
            <img
              src={assets.coin3}
              className="absolute -bottom-40 -right-32"
              alt=""
            />
            <span className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
              Invest Better,
            </span>
            <span>Faster,</span>
          </div>
          <div>Safer with Edufe</div>
        </div>
      </div>

      <div className="mt-20 flex gap-5 justify-center">
        <div className="h-[800px] w-[540px] bg-[#31C4401A] rounded-[40px] flex flex-col">
          <div className=" px-7 py-10 ">
            <p className="text-3xl font-bold w-full ">Invest in 30 Seconds</p>

            <p className="text-2xl font-medium text-[#141414] mt-5">
              No paperwork. No waiting. Just open the <br /> app, choose your
              investment, and go
            </p>
          </div>
          <img
            src={assets.money}
            className="w-full h-full overflow-hidden object-fit"
            alt=""
          />
        </div>
        <div>
          <img src={assets.dollar} alt="" />
          <p className="text-[40px] font-bold leading-tight">
            Monthly Returns <br />
            You Can Count On
          </p>
          <p className="text-2xl font-medium mt-5">From 12% to 18%, paid on time, <br />
          every single month</p>
          <div className="h-[800px] w-[540px] mt-5 bg-[#F9F3FF] rounded-[40px] px-7 py-10 flex flex-col">
            <img src={assets.investFundsMob} className="object-contain w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
