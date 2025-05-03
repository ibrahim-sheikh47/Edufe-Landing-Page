import React from "react";
import assets from "../constants/assets";
import CustomButton from "../components/CustomButton";

const Section12 = () => {
  return (
    <div className="m-32 mb-0 ">
      <div className="flex justify-center gap-2 text-[56px] leading-[70px] font-bold text-[#141414] ">
        Your
        <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
          Money <br />
        </p>
        <img src={assets.coinsIcon} className="w-[76px] h-[76px]" alt="" />
        <p> Deserves More</p>
      </div>
      <div className="flex justify-center gap-5 mt-20">
        <div className="border border-[#D9D9D980] rounded-[40px] py-10 px-8 flex items-center gap-5 w-[540px]">
          <img src={assets.inflationSvg} alt="" />
          <div>
            <p className="text-3xl font-bold text-[#141414]">
              Inflation is Constant
            </p>
            <p className="text-[#868686] font-medium text-lg mt-1">
              And the banks won’t protect you
            </p>
          </div>
        </div>
        <div className="border border-[#D9D9D980] rounded-[40px] py-10 px-8 flex items-center gap-5 w-[540px]">
          <img src={assets.rocketSvg} alt="" />
          <div>
            <p className="text-3xl font-bold text-[#141414]">
            Edufe is Fast, Proven
            </p>
            <p className="text-[#868686] font-medium text-lg mt-1">
            Insured, and made for Hondurans
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <CustomButton
          label="Download App"
          bgColor="bg-[#31C440]"
          hoverBgColor="hover:bg-[#2AAD37]"
          textColor="text-white"
          fontWeight="font-semibold"
          textSize={"text-lg my-10"}
          width="w-[230px]"
        />
        <p className="text-2xl font-medium text-[#141414]">And start earning monthly income in 30 seconds</p>
      </div>
    </div>
  );
};

export default Section12;
