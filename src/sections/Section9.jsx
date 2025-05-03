import React from "react";
import assets from "../constants/assets";

const Section9 = () => {
  return (
    <div className="mx-32 mt-32">
      <div className="flex justify-center gap-5 text-[56px] leading-[70px] font-bold text-[#141414] ">
        <img src={assets.sparkleIcon} className="w-[76px] h-[76px]" alt="" />
        Why
        <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
          Investors   <br />
        </p>
        <p> Retire Earlier</p>
      </div>
      <div className="flex items-end justify-center mt-20 gap-40">
        <div className="flex flex-col gap-3 items-center">
            <img src={assets.retireIcon1} alt="" />
            <p className="text-lg font-medium text-[#868686]">At Age 35</p>
            <p className="text-3xl font-bold text-[#141414]">Investing</p>
        </div>
        <div className="text-[#868686] text-5xl font-bold">=</div>
        <div className="flex flex-col gap-3 items-center">
            <img src={assets.retireIcon2} className="w-[100px] h-[100px]" alt="" />
            <p className="text-lg font-medium text-[#868686]">At Age 55</p>
            <p className="text-3xl font-bold text-[#141414]">Early Retirement</p>
        </div>
      </div>
      <div className="flex items-center mt-20 gap-10 justify-center">
        <div className="border border-[#D9D9D980] rounded-[40px] py-10 px-8">
            <p className="text-2xl font-semibold text-[#141414]">People who invest monthly are 5x more likely <br /> to retire by age 55</p>
        </div>
        <div className="border border-[#D9D9D980] rounded-[40px] py-10 px-8">
            <p className="text-2xl font-semibold text-[#141414]">Over 20 years, investors outperform savers by <br /> 240%, based on international financial data </p>
        </div>
      </div>
      <div className="border border-[#D9D9D980] rounded-[40px] py-10 px-8 w-[max-content] mx-auto mt-10">
            <p className="text-2xl font-semibold text-[#141414]">Edufe helps Hondurans build wealth and <br /> independence — starting today  </p>
        </div>
    </div>
  );
};

export default Section9;
