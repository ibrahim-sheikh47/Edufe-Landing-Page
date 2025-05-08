import React from "react";
import CustomButton from "../components/CustomButton";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section11 = () => {
  const { language } = useLanguage();
  const t = translations[language].section11;

  return (
    <div className="md:m-32 mx-5 mb-0">
      <div className="bg-[#31C4401A] rounded-[40px] md:p-12 p-5 text-lg md:text-[56px] font-bold">
        <div className="text-white flex items-center">
          <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-3">
            L35,000,000+
          </p>
          <p className="bg-[#114A55] text-white rounded-lg p-1 px-2">
            {t.invested}
          </p>
        </div>

        <div className="text-white flex items-center mt-3">
          <p className="bg-[#FF9F2F] text-white rounded-lg p-1 px-2 mr-3">
            {t.missedPayments}
          </p>
          <p className="bg-[#9C6FF8] text-white rounded-lg p-1 px-2">
            {t.trust}
          </p>
        </div>

        <p className="md:mt-10 mt-5 md:text-2xl text-lg font-medium">
          {t.subheading}{" "}
          <span className="font-bold">{t.country}</span>
        </p>

        <CustomButton
          label={t.buttonLabel}
          bgColor="bg-[#31C440]"
          hoverBgColor="hover:bg-[#2AAD37]"
          textColor="text-white"
          fontWeight="font-semibold"
          textSize={"text-lg mt-5 md:w-[170px] w-full"}
        />
      </div>
    </div>
  );
};

export default Section11;
