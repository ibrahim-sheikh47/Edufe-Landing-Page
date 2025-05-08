import React from "react";
import assets from "../constants/assets";
import translations from "../translations/translations";
import { useLanguage } from "../context/LanguageContext";

const Section9 = () => {
  const { language } = useLanguage();
  const t = translations[language].section9;

  return (
    <div className="md:mx-32 md:mt-32 mx-5 mt-10">
      <div className="flex justify-center md:gap-5 gap-2 md:text-[56px] text-[16px] items-center md:leading-[70px] leading-[30px] font-bold text-[#141414]">
        <img src={assets.sparkleIcon} className="md:w-[76px] w-10 h-10 md:h-[76px]" alt="" />
        {t.why}
        <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
          {t.investors} <br />
        </p>
        <p>{t.retireEarlier}</p>
      </div>

      <div className="flex items-end justify-center md:mt-20 mt-10 md:gap-40 gap-10">
        <div className="flex flex-col gap-3 items-center">
          <img src={assets.retireIcon1} className="md:w-full md:h-full w-15 h-15" alt="" />
          <p className="md:text-lg text-[16px] font-medium text-[#868686]">{t.atAge35}</p>
          <p className="md:text-3xl text-xl font-bold text-[#141414]">{t.investing}</p>
        </div>
        <div className="text-[#868686] md:text-5xl text-3xl font-bold">=</div>
        <div className="flex flex-col gap-3 items-center">
          <img src={assets.retireIcon2} className="md:w-[100px] md:h-[100px] w-15 h-15" alt="" />
          <p className="md:text-lg text-[16px] font-medium text-[#868686]">{t.atAge55}</p>
          <p className="md:text-3xl text-xl font-bold text-[#141414]">{t.earlyRetirement}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:mt-20 mt-5 gap-5 md:gap-10 justify-center">
        <div className="border border-[#D9D9D980] rounded-[40px] md:py-10 py-5 md:px-8 px-4">
          <p className="md:text-2xl text-lg font-semibold text-[#141414]">
            {t.monthlyInvestorsRetire} <br className="md:block hidden" />
          </p>
        </div>
        <div className="border border-[#D9D9D980] rounded-[40px] md:py-10 py-5 md:px-8 px-4">
          <p className="md:text-2xl text-lg font-semibold text-[#141414]">
            {t.investorsOutperformSavers} <br className="md:block hidden" />
          </p>
        </div>
      </div>

      <div className="border border-[#D9D9D980] rounded-[40px] py-10 px-8 mx-auto mt-5 md:mt-10 md:w-[500px]">
        <p className="md:text-2xl text-lg font-semibold text-[#141414]">
          {t.edufeHelps} <br className="md:block hidden" />
        </p>
      </div>
    </div>
  );
};

export default Section9;
