import Layout from "@/Layout";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Project = {
  title: string;
  slug: string;
  preview: string;
  body: string;
  image: string;
  link: string;
};

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const storedProjects = localStorage.getItem("selectedProject");

    if (!storedProjects) {
      navigate("/projects");
      return;
    }

    try {
      const parsed = JSON.parse(storedProjects);
      if (Array.isArray(parsed)) {
        const foundProject = parsed.find((p) => p.slug === slug);
        if (!foundProject) {
          navigate("/projects");
          return;
        }
        setProject(foundProject);
      } else {
        setProject(parsed);
      }
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      navigate("/projects");
    }
  }, [navigate, slug]);

  useEffect(() => {
    if (project) {
      localStorage.removeItem("selectedProject");
    }
  });

  if (!project) return null;

  return (
    <Layout>
      <div className="max-w-5xl h-screen mx-auto mt-[76px]">
        <h1 className="text-4xl font-bold">Project Details</h1>
        <p className="mt-4">{project.body}</p>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
