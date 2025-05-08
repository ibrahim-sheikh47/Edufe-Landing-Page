const BankDisAdvCard = ({ title, img, subTitle, imgWidth = "md:w-[120px] w-[90px]" }) => {
  return (
    <div className="md:h-[500px] bg-[#F8F8F8] md:mt-0 mt-5 rounded-[40px] md:px-7 px-3 py-5 md:py-10 md:pb-7 flex flex-col">
      {/* Title container with fixed height */}
      <div className="md:h-[80px] h-[40px] flex items-center">
        <p className="md:text-3xl text-xl font-bold text-center md:w-64 mx-auto">{title}</p>
      </div>

      {/* Image container with fixed height */}
      <div className="md:h-[250px] md:mt-0 mt-5  h-[125px] flex items-center justify-center">
        <img src={img} className={`object-contain ${imgWidth}`} alt="" />
      </div>

      {/* Subtitle always at the bottom */}
      <div className="md:mt-auto mt-5">
        <p className="md:text-[16px] text-xs text-[#868686] font-medium text-center mx-auto max-w-[290px]">{subTitle}</p>
      </div>
    </div>
  );
};

export default BankDisAdvCard;
