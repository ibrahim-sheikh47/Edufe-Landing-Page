import React from "react";
import assets from "../constants/assets";

const Section4 = () => {
  return (
    <div className="mt-32 justify-center mx-32">
      <div className="flex gap-5 text-[56px] leading-[70px] font-bold text-[#141414] ">
        <img src={assets.coverageIcon} className="w-[90px] h-[76px]" alt="" />

        <div>
          <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
            50% Coverage <br />
          </p>
          <p>for Peace of Mind</p>
        </div>
      </div>
      <div className="mx-28 mt-20 flex items-center border-2 border-[#D9D9D980] px-8 py-10 rounded-[40px]">
        <div>
            <p className="text-3xl font-bold">Your Investment, Protected & Secure</p>
            <p className="text-lg text-[#868686] mt-5">We're proud to share that Seguros Equidad <br />
            (https://www.segurosequidad.hn/) adds an extra layer of <br /> trust and protection to your investment on Edufe. In the <br /> unlikely event of an emergency, they provide coverage of at <br /> least 50%, giving our investors greater peace of mind and <br /> reinforcing the security behind every opportunity.</p>
        </div>
        <div className="ml-auto">
            <img src={assets.CheckedShadow} className="w-[190px] h-[190px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
