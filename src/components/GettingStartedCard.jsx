import React from "react";

const GettingStartedCard = ({ title, subtitle, children }) => {
  return (
    <div className="border-2 border-[#D9D9D980] rounded-[40px] md:px-8 px-4 py-5 md:py-10 h-[220px] md:h-[400px] relative">
      <p className="md:text-3xl text-lg font-bold">{title}</p>
      <p className="md:text-xl text-sm mt-2 md:mt-5 text-[#868686]">{subtitle}</p>

      <div>{children}</div>
    </div>
  );
};

export default GettingStartedCard;
