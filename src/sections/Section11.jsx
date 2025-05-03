import React from "react";
import CustomButton from "../components/CustomButton";

const Section11 = () => {
  return (
    <div className="m-32 mb-0">
      <div className="bg-[#31C4401A] rounded-[40px] p-12 text-[56px] font-bold">
        <div className="text-white flex items-center">
          <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-3">
            L35,000,000+
          </p>
          <p className="bg-[#114A55] text-white rounded-lg p-1 px-2">
            Invested
          </p>{" "}
        </div>
        <div className="text-white flex items-center mt-3">
          <p className="bg-[#FF9F2F] text-white rounded-lg p-1 px-2 mr-3">
            0 Missed Payments
          </p>
          <p className="bg-[#9C6FF8] text-white rounded-lg p-1 px-2">
            100% Trust
          </p>{" "}
        </div>

        <p className="mt-10 text-2xl font-medium">
          The first investment app of its kind in{" "}
          <span className="font-bold">Honduras</span>
        </p>
        <CustomButton
          label="Get Started Now"
          bgColor="bg-[#31C440]"
          hoverBgColor="hover:bg-[#2AAD37]"
          textColor="text-white"
          fontWeight="font-semibold"
          textSize={"text-lg"}
        />
      </div>
    </div>
  );
};

export default Section11;
