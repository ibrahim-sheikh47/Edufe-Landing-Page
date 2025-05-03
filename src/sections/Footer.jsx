import React from "react";
import assets from "../constants/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-16 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Side - Logo and Text */}
          <div className="flex flex-col space-y-4">
              <img src={assets.logo} alt="Edufe Logo" className="h-10 w-10" />
              <div>
                <h2 className="text-2xl font-bold text-[#141414]">
                  Edufe{" "}
                  <span className="font-normal text-[#868686] text-lg">
                    (The smarter way to grow your money)
                  </span>
                </h2>
              </div>

            <nav className="flex space-x-6 text-[#141414] text-[16px]">
              <a href="#how-it-works" className="hover:text-[#31C440]">
                How It Works
              </a>
              <a href="#our-solutions" className="hover:text-[#31C440]">
                Our Solutions
              </a>
              <a href="#why-edufe" className="hover:text-[#31C440]">
                Why Edufe
              </a>
              <a href="#help" className="hover:text-[#31C440]">
                Help
              </a>
              <a href="#privacy-policy" className="hover:text-[#31C440]">
                Privacy Policy
              </a>
            </nav>

            <p className="text-[#868686] text-sm">
              © 2025 Edufe App. All rights reserved
            </p>
          </div>

          {/* Right Side - App Download */}
          <div className="mt-8 md:mt-0">
            <p className="text-[#141414] font-semibold text-lg mb-4">Get the App</p>
            <div className="flex flex-col space-y-3">
              <a href="#app-store" className="inline-block">
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
              <a href="#google-play" className="inline-block">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-16.5 -ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
