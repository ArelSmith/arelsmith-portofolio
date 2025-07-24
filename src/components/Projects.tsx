const Projects = () => {
  return (
    <section id="projects">
      <div className="max-w-8/12 mx-auto flex flex-col-reverse gap-y-6 lg:flex-row lg:min-h-screen mt-[76px] lg:mt-0 items-center justify-between">
        <div className="flex flex-col gap-y-5 lg:max-w-4/12 w-full">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-800">
            Project
          </h1>
        </div>
        <div className="max-w-2xl">
          <img
            src=""
            alt="Profile"
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
