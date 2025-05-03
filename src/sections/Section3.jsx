import React from "react";
import BankDisAdvCard from "../components/BankDisAdvCard";
import assets from "../constants/assets";

const Section3 = () => {
  return (
    <div className="mt-20 justify-center mx-32">
      <div className=" mx-auto text-center text-[56px] leading-[70px] font-bold text-[#141414] ">
        Keeping Your{" "}
        <span className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
          Money{" "}
        </span>
        in the Bank <br /> Is Making You Poorer Every Day
      </div>
      <p className="text-2xl text-[#868686] text-center mt-5">
        With Edufe, you invest in seconds and start <br /> earning real returns,
        monthly
      </p>

      <div className="flex justify-center mt-20 gap-7">
        <div className="flex-1">
          <BankDisAdvCard
            title={["Inflation Drains", <br key="1" />, "Your Savings"]}
            subTitle={
              "Inflation in Honduras means your money loses value every single day it sits in a bank account"
            }
            img={assets.inflationIcon}
          />
        </div>
        <div className="flex-1">
          <BankDisAdvCard
            title={["Banks Take 6%", <br key="1" />, "in Hidden Fees"]}
            img={assets.moneyBagIcon}
            subTitle={
              "Banks offer only 8% annually, but with 6% in hidden fees during first year, your real return is closer to 2%"
            }
          />
        </div>
        <div className="flex-1">
          <BankDisAdvCard
            title={["Banking Wastes ", <br key="1" />, "Time and Money"]}
            img={assets.moneyClockIcon}
            subTitle={
              "And that’s if you go to the bank in person, sign paperwork, and wait days to activate"
            }
            imgWidth="w-[170px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
