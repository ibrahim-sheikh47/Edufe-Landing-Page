import React from "react";

const GettingStartedCard = ({ title, subtitle, children }) => {
  return (
    <div className="border-2 border-[#D9D9D980] rounded-[40px] px-8 py-10 h-[400px] relative">
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-xl mt-5 text-[#868686]">{subtitle}</p>

      <div>{children}</div>
    </div>
  );
};

export default GettingStartedCard;
