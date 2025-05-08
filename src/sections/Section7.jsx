import React from "react";
import assets from "../constants/assets";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section7 = () => {
  const { language } = useLanguage();
  const t = translations[language].section7;

  return (
    <div className="md:mx-32 md:mt-32 mt-10 mx-5">
      <div className="flex items-center justify-center md:gap-5 gap-2 md:text-[56px] text-xl leading-[30px] md:leading-[70px] font-bold text-[#141414] ">
        <img
          src={assets.versusIcon}
          className="md:w-[76px] md:h-[76px] w-[40px] h-[40px]"
          alt=""
        />

        <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
          EDUFE <br />
        </p>
        <p className="md:text-[56px] text-xl"> vs {t.traditionalBanks}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full mt-5 md:mt-20 text-xl font-medium">
        {/* Left Column - Features */}
        <div className="w-full md:w-1/3 space-y-6 mt-5 md:text-xl  text-[16px] pl-5 md:pl-20">
          <p className="font-bold md:text-3xl text-xl mb-10">{t.features}</p>
          <p>{t.annualReturns}</p>
          <p>{t.netReturns}</p>
          <p>{t.minimumDeposit}</p>
          <p>{t.payoutSpeed}</p>
          <p>{t.signUpProcess}</p>
          <p>{t.liquidityOption}</p>
          <p>{t.fees}</p>
        </div>

        {/* Middle Column - Edufe */}
        <div className="w-full md:w-1/3 pl-5 flex justify-center mt-10 md:mt-0">
          <div className="border-[#31C440] w-[90%] md:w-[350px] border p-5 rounded-[40px] space-y-6 shadow-[0_0_44px_22px_rgba(49,196,64,0.18)] md:text-xl  text-[16px] ">
            <p className="font-bold md:text-3xl text-xl mb-10">🔥 Edufe</p>
            <p>{t.edufeAnnualReturns}</p>
            <p>{t.edufeNetReturns}</p>
            <p>{t.edufeMinimumDeposit}</p>
            <p>{t.edufePayoutSpeed}</p>
            <p>{t.edufeSignUpProcess}</p>
            <p>{t.edufeLiquidityOption}</p>
            <p>{t.edufeFees}</p>
          </div>
        </div>

        {/* Right Column - Banks */}
        <div className="w-full md:w-1/3 md:text-xl  text-[16px]  space-y-6 mt-10 md:mt-4 pl-5 md:pl-20">
          <p className="font-bold md:text-3xl text-xl mb-10">{t.banks}</p>
          <p>{t.banksAnnualReturns}</p>
          <p>{t.banksNetReturns}</p>
          <p>{t.banksMinimumDeposit}</p>
          <p>{t.banksPayoutSpeed}</p>
          <p>{t.banksSignUpProcess}</p>
          <p>{t.banksLiquidityOption}</p>
          <p>{t.banksFees}</p>
        </div>
      </div>
    </div>
  );
};

export default Section7;
