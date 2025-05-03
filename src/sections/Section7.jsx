import React from "react";
import assets from "../constants/assets";

const Section7 = () => {
  return (
    <div className="mx-32 mt-32">
      <div className="flex justify-center gap-5 text-[56px] leading-[70px] font-bold text-[#141414] ">
        <img src={assets.versusIcon} className="w-[76px] h-[76px]" alt="" />

        <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
          EDUFE <br />
        </p>
        <p> vs Traditional Banks</p>
      </div>
      <div className="flex justify-center w-full mt-20 text-xl font-medium">
        <div className="w-1/3 space-y-6 mt-5 pl-20">
          <p className="font-bold text-3xl mb-10">Features</p>
          <p>Annual Returns</p>
          <p>Net Returns</p>
          <p>Minimum Deposit</p>
          <p>Payout Speed</p>
          <p>Sign-Up Process</p>
          <p>Liquidity Option</p>
          <p>Fees</p>
        </div>
        <div className="w-1/3 pl-5">
          <div className="border-[#31C440] w-[350px] border p-5 rounded-[40px] space-y-6 shadow-[0_0_44px_22px_rgba(49,196,64,0.18)]">
            <p className="font-bold text-3xl mb-10">🔥 Edufe</p>
            <p>12% - 18%</p>
            <p>(Year 1) 12% - 18%</p>
            <p>Any Amount</p>
            <p>Monthly</p>
            <p>30 Seconds on Mobile</p>
            <p>In-App Marketplace</p>
            <p>0%</p>
          </div>
        </div>
        <div className="w-1/3 space-y-6 mt-4 pl-20">
          <p className="font-bold text-3xl mb-10">Banks</p>
          <p>8% (minus 6% fees in Year 1)</p>
          <p>~2%</p>
          <p>L5,000+</p>
          <p>Quarterly or Annually</p>
          <p>In-Person, Paperwork, Delays</p>
          <p>Early Withdrawal Penalties</p>
          <p>6% Hidden Fees (Year 1)</p>
        </div>
      </div>
    </div>
  );
};

export default Section7;
