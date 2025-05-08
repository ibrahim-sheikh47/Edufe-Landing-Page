import React from "react";
import assets from "../constants/assets";
import CustomButton from "../components/CustomButton";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section12 = () => {
  const { language } = useLanguage();
  const t = translations[language].section12;

  return (
    <div className="md:m-32 mx-5 mb-0 mt-10">
      <div className="flex justify-center gap-2 md:text-[56px] text-lg leading-[30px] md:leading-[70px] font-bold text-[#141414]">
        {t.headingStart}
        <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
          {t.headingHighlight} <br />
        </p>
        <img
          src={assets.coinsIcon}
          className="md:w-[76px] w-10 md:h-[76px] h-10"
          alt=""
        />
        <p>{t.headingEnd}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-5 mt-20">
        <div className="border border-[#D9D9D980] rounded-[40px] py-5 md:py-10 px-4 md:px-8 flex items-center gap-5 md:w-[540px]">
          <img
            src={assets.inflationSvg}
            className="md:w-25 md:h-25 w-15 h-15"
            alt=""
          />
          <div>
            <p className="md:text-3xl text-lg font-bold text-[#141414]">
              {t.card1Title}
            </p>
            <p className="text-[#868686] font-medium md:text-lg text-sm mt-1">
              {t.card1Subtitle}
            </p>
          </div>
        </div>
        <div className="border border-[#D9D9D980] rounded-[40px] md:py-10 py-5 md:px-8 px-4 flex items-center gap-5 md:w-[540px]">
          <img
            src={assets.rocketSvg}
            className="md:w-25 md:h-25 w-15 h-15"
            alt=""
          />
          <div>
            <p className="md:text-3xl text-lg font-bold text-[#141414]">
              {t.card2Title}
            </p>
            <p className="text-[#868686] font-medium md:text-lg text-sm mt-1">
              {t.card2Subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <CustomButton
          label={t.buttonLabel}
          bgColor="bg-[#31C440]"
          hoverBgColor="hover:bg-[#2AAD37]"
          textColor="text-white"
          fontWeight="font-semibold"
          textSize={"text-lg my-5 md:my-10"}
          width="w-[230px]"
        />
        <p className="md:text-2xl text-lg font-medium text-[#141414]">
          {t.footerText}
        </p>
      </div>
    </div>
  );
};

export default Section12;
