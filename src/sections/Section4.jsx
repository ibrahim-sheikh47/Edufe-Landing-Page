import React from "react";
import assets from "../constants/assets";

import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section4 = () => {
  const { language } = useLanguage();
  const t = translations[language].section4;

  return (
    <div className="md:mt-32 mt-5 justify-center md:mx-32">
      <div className="flex gap-5 md:text-[56px] text-xl leading-[30px] md:leading-[70px] font-bold text-[#141414] md:justify-start justify-center">
        <img
          src={assets.coverageIcon}
          className="md:w-[90px] w-[60px] h-[50px] md:h-[76px]"
          alt=""
        />

        <div>
          <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
            {t.sectionTitle1} <br />
          </p>
          <p>{t.sectionTitle2}</p>
        </div>
      </div>
      <div className="md:mx-28 md:mt-20 mt-5 flex items-center border-2 border-[#D9D9D980] md:px-8 md:py-10 rounded-[40px] px-4 py-5 mx-5">
        <div>
          <img
            src={assets.CheckedShadow}
            className="w-[100px] block md:hidden mx-auto h-[100px]"
            alt=""
          />

          <p className="md:text-3xl text-lg font-bold">
            {t.investmentProtected}
          </p>
          <p className="md:text-lg text-sm text-[#868686] mt-5">
            {t.descriptionLine1} <br/>
            {t.descriptionLine2} <br/>
            {t.descriptionLine3} <br/>
            {t.descriptionLine4} <br/>
            {t.descriptionLine5} <br/>
            {t.descriptionLine6} 
          </p>
        </div>
        <div className="ml-auto md:flex hidden">
          <img
            src={assets.CheckedShadow}
            className="w-[190px] h-[190px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
