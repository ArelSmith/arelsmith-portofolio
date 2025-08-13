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
        preview: "An UI Design for Koffilah",
        body: "Koffilah is a fiction project for educational purposes to supporting my school project for making a brand identity. This project showcases a modern and user-friendly interface designed with TailwindCSS. I haven't translated it to React App so its just only static site without any features. I made this project to practice TailwindCSS after moved from Bootstrap.",
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
              <li
                key={index}
                className="group rounded-lg shadow-md relative w-75 lg:w-150 cursor-pointer"
                onClick={() => handleClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="transition-opacity duration-300"
                />
                <div className="transition-all absolute inset-0 bg-white flex flex-col gap-y-2 lg:gap-y-4 justify-center items-center opacity-0 group-hover:opacity-100 p-4">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <p className="text-center">{project.preview}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-500 text-white text-sm font-medium py-1 px-3 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
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
