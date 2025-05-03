import React from "react";
import assets from "../constants/assets";
import GettingStartedCard from "../components/GettingStartedCard";

const Section6 = () => {
  return (
    <div className="mt-32 mx-32">
      <div className="flex gap-5 text-[56px] leading-[70px] font-bold text-[#141414] ">
        <img
          src={assets.gettingStartedIcon}
          className="w-[90px] h-[76px]"
          alt=""
        />

        <div>
          <p className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2 w-[max-content]">
            Getting Started: <br />
          </p>
          <p>Four Easy Steps to Invest</p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-20 mb-20 mx-10">
        <GettingStartedCard
          title={"Download the Edufe App"}
          subtitle={[
            "Available on iOS and Android. Sign up in less",
            <br key="1" />,
            "than a minute",
          ]}
        >
          <div className="flex absolute bottom-10 left-12 mt-5 w-full">
            <img
              src={assets.downloadIcon1}
              className="h-[100px] -ml-5"
              alt=""
            />
            <img
              src={assets.downloadIcon2}
              className="h-[100px] -ml-5"
              alt=""
            />
            <img
              src={assets.downloadIcon3}
              className="h-[100px] -ml-5"
              alt=""
            />
          </div>
        </GettingStartedCard>

        <GettingStartedCard
          title={"Choose an Investment Avenue"}
          subtitle={[
            "Select from different investment categories ",
            <br key="1" />,
            "based on your comfort level and goals",
          ]}
        >
          <div className="flex absolute bottom-10 left-12 mt-5 w-full">
            <img
              src={assets.investmentIcon1}
              className="h-[100px] -ml-5"
              alt=""
            />
            <img
              src={assets.investmentIcon2}
              className="h-[100px] -ml-5"
              alt=""
            />
            <img
              src={assets.investmentIcon3}
              className="h-[100px] -ml-5"
              alt=""
            />
          </div>
        </GettingStartedCard>
        <GettingStartedCard
          title={"Enter the Amount & Review Terms"}
          subtitle={
            "Start with any amount. Review expected returns, timeframes, and details — all clearly displayed"
          }
        >
          <div className="flex items-center gap-5 absolute bottom-10 mt-5">
            <img src={assets.amountDragger} className="h-[85px]" alt="" />
            <button className="h-[85px] bg-[#F3F3F3] rounded-3xl w-[160px]">
              {" "}
              3 years
            </button>
          </div>
        </GettingStartedCard>
        <GettingStartedCard
          title={"Tap ‘Invest’ and Start Earning"}
          subtitle={
            "That’s it. You start receiving returns every month, directly to your Edufe wallet"
          }
        >
          <div className="absolute bottom-0 mt-5 w-full">
            <img
              src={assets.investFundsButton}
              className="h-[180px] -ml-8"
              alt=""
            />
          </div>
        </GettingStartedCard>
      </div>
    </div>
  );
};

export default Section6;
