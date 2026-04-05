const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-between bg-black" id="home">
      
      {/* TEXT */}
      <div className="pt-32 text-center px-4">
        
        {/* SMALL TEXT */}
        <p className="text-lg sm:text-xl text-gray-300">
          Hi, I am Ebad <span className="animate-pulse">👋</span>
        </p>

        {/* MAIN BIG HEADING */}
        <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-extrabold text-white tracking-tight">
          Building Products & Brands
        </h1>

      </div>

      {/* IMAGE */}
      <div className="flex justify-center pb-10">
        <img 
          src="/assets/computer.png" 
          alt="Computer"
          className="w-[350px] sm:w-[500px] md:w-[700px] h-auto object-contain"
        />
      </div>

    </section>
  );
};

export default Hero;