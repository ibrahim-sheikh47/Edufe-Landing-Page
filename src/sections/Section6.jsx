import React from "react";
import assets from "../constants/assets";
import GettingStartedCard from "../components/GettingStartedCard";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section6 = () => {

  const { language } = useLanguage();
    const t = translations[language].section6;


  return (
    <div className="md:mt-32 md:mx-32 mx-5 mt-10 overflow-hidden">
      <div className="flex gap-5 md:text-[56px] text-xl leading-[30px] md:leading-[70px] font-bold text-[#141414] justify-center md:justify-start">
        <img
          src={assets.gettingStartedIcon}
          className="md:w-[90px] w-[50px] h-[40px] md:h-[76px]"
          alt=""
        />

        <div>
          <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2 w-[max-content]">
            {t.gettingStarted} <br />
          </p>
          <p>{t.steps}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5 md:mt-20 mt-5 md:mb-20 md:mx-10">
        <GettingStartedCard
          title={t.step1Title}
          subtitle={t.step1Subtitle}
        >
          <div className="flex absolute md:bottom-10 bottom-7 left-8 md:left-12 mt-5 w-full">
            <img
              src={assets.downloadIcon1}
              className="md:h-[100px] h-[60px] md:-ml-5 -ml-3"
              alt=""
            />
            <img
              src={assets.downloadIcon2}
              className="md:h-[100px] h-[60px] md:-ml-5 -ml-3"
              alt=""
            />
            <img
              src={assets.downloadIcon3}
              className="md:h-[100px] h-[60px] md:-ml-5 -ml-3"
              alt=""
            />
          </div>
        </GettingStartedCard>

        <GettingStartedCard
          title={t.step2Title}
          subtitle={t.step2Subtitle}
        >
          <div className="flex absolute md:bottom-10 bottom-7 left-8 md:left-12 mt-5 w-full">
            <img
              src={assets.investmentIcon1}
              className="md:h-[100px] h-[60px] md:-ml-5 -ml-3"
              alt=""
            />
            <img
              src={assets.investmentIcon2}
              className="md:h-[100px] h-[60px] md:-ml-5 -ml-3"
              alt=""
            />
            <img
              src={assets.investmentIcon3}
              className="md:h-[100px] h-[60px] md:-ml-5 -ml-3"
              alt=""
            />
          </div>
        </GettingStartedCard>
        <GettingStartedCard
          title={t.step3Title}
          subtitle={t.step3Subtitle}
        >
          <div className="flex items-center gap-5 absolute md:bottom-10 bottom-7 mt-5">
            <img src={assets.amountDragger} className="md:h-[85px] h-[50px]" alt="" />
            <button className="md:h-[85px] h-[50px] bg-[#F3F3F3] rounded-3xl w-[120px] md:w-[160px]">
              {" "}
              {t.years}
            </button>
          </div>
        </GettingStartedCard>
        <GettingStartedCard
          title={t.step4Title}
          subtitle={t.step4Subtitle}
        >
          <div className="absolute md:bottom-0 bottom-5 mt-5 w-full">
            <img
              src={language === "es" ? assets.investFundsButtonSpanish : assets.investFundsButton}
              className="md:h-[180px] h-[90px] -ml-5 md:-ml-8"
              alt=""
            />
          </div>
        </GettingStartedCard>
      </div>
    </div>
  );
};

export default Section6;
