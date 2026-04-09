import { useState } from 'react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ebad@email.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-10 sm:my-16 md:my-20 px-4" id="about">

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-5 h-full">

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container p-4 sm:p-6">
            <img src="assets/grid1.png" alt="grid-1"
              className="w-full h-[200px] sm:h-[260px] object-contain" />

            <div>
              <p className="grid-headtext text-lg sm:text-xl md:text-2xl">
                Hi, I’m Ebad
              </p>
              <p className="grid-subtext text-sm sm:text-base">
                I am 13 years old and learning frontend and backend development.
                I love building modern and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container p-4 sm:p-6">
            <img src="assets/grid2.png" alt="grid-2"
              className="w-full h-[200px] sm:h-[260px] object-contain" />

            <div>
              <p className="grid-headtext text-lg sm:text-xl md:text-2xl">
                Tech Stack
              </p>
              <p className="grid-subtext text-sm sm:text-base">
                I work with HTML, CSS, JavaScript, React, Tailwind CSS and also learning backend.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container p-4 sm:p-6">

            <div className="rounded-2xl sm:rounded-3xl w-full h-[200px] sm:h-[300px] flex items-center justify-center bg-[#1c1c1e]">
              <p className="text-gray-400 text-center text-sm sm:text-base px-2">
                Available for projects & learning opportunities 🌍
              </p>
            </div>

            <div>
              <p className="grid-headtext text-lg sm:text-xl md:text-2xl">
                Flexible & Ready to Work
              </p>
              <p className="grid-subtext text-sm sm:text-base">
                Based in Pakistan and open to remote work.
              </p>

              <div className="mt-4 sm:mt-6 flex justify-center">
                <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg cursor-pointer hover:scale-105 transition text-sm sm:text-base">
                  Contact Me
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container p-4 sm:p-6">
            <img src="assets/grid3.png" alt="grid-3"
              className="w-full h-[200px] sm:h-[260px] object-contain" />

            <div>
              <p className="grid-headtext text-lg sm:text-xl md:text-2xl">
                My Passion for Coding
              </p>
              <p className="grid-subtext text-sm sm:text-base">
                I enjoy coding and learning new technologies. My goal is to become a full stack developer.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container p-4 sm:p-6">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full h-[120px] sm:h-[200px] object-cover"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center text-sm sm:text-base">
                Contact me
              </p>

              <div
                className="copy-container flex items-center justify-center gap-2 cursor-pointer"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />

                <p className="text-sm sm:text-lg md:text-xl font-medium text-white">
                  ebad9941@gmail.com
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;