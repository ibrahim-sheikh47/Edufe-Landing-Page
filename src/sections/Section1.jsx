import React from "react";
import CustomButton from "../components/CustomButton";


const Section1 = () => {
  return (
    <div className="mt-15 justify-center">
      <div className=" mx-auto text-center text-[56px] leading-[70px] font-bold text-[#141414] ">
        Turn Your Money Into{" "}
        <span className="bg-[#114A55] text-white rounded-lg p-1 px-2">
          Monthly
        </span>{" "}
        <br />{" "}
        <span className="bg-[#114A55] text-white rounded-lg p-1 px-2">
          Income
        </span>{" "}
        <span className="italic font-medium"> - Invest in 30 Seconds</span>
      </div>
      <p className="text-lg text-[#868686] text-center mt-5">
        Edufe is the first app in Honduras that helps you beat inflation and{" "}
        <br /> grow your wealth with monthly returns between 12% and 18%, all{" "}
        <br /> through a fast, secure, and 100% mobile experience
      </p>

      <div className="flex justify-center mt-8 gap-4">
        <CustomButton
          label="Start Investing"
          bgColor="bg-[#31C440]"
          hoverBgColor="hover:bg-[#2AAD37]"
        />
        <CustomButton
          label="Learn More"
          bgColor=""
          border="border-[#D9D9D9] border-[1.5px]"
          textColor="text-black"
        />
      </div>
    </div>
  );
};

export default Section1;
