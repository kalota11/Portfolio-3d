import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className={`text-center z-10 ${isMobile ? "mt-12" : "mt-20"}`}>
          <p className={`${isMobile ? "text-sm" : "text-lg"} text-gray-300`}>
            Hi, I am Ebad 👋
          </p>
          <h1
            className={`font-extrabold text-white leading-tight ${
              isMobile
                ? "text-3xl"
                : isTablet
                ? "text-5xl"
                : "text-7xl"
            }`}
          >
            Building Products & Brands
          </h1>
        </div>
        <div className={`${isMobile ? "mt-8" : "mt-16"}`}>
          <img
            src="/assets/computer.png"
            alt="Computer"
            className={`object-contain ${
              isMobile
                ? "w-[250px]"
                : isTablet
                ? "w-[450px]"
                : "w-[650px]"
            }`}
          />
        </div>
        <div className="mt-6 flex justify-center">
  <div className="flex items-center gap-3 px-6 py-3 bg-[#1c1c1e]/80 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg">

    {/* Green Dot */}
    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

    {/* Text */}
    <p className="text-sm sm:text-base text-white font-medium">
      Let's work together
    </p>

  </div>
</div>
      </div>
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          isMobile ? "left-4" : "left-20"
        }`}
      >
        <div
          className={`border-green-400 rounded-full ${
            isMobile ? "w-10 h-10 border-2" : "w-20 h-20 border-4"
          }`}
        ></div>
      </div>
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          isMobile ? "right-4" : "right-20"
        }`}
      >
        <img
          src="/assets/react.svg"
          alt="React"
          className={`${isMobile ? "w-10 h-10" : "w-20 h-20"}`}
        />
      </div>
      <div
        className={`absolute ${
          isMobile ? "bottom-6 left-4" : "bottom-16 left-10"
        }`}
      >
        <img
          src="/assets/tailwindcss.png"
          alt="Tailwind"
          className={`${isMobile ? "w-8 h-8" : "w-14 h-14"} opacity-80`}
        />
      </div>
      <div
        className={`absolute ${
          isMobile ? "bottom-6 right-4" : "bottom-16 right-10"
        }`}
      >
        <div
          className={`bg-pink-400 rounded-lg rotate-12 opacity-80 ${
            isMobile ? "w-10 h-10" : "w-16 h-16"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default Hero;