import React from "react";
import assets from "../constants/assets";

const Section8 = () => {
  return (
    <div className="mt-20 container mx-auto px-4 py-16 max-w-7xl">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[70px] font-bold text-[#141414]">
        <img
          src={assets.moneyMultipleIcon}
          className="w-16 h-16 lg:w-[76px] lg:h-[76px]"
          alt="Money Multiple Icon"
        />

        <div>
          <p>
            Watch Your
            <span className="bg-[#FF9F2F] text-white rounded-lg p-1 px-2 ml-2 inline-block">
              Money
            </span>
          </p>
          <p className="mt-2">
            <span className="bg-[#114A55] text-white rounded-lg p-1 px-2 inline-block">
              Multiple
            </span>{" "}
            Over Time
          </p>
        </div>
      </div>

      {/* Calculator & Graph Section */}
      <div className="mt-16 md:mt-20">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold">
          Use our interactive compound interest{" "}
          <br className="hidden md:block" />
          calculator to simulate how your investment{" "}
          <br className="hidden md:block" />
          grows month by month
        </p>

        {/* Graph with Timeline */}
        <div className="relative mt-10 md:mt-20">
          <img
            src={assets.graphImg}
            className="w-full h-auto md:h-[500px] lg:h-[675px] object-cover"
            alt="Investment Growth Graph"
          />

          {/* Timeline Labels - Using responsive positioning */}
          <div className="absolute bottom-20 -left-9 md:bottom-5 w-full flex justify-center">
            <div className="flex items-center justify-between w-3/4 md:w-2/3 lg:w-full max-w-2xl gap-50">
              <p className="text-sm md:text-base font-medium">1Y</p>
              <p className="text-sm md:text-base font-medium">5Y</p>
              <p className="text-sm md:text-base font-medium">10Y</p>
              <p className="text-sm md:text-base font-medium">15Y</p>
              <p className="text-sm md:text-base font-medium">20Y</p>
            </div>
          </div>
        </div>

        {/* Compound Button */}
        <div className="flex justify-center mt-10 md:mt-20">
          <img
            src={assets.compoundBtn}
            className="w-auto h-auto"
            alt="Calculate Compound Interest"
          />
        </div>
      </div>
    </div>
  );
};

export default Section8;
