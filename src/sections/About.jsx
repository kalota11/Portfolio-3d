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
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Ebad</p>
              <p className="grid-subtext">
                I am 13 years old and learning frontend and backend development. I love building modern and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with modern tools like HTML, CSS, JavaScript, React, Tailwind CSS and I am also learning backend development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">

            <div className="rounded-3xl w-full sm:h-[326px] flex items-center justify-center bg-[#1c1c1e]">
              <p className="text-gray-400 text-center px-4">
                I am available for projects and open to learning new opportunities 🌍
              </p>
            </div>

            <div>
              <p className="grid-headtext">Flexible & Ready to Work</p>
              <p className="grid-subtext">
                I am based in Pakistan and open to remote work and collaborations.
              </p>

              <div className="mt-6 flex justify-center">
                <div className="px-6 py-3 bg-white text-black rounded-lg cursor-pointer hover:scale-105 transition">
                  Contact Me
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I enjoy coding, solving problems, and learning new technologies every day. My goal is to become a full stack developer.
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] object-cover"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>

              <div className="copy-container cursor-pointer" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-white">
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