import React from "react";
import CustomButton from "../components/CustomButton";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section1 = () => {
  const { language } = useLanguage();
  const t = translations[language].section1;

  return (
    <div className="md:mt-15 mt-8 justify-center">
      <div className=" mx-auto text-center md:text-[56px] text-xl md:leading-[70px] leading-[30px] font-bold text-[#141414] ">
        {t.turnYourMoneyInto}{" "}
        <span className="bg-[#114A55] text-white rounded-lg p-1 px-2">
          {t.monthly}
        </span>{" "}
        <br />{" "}
        <span className="bg-[#114A55] text-white rounded-lg p-1 px-2">
          {t.income}
        </span>{" "}
        <span className="italic font-medium">{t.subtitle}</span>
      </div>
      <p className="md:text-lg text-sm text-[#868686] text-center mt-5">
        {t.descriptionLine1}
        <br />
        {t.descriptionLine2}
        <br />
        {t.descriptionLine3}
      </p>

      <div className="flex justify-center md:mt-8 mt-6 gap-4">
        <CustomButton
          label={t.startInvesting}
          bgColor="bg-[#31C440]"
          hoverBgColor="hover:bg-[#2AAD37]"
        />
        <CustomButton
          label={t.learnMore}
          bgColor=""
          border="border-[#D9D9D9] border-[1.5px]"
          textColor="text-black"
        />
      </div>
    </div>
  );
};

export default Section1;
