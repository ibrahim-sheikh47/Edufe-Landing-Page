const BankDisAdvCard = ({ title, img, subTitle, imgWidth = "w-[120px]" }) => {
  return (
    <div className="h-[500px] bg-[#F8F8F8] rounded-[40px] px-7 py-10 pb-7 flex flex-col">
      {/* Title container with fixed height */}
      <div className="h-[80px] flex items-center">
        <p className="text-3xl font-bold text-center w-full">{title}</p>
      </div>

      {/* Image container with fixed height */}
      <div className="h-[250px] flex items-center justify-center">
        <img src={img} className={`object-contain ${imgWidth}`} alt="" />
      </div>

      {/* Subtitle always at the bottom */}
      <div className="mt-auto">
        <p className="text-[16px] text-[#868686] font-medium text-center mx-auto max-w-[290px]">{subTitle}</p>
      </div>
    </div>
  );
};

export default BankDisAdvCard;
