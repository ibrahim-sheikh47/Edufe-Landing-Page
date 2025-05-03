import React from "react";
import CustomButton from "../components/CustomButton";
import assets from "../constants/assets";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

const Section2 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top buttons section */}
      <div className="flex justify-between max-w-6xl mx-auto mb-8">
        <div className="flex items-baseline">
          <CustomButton
            label="Minimum Fees"
            bgColor="bg-[#9C6FF8]"
            height="h-[40px]"
            width="w-[140px]"
          />
          <img src={assets.minimumFees} alt="" />
        </div>

        <div className="flex items-baseline">
          <img src={assets.instantTransfer} alt="" />
          <CustomButton
            label="Instant Transfer"
            bgColor="bg-[#FF9F2F]"
            height="h-[40px]"
            width="w-[140px]"
          />
        </div>
      </div>

      {/* Main content section - centered */}
      <div className="-mt-15 flex flex-col md:flex-row justify-center items-end gap-6 max-w-6xl mx-auto">
        {/* Investment cards column */}
        <div className="w-full max-w-[350px]">
          {/* Invested Amount Card */}
          <div className="bg-white rounded-3xl border-[#D9D9D980] border shadow-md p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-[#141414]">
                Invested Amount
              </h2>
              <div className="flex items-center text-[#31C440] font-bold">
                <ArrowDropUpOutlinedIcon fontSize="medium" />
                <span className="text-lg">
                  <span className="text-2xl">L35</span> Million
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-4 mb-3">
              <div
                className="bg-gradient-to-r from-[#A4E78A] to-[#31C440] h-4 rounded-full"
                style={{ width: "56%" }}
              ></div>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-gray-500">
                L35 million+ managed, 0 missed payouts
              </span>
              <span className="font-semibold text-sm">56%</span>
            </div>
          </div>

          {/* Lower Cards Container */}
          <div className="flex gap-4 h-[120px]">
            {/* Amount Invested Card */}
            <div
              className="bg-[#0A4958] text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center"
            >
              <img src={assets.amountInvested} alt="" />
              <h2 className="text-lg font-medium text-center mt-2">
                Amount Invested
              </h2>
            </div>

            {/* Portfolio Rating Card */}
            <div className="bg-white border-[#D9D9D980] border  rounded-2xl shadow-md p-6 flex-1 flex flex-col items-center justify-center">
              <img
                src={assets.portfolioRating}
                alt=""
                className="object-fit"
              />
            </div>
          </div>
        </div>

        {/* Middle portfolio image */}
        <div className="flex justify-center">
          <img
            src={assets.portfolioImg}
            className="w-[330px]  object-cover"
            alt=""
          />
        </div>

        {/* Right column images */}
        <div className="flex flex-col ml-[-20px]">
          <img
            src={assets.investmentTarget}
            className="w-[210px] h-[100px] object-cover"
            alt=""
          />
          <img
            src={assets.portfolioGrowth}
            className="w-[350px] h-[242px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
