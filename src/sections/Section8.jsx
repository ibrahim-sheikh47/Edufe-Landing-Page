import React from "react";
import assets from "../constants/assets";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section8 = () => {


  const { language } = useLanguage();
  const t = translations[language].section8;
  return (
    <div className="md:mt-20 container mx-auto px-4 py-16 md:max-w-7xl">
      {/* Heading Section */}
      <div className="flex items-start gap-5 text-2xl md:text-[56px] leading-[30px] md:leading-[70px] font-bold text-[#141414]">
        <img
          src={assets.moneyMultipleIcon}
          className="w-10 h-10 lg:w-[76px] lg:h-[76px]"
          alt="Money Multiple Icon"
        />

        <div>
          <p>
            {t.watchYour}
            <span className="bg-[#FF9F2F] text-white rounded-lg p-1 px-2 ml-2 inline-block">
              {t.money}
            </span>
          </p>
          <p className="mt-2">
            <span className="bg-[#114A55] text-white rounded-lg p-1 px-2 inline-block">
              {t.multiple}
            </span>{" "}
            {t.overTime}
          </p>
        </div>
      </div>

      {/* Calculator & Graph Section */}
      <div className="mt-10 md:mt-20">
        <p className="text-lg md:text-2xl lg:text-3xl font-bold md:w-[650px]">
          {t.description}
        </p>

        {/* Graph with Timeline */}
        <div className="relative mt-10 md:mt-20">
          <img
            src={assets.graphImg}
            className="w-full h-auto md:h-[500px] lg:h-[675px] object-cover"
            alt="Investment Growth Graph"
          />

          {/* Timeline Labels - Using responsive positioning */}
          {/* <div className=" md:block hidden absolute md:bottom-20 md:-left-9 left-8 bottom-2 w-full flex justify-center">
            <div className="flex items-center justify-between w-3/4 md:w-2/3 lg:w-full max-w-2xl md:gap-50">
              <p className="text-sm md:text-base font-medium">1Y</p>
              <p className="text-sm md:text-base font-medium">5Y</p>
              <p className="text-sm md:text-base font-medium">10Y</p>
              <p className="text-sm md:text-base font-medium">15Y</p>
              <p className="text-sm md:text-base font-medium">20Y</p>
            </div>
          </div> */}
        </div>

        {/* Compound Button */}
        <div className="flex justify-center mt-10 md:mt-20">
          <img
            src={language === "es" ? assets.compoundBtnSpanish : assets.compoundBtn}
            className="w-auto h-auto"
            alt="Calculate Compound Interest"
          />
        </div>
      </div>
    </div>
  );
};

export default Section8;
