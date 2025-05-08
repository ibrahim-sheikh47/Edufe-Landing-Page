// src/components/CustomButton.jsx

import React from "react";

const CustomButton = ({
  label,
  bgColor,
  textColor = "text-white",
  hoverBgColor,
  border = "",
  height = "h-[50px]",
  width = "w-[max-content]",
  rounded = "rounded-full",
  fontWeight = "font-medium",
  textSize
}) => {
  return (
    <button
      className={`${bgColor} ${hoverBgColor} ${textColor} ${border} ${fontWeight} ${height} ${width} ${rounded} ${textSize} md:whitespace-nowrap btn md:text-lg text-[16px] transition duration-200 cursor-pointer hover:scale-105 px-5`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
