import Footer from "@/components/Footer";
import Layout from "@/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import koffilah from "@/assets/projects/koffilah.webp";
import { setSelectedProject } from "@/store/store";

interface ProjectsType {
  title: string;
  slug: string;
  preview: string;
  body: string;
  image: string;
  link: string;
}

const Projects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects: ProjectsType[] = [
    {
      title: "Koffilah",
      slug: "koffilah",
      preview: "A Website for Koffilah",
      body: "Detailed information about Koffilah.",
      image: koffilah,
      link: "https://arelsmith.github.io/koffilah-roastery/",
    },
  ];

  const handleClick = (project: ProjectsType) => {
    dispatch(setSelectedProject(project));
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
                <li className="rounded-lg shadow-md relative w-75 lg:w-100">
                  <img src={project.image} alt={project.title} />
                  <div className="opacity-0 hover:opacity-75 transition-all absolute bottom-0 left-0 right-0 top-0 bg-white flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <p>{project.preview}</p>
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
