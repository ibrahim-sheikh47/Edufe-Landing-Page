import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";

const Section10 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Carlos M.",
      location: "Tegucigalpa",
      avatar: "/path-to-carlos-image.jpg", // Replace with your image path
      quote:
        "10 months and never missed a payout. Edufe is reliable and way easier than banks",
      bgColor: "bg-[#31C440]", // Green background
      textColor: "text-[#31C440]",
    },
    {
      id: 2,
      name: "Marta R.",
      location: "San Pedro Sula",
      avatar: "/path-to-marta-image.jpg", // Replace with your image path
      quote:
        "I invested L1,000 just to test. Now I put in more each month. The results are real",
      bgColor: "bg-[#0A4958]",
      textColor: "text-[#0A4958]", // Dark teal background
    },
    {
      id: 3,
      name: "Luis F.",
      location: "La Ceiba",
      avatar: "/path-to-luis-image.jpg",
      quote:
        "The platform is very intuitive. I can track my investments easily and see growth.",
      bgColor: "bg-[#31C440]",
      textColor: "text-[#31C440]",
    },
    {
      id: 4,
      name: "Sofia P.",
      location: "Comayagua",
      avatar: "/path-to-sofia-image.jpg",
      quote:
        "Customer service is excellent. Any questions I have get answered quickly.",
      bgColor: "bg-[#0A4958]",
      textColor: "text-[#0A4958]",
    },
  ];

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].offsetWidth;
      const scrollAmount = cardWidth + 24; // card width + gap

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      const nextIndex = Math.min(currentSlide + 1, testimonials.length - 1);
      setCurrentSlide(nextIndex);
    }
  };

  const prevSlide = () => {
    if (scrollContainerRef.current) {

      const cardWidth = scrollContainerRef.current.children[0].offsetWidth;
      const scrollAmount = cardWidth + 24; // card width + gap

      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });

      const prevIndex = Math.max(currentSlide - 1, 0);
      setCurrentSlide(prevIndex);
    }
  };


  // Handle scroll events to update currentSlide
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth =
          scrollContainerRef.current.children[0].offsetWidth + 24; // + gap
        const index = Math.round(scrollLeft / cardWidth);

        if (index !== currentSlide) {
          setCurrentSlide(index);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [currentSlide]);

  // Check if buttons should be visible
  const isPrevVisible = currentSlide > 0;
  const isNextVisible = currentSlide < testimonials.length - 1;

  return (
    <section className="ml-28 mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column - Text */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-4xl md:text-[56px] font-bold text-[#141414] mb-6">
            Hear What Our
            <br />
            Clients Say!
          </h2>
          <p className="text-[#868686] mb-8 text-2xl">
            We've been in market for over 2 years <br /> with a 100% repayment
            success rate and <br />
            dozens of satisfied investors who trust us.
          </p>

          {/* Navigation Dots and Arrows */}
          <div className="flex items-center mt-4 ">
            {/* <div className="flex space-x-2 mr-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}

            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className={`flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full ${
                  !isPrevVisible ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                }`}
                aria-label="Previous testimonial"
                disabled={!isPrevVisible}
              >
                <ArrowBack />
              </button>

              <button
                onClick={nextSlide}
                className={`flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full ${
                  !isNextVisible ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                }`}
                aria-label="Next testimonial"
                disabled={!isNextVisible}
              >
                <ArrowForward />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Testimonial Cards */}
        <div className="lg:col-span-7 relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${testimonial.bgColor} text-white rounded-3xl p-8 flex flex-col w-[350px] h-[500px] flex-shrink-0 snap-center`}
              >
                {/* Avatar */}
                <div className="flex mb-6">
                  <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-white">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback for missing images - show initials
                        e.target.parentNode.innerHTML = `<div class="w-full h-full bg-white/30 flex items-center justify-center text-white text-xl">
                          ${testimonial.name.charAt(0)}
                        </div>`;
                      }}
                    />
                  </div>
                </div>

                {/* Quote */}
                <p className="text-2xl font-medium flex-grow my-8">
                  {testimonial.quote}
                </p>

                {/* Name and Location */}
                <div
                  className={`bg-white rounded-full py-2 px-4 w-fit font-semibold text-lg ${testimonial.textColor}`}
                >
                  <span className="">{testimonial.name}</span>
                  <span className="mx-1">·</span>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Custom scrollbar styling */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Section10;