import { workExperiences } from "../constants";

const WorkExperience = () => {
  return (
    <section className="my-12 sm:my-16 px-4 text-white" id="work">

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-left">
        My Work Experience
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">

        <div className="bg-[#1c1c1e] rounded-xl sm:rounded-2xl flex items-center justify-center p-4 sm:p-6">

          <img
            src="/assets/roboremovebg.png"
            alt="robot"
           className="
  w-[220px] 
  sm:w-[300px] 
  md:w-[380px] 
  lg:w-[450px] 
  xl:w-[500px]
  object-contain
"
          />

        </div>

        <div className="bg-[#1c1c1e] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">

          {workExperiences.map((item, index) => (
            <div key={index} className="flex gap-3 sm:gap-4">

              <div className="flex flex-col items-center">

                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black/40 rounded-full flex items-center justify-center">
                  <img src={item.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {index !== workExperiences.length - 1 && (
                  <div className="w-[2px] h-full bg-gray-700 mt-2"></div>
                )}
              </div>

              <div>
                <p className="font-semibold text-sm sm:text-base md:text-lg">
                  {item.name}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
                  {item.pos} — {item.duration}
                </p>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {item.title}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WorkExperience;