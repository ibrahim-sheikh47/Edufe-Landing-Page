import { useState } from "react";
import assets from "../constants/assets";
import translations from "../translations/translations";
import { useLanguage } from "../context/LanguageContext";
import { ArrowDropDown, ChevronLeft } from "@mui/icons-material";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const t = translations[language].navbar;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-8 max-w-6xl mx-auto rounded-3xl mt-5 border-[#D9D9D980] ">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-8 w-8 mr-2">
            <img src={assets.logo} />
          </div>
          <span className="text-xl font-bold text-[#141414]">EDUFE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-[16px] items-center space-x-8">
          <a
            href="#"
            className="text-[#141414] hover:text-[#31C440] font-medium"
          >
            {t.home}
          </a>
          <a
            href="#"
            className="text-[#141414] hover:text-[#31C440] font-medium"
          >
            {t.howItWorks}
          </a>
          <a
            href="#"
            className="text-[#141414] hover:text-[#31C440] font-medium"
          >
            {t.ourSolution}
          </a>
          <a
            href="#"
            className="text-[#141414] hover:text-[#31C440] font-medium"
          >
            {t.whyEdufe}
          </a>
          <a
            href="#"
            className="text-[#141414] hover:text-[#31C440] font-medium"
          >
            {t.help}
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-1">
          {/* Language Toggle Button */}
          <div className="relative ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 border-2 border-[#31C440] font-medium py-2 px-4 rounded-full transition duration-200 cursor-pointer"
            >
              <img
                src={
                  language === "en"
                    ? "https://flagcdn.com/us.svg"
                    : "https://flagcdn.com/es.svg"
                }
                alt={language}
                className="w-5 h-5 object-cover"
              />
              {language === "en" ? "English" : "Español"}
              <ArrowDropDown className="w-4 h-4 mr-2" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div
                  onClick={() => {
                    if (language !== "en") toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src="https://flagcdn.com/us.svg"
                    alt="English"
                    className="w-5 h-5 object-cover"
                  />
                  English
                </div>
                <div
                  onClick={() => {
                    if (language !== "es") toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src="https://flagcdn.com/es.svg"
                    alt="Español"
                    className="w-5 h-5 object-cover"
                  />
                  Español
                </div>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a
            href="#try-now"
            className="bg-[#31C440] hover:bg-[#2AAD37] text-white font-medium py-2 px-6 rounded-full text-center transition duration-200 w-full"
          >
            {t.tryNow}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#141414] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-4 pb-4">
            <a
              href="#"
              className="text-[#141414] hover:text-[#31C440] font-medium"
            >
              {t.home}
            </a>
            <a
              href="#"
              className="text-[#141414] hover:text-[#31C440] font-medium"
            >
              {t.howItWorks}
            </a>
            <a
              href="#"
              className="text-[#141414] hover:text-[#31C440] font-medium"
            >
              {t.ourSolutions}
            </a>
            <a
              href="#"
              className="text-[#141414] hover:text-[#31C440] font-medium"
            >
              {t.whyEdufe}
            </a>
            <a
              href="#"
              className="text-[#141414] hover:text-[#31C440] font-medium"
            >
              {t.help}
            </a>

            {/* Language Toggle for Mobile View */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-2">
                <div
                  onClick={() => {
                    if (language !== "en") toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src="https://flagcdn.com/us.svg"
                    alt="English"
                    className="w-5 h-5 object-cover"
                  />
                  English
                </div>
                <div
                  onClick={() => {
                    if (language !== "es") toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src="https://flagcdn.com/es.svg"
                    alt="Español"
                    className="w-5 h-5 object-cover"
                  />
                  Español
                </div>
              </div>
            </div>

            <button className="bg-[#31C440] hover:bg-[#2AAD37] text-white font-medium py-2 px-6 rounded-full text-center transition duration-200 w-full">
              {t.tryNow}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
