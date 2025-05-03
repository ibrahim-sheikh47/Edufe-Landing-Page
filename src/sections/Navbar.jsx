import { useState } from 'react';
import assets from '../constants/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-8 max-w-6xl mx-auto rounded-3xl mt-5 border-[#D9D9D980] ">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-8 w-8 mr-2">
            <img src={assets.logo}/>
          </div>
          <span className="text-xl font-bold text-[#141414]">EDUFE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-[16px] items-center space-x-8">
          <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">Home</a>
          <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">How It Works</a>
          <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">Our Solution</a>
          <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">Why Edufe</a>
          <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">Help</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#31C440] hover:bg-[#2AAD37] text-white font-medium py-2 px-6 rounded-full transition duration-200 cursor-pointer">
            Try Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#141414] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-4 pb-4">
            <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">Home</a>
            <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">How It Works</a>
            <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">Our Solution</a>
            <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">Why Edufe</a>
            <a href="#" className="text-[#141414] hover:text-[#31C440] font-medium">Help</a>
            <button className="bg-[#31C440] hover:bg-[#2AAD37] text-white font-medium py-2 px-6 rounded-full text-center transition duration-200 w-full">
              Try Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;