import Footer from "@/components/Footer";
import Layout from "@/Layout";
import { useNavigate } from "react-router-dom";

import koffilah from "@/assets/projects/koffilah.webp";
import { useMemo } from "react";

interface ProjectsType {
  title: string;
  slug: string;
  preview: string;
  body: string;
  image: string;
  link: string;
  tech: string[];
}

const Projects = () => {
  const navigate = useNavigate();
  const projects: ProjectsType[] = useMemo(
    () => [
      {
        title: "Koffilah",
        slug: "koffilah",
        preview: "A Website for Koffilah",
        body: "Detailed information about Koffilah.",
        image: koffilah,
        link: "https://arelsmith.github.io/koffilah-roastery/",
        tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      },
    ],
    []
  );

  const handleClick = (project: ProjectsType) => {
    localStorage.setItem("selectedProject", JSON.stringify(project));
    navigate(`/projects/${project.slug}`);
  };
  return (
    <Layout>
      <div className="max-w-5xl h-screen flex flex-col gap-y-10 mx-auto items-center mt-[76px] ">
        <h1 className="text-5xl lg:text-7xl font-bold">My Projects</h1>

        {projects.length > 0 ? (
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-x-4 justify-center gap-y-4 mt-8">
            {projects.map((project, index) => (
              <button onClick={() => handleClick(project)} key={index}>
                <li className="group rounded-lg shadow-md relative w-75 lg:w-150">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="group-hover:opacity-0"
                  />
                  <div className="transition-all absolute bottom-0 left-0 right-0 top-0 bg-white flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <p>{project.preview}</p>
                    <div className="flex flex-row gap-x-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-500 text-white lg:py-2 lg:px-5 "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              </button>
            ))}
          </ul>
        ) : (
          <p>No projects available</p>
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default Projects;
