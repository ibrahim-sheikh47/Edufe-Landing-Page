import React, { useRef, useEffect } from "react";
import assets from "../constants/assets";
import ScrollableSection from "../components/ScrollableSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Section5 = () => {
  const scrollContainerRef = useRef(null);
  const leftDivRef = useRef(null);

  const { language } = useLanguage();
  const t = translations[language].section5;

  // Language-specific images for the scrollable sections
  const languageSpecificImages = {
    en: {
      section1Image: assets.investFundsMob,
      section2Image: assets.feature2Img,
      section3Image: assets.feature3Img,
      section4Image: assets.feature4Img,
      section5Image: assets.feature5Img,
    },
    es: {
      section1Image: assets.feature1SpanishImg, // Replace with Spanish version
      section2Image: assets.feature2SpanishImg, // Replace with Spanish version
      section3Image: assets.feature3SpanishImg, // Replace with Spanish version
      section4Image: assets.feature4SpanishImg, // Replace with Spanish version
      section5Image: assets.feature5SpanishImg, // Replace with Spanish version
    }
  };

  // Sample data for the scrollable sections, now with language-specific images
  const scrollableSections = [
    {
      icon: assets.dollar,
      image: languageSpecificImages[language].section1Image,
      bgColor: "bg-[#F9F3FF]",
    },
    {
      icon: assets.feature2Svg,
      image: languageSpecificImages[language].section2Image,
      bgColor: "bg-[#FDF0EF]",
    },
    {
      icon: assets.feature3Svg,
      image: languageSpecificImages[language].section3Image,
      bgColor: "bg-[#FFF6EB]",
    },
    {
      icon: assets.feature4Svg,
      image: languageSpecificImages[language].section4Image,
      bgColor: "bg-[#F3F9FF]",
    },
    {
      icon: assets.feature5Svg,
      image: languageSpecificImages[language].section5Image,
      bgColor: "bg-[#FFEBF2]",
    },
  ];

  const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

  // GSAP animations setup
  useEffect(() => {
    if (typeof window !== "undefined" && scrollContainerRef.current) {
      // Initial animation for the sticky left div
      gsap.fromTo(
        leftDivRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Get all the scrollable sections
      const sections = scrollContainerRef.current.querySelectorAll(
        ".scrollable-section"
      );

      // Create animations for each section
      sections.forEach((section) => {
        // Create timeline for this section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "bottom center",
            scroller: scrollContainerRef.current,
            toggleActions: "play none none reverse",
          },
        });

        // Create staggered animations for elements within section
        tl.fromTo(
          section.querySelector(".section-icon"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
          .fromTo(
            section.querySelector(".section-title"),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.4"
          )
          .fromTo(
            section.querySelector(".section-subtitle"),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.4"
          )
          .fromTo(
            section.querySelector(".section-image-container"),
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
            "-=0.3"
          );
      });

      // Create a parallax effect for the sticky div as user scrolls
      ScrollTrigger.create({
        trigger: scrollContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        scroller: scrollContainerRef.current,
        scrub: true,
        onUpdate: (self) => {
          gsap.to(leftDivRef.current.querySelector("img"), {
            y: self.progress * 50,
            duration: 0.1,
            ease: "none",
          });
        },
      });
    }

    // Cleanup function
    return () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf(leftDivRef.current);
      }
    };
  }, [language]); // Add language as a dependency to re-run the effect when language changes

  return (
    <div className="md:mt-30 mt-10 md:mx-32 mx-5">
      {/* Include the scrollbar hiding styles */}
      <style>{scrollbarHideStyles}</style>
      <div className="flex justify-center items-start gap-5 md:text-[56px] text-lg md:leading-[70px] leading-[30px] font-bold text-[#141414] text-center">
        <div>
          <div className="flex justify-center items-center flex-wrap relative">
            <img
              src={assets.coin1}
              className="absolute md:-top-15 md:-left-40 md:w-30 md:h-30 w-15 h-15 -top-10 -left-15"
              alt=""
            />
            <img
              src={assets.coin2}
              className="absolute md:-bottom-25 md:-left-8 md:w-12 md:h-12 w-10 h-10 -bottom-15 -left-5"
              alt=""
            />
            <img
              src={assets.coin3}
              className="absolute md:-bottom-35 md:-right-32 md:w-38 md:h-38 w-18 h-18 -bottom-20 -right-10"
              alt=""
            />
            <span className="bg-[#114A55] text-white rounded-lg p-1 px-2 mr-2">
              {t.headingLine1}
            </span>
            <span>{t.headingLine2}</span>
          </div>
          <div>{t.headingLine3}</div>
        </div>
      </div>

      <div className="mt-20 md:flex gap-5 justify-center">
        <div
          ref={leftDivRef}
          className="md:h-[800px] md:w-[540px] bg-[#31C4401A] rounded-[40px] flex flex-col md:sticky md:top-20"
          
        >
          <div className="md:px-7 md:py-10 p-5">
            <p className="text-3xl font-bold w-full">{t.stickyTitle}</p>
            <p className="md:text-2xl text-[16px] font-medium text-[#141414] md:mt-5 mt-2">
              {t.stickySubtitle}
            </p>
          </div>
          <img
            src={assets.money}
            className="w-full h-full overflow-hidden object-fit"
            alt=""
          />
        </div>

        <div
          ref={scrollContainerRef}
          className="md:flex md:flex-col md:h-[calc(3*800px+60px)] overflow-y-auto scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {scrollableSections.map((section, index) => (
            <ScrollableSection
              key={index}
              icon={section.icon}
              title={t.scrollSections[index].title}
              subtitle={t.scrollSections[index].subtitle}
              image={section.image}
              bgColor={section.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;