import React from "react";

const ScrollableSection = ({ icon, title, subtitle, image, bgColor }) => {
  return (
    <div className="md:mt-0 mt-10 scrollable-section">
      <img src={icon} className="md:block hidden section-icon my-3" alt="" />
      <p className="md:text-[40px] text-xl md:text-start text-center font-bold leading-tight section-title md:w-[420px]">
        {title}
      </p>
      <p className="md:text-xl text-sm md:text-start text-center font-medium mt-5 section-subtitle md:w-[360px]">
        {subtitle}
      </p>
      <div className={`md:h-[800px] md:w-[540px] mt-5 ${bgColor} rounded-[40px] px-7 py-10 flex flex-col section-image-container `}>
        <img src={image} className="object-contain w-full h-full" alt="" />
      </div>
    </div>
  );
};

export default ScrollableSection;