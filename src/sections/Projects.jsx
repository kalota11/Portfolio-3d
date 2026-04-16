import { useState } from "react";
import { myProjects } from "../constants";

const projectCount = myProjects.length;

const Projects = () => {
  const [index, setIndex] = useState(0);

  const project = myProjects[index];

  const handleNav = (dir) => {
    if (dir === "prev") {
      setIndex(index === 0 ? projectCount - 1 : index - 1);
    } else {
      setIndex(index === projectCount - 1 ? 0 : index + 1);
    }
  };

  return (
    <section className="my-16 px-4">

      <h2 className="text-2xl sm:text-3xl text-white mb-8">
        My Selected Work
      </h2>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">

        <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1c1c1e] to-[#0f0f11] shadow-xl">

          <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center mb-4">
            <img src={project.logo} className="w-5 h-5" />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mt-3">
            {project.desc}
          </p>

          <p className="text-gray-500 text-sm mt-2">
            {project.subdesc}
          </p>

          <div className="flex gap-2 mt-4">
            {project.tags.map((tag, i) => (
              <img key={i} src={tag.path} className="w-5 h-5" />
            ))}
          </div>

          <a
            href={project.href}
            target="_blank"
            className="flex items-center gap-2 text-sm text-white mt-6"
          >
            Check Live Site →
          </a>

          <div className="flex items-center justify-between mt-8">


<div className="flex items-center justify-between mt-8">

  <button
    onClick={() => handleNav("prev")}
    className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center"
  >
    <img 
      src="/assets/left-arrow.png" 
      alt="left" 
      className="w-4 h-4"
    />
  </button>


  <button
    onClick={() => handleNav("next")}
    className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center"
  >
    <img 
      src="/assets/right-arrow.png" 
      alt="right" 
      className="w-4 h-4"
    />
  </button>

</div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#1c1c1e] to-[#0f0f11] flex items-center justify-center p-6">

          <img
            src={project.texture}
            className="w-[250px] sm:w-[300px] object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default Projects;