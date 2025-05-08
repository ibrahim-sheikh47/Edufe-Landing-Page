import React from "react";
import BankDisAdvCard from "../components/BankDisAdvCard";
import assets from "../constants/assets";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section3 = () => {
  const { language } = useLanguage();
  const t = translations[language].section3;
  return (
    <div className="md:mt-20 mt-5 justify-center md:mx-32">
      <div className=" mx-auto text-center md:text-[56px] text-xl leading-[30px] md:leading-[70px] font-bold text-[#141414] ">
        {t.keepingYour}{" "}
        <span className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
          {t.money}{" "}
        </span>
        {t.inTheBank}
        <br /> {t.isMakingYouPoorerEveryDay}
      </div>
      <p className="md:text-2xl text-sm text-[#868686] text-center mt-5">
        {t.line1} <br />
        {t.line2}
      </p>

      <div className="md:flex justify-center md:mt-20 gap-7 md:mx-0 mx-5">
        <div className="flex-1">
          <BankDisAdvCard
            title={t.title1}
            subTitle={t.subtitle1}
            img={assets.inflationIcon}
          />
        </div>
        <div className="flex-1">
          <BankDisAdvCard
            title={t.title2}
            subTitle={t.subtitle2}
            img={assets.moneyBagIcon}
          />
        </div>
        <div className="flex-1">
          <BankDisAdvCard
            title={t.title3}
            subTitle={t.subtitle3}
            img={assets.moneyClockIcon}
            imgWidth="md:w-[170px] w-[120px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
