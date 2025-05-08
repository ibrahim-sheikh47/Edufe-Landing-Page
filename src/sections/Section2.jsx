import React from "react";
import CustomButton from "../components/CustomButton";
import assets from "../constants/assets";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

const Section2 = () => {
  const { language } = useLanguage();
  const t = translations[language].section2;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top buttons section */}
      <div className="flex justify-between md:max-w-6xl mx-auto mb-8">
        <div className="flex items-baseline">
          <CustomButton
            label={t.minimumFees}
            bgColor="bg-[#9C6FF8]"
            height="md:h-[40px]"
          />
          <img src={assets.minimumFees} className="w-14 h-14 md:w-18 md:h-18" alt="" />
        </div>

        <div className="flex items-baseline">
          <img src={assets.instantTransfer} className="w-14 h-14 md:w-18 md:h-18" alt="" />
          <CustomButton
            label={t.instantTransfer}
            bgColor="bg-[#FF9F2F]"
            height="md:h-[40px]"
          />
        </div>
      </div>

      {/* Main content section */}
      <div className="md:-mt-15 flex flex-col md:flex-row justify-center items-end gap-6 max-w-6xl mx-auto">
        <div className="w-full md:max-w-[350px]">
          <div className="bg-white rounded-3xl border-[#D9D9D980] border shadow-md p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-[#141414]">
                {t.investedAmount}
              </h2>
              <div className="flex items-center text-[#31C440] font-bold">
                <ArrowDropUpOutlinedIcon fontSize="medium" />
                <span className="text-lg">
                  <span className="text-2xl">L35</span> Million
                </span>
              </div>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-4 mb-3">
              <div
                className="bg-gradient-to-r from-[#A4E78A] to-[#31C440] h-4 rounded-full"
                style={{ width: "56%" }}
              ></div>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-gray-500">{t.investedText}</span>
              <span className="font-semibold text-sm">56%</span>
            </div>
          </div>

          <div className="flex gap-4 h-[120px]">
            <div className="bg-[#0A4958] text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
              <img src={assets.amountInvested} alt="" />
              <h2 className="text-lg font-medium text-center mt-2">
                {t.amountInvested}
              </h2>
            </div>

            <div className="bg-white border-[#D9D9D980] border  rounded-2xl shadow-md p-6 flex-1 flex flex-col items-center justify-center">
              <img
                src={assets.portfolioRating}
                alt=""
                className="md:object-fit w-30 h-30"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={assets.portfolioImg}
            className="md:w-[330px]  object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col md:ml-[-20px]">
          <img
            src={assets.investmentTarget}
            className="w-[210px] h-[100px] object-cover"
            alt=""
          />
          <img
            src={assets.portfolioGrowth}
            className="md:w-[350px] md:h-[242px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
