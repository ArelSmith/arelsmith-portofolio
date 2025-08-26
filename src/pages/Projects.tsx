import Footer from "@/components/Footer";
import Layout from "@/Layout";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import koffilah from "@/assets/projects/koffilah.webp";
import aero from "@/assets/projects/aero.webp";
import votingapposis from "@/assets/projects/votingapposis.webp";

import { useMemo } from "react";

interface ProjectsType {
  title: string;
  slug: string;
  preview: string;
  body: string;
  image: string;
  link: string | null;
  github: string;
  tech: string[];
}

const Projects = () => {
  const navigate = useNavigate();
  const projects: ProjectsType[] = useMemo(
    () => [
      {
        title: "Voting App Osis",
        slug: "voting-app-osis",
        preview: "Simple voting counter system",
        body: "Voting App OSIS is a digital platform designed to make student council elections easier, faster, and more transparent. With real-time vote counting, every paslon's progress can be tracked instantly and accurately. The app provides a secure and user-friendly experience for both voters and administrators. Bringing technology into school democracy, Voting App OSIS ensures fair and efficient elections.",
        image: votingapposis,
        link: "https://voting-app-osis.vercel.app/",
        github: "https://github.com/ArelSmith/voting-app-osis",
        tech: ["Tailwind CSS", "React"],
      },
      {
        title: "Koffilah",
        slug: "koffilah",
        preview: "An UI Design for Koffilah",
        body: "Koffilah is a fiction project for educational purposes to supporting my school project for making a brand identity. This project showcases a modern and user-friendly interface designed with TailwindCSS. I haven't translated it to React App so its just only static site without any features. I made this project to practice TailwindCSS after moved from Bootstrap.",
        image: koffilah,
        link: "https://arelsmith.github.io/koffilah-roastery/",
        github: "https://github.com/ArelSmith/koffilah-roastery",
        tech: ["Tailwind CSS"],
      },
      {
        title: "Aero Flight Booking",
        slug: "aero-flight-booking",
        preview: "A fullstack web application for booking flights",
        body: "Aero Booking Flights is a modern web application built with Laravel that simplifies the way travelers search and book flights. With a clean design and intuitive interface, users can explore destinations, check flight details, and make reservations with ease. The platform ensures fast, secure, and reliable booking powered by Laravel's robust backend. Perfect for anyone who values convenience, Aero Booking Flights makes planning your journey smoother than ever.",
        image: aero,
        link: null,
        github: "https://github.com/ArelSmith/aero-flight-booking",
        tech: ["Tailwind CSS", "Laravel", "Filament", "Midtrans"],
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
      <Helmet>
        <title>Projects | Arel Smith</title>
        <meta name="description" content="Projects display of Arel Smith" />
      </Helmet>
      <div className="min-h-screen flex flex-col gap-y-10 mx-auto items-center mt-[76px] ">
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
                  loading="lazy"
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
