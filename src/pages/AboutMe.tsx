import Layout from "@/Layout";
import aboutMeThumbnail from "@/assets/profile_about_me.jpg";
import { useState, type FC } from "react";

import image1 from "@/assets/image_1.jpg";
import image2 from "@/assets/image_2.jpg";
import image3 from "@/assets/image_3.png";
import { Box, Smartphone, Webhook } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Jumbotron: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:items-center mx-auto lg:mt-0 mt-[76px] gap-y-6">
      <img
        src={aboutMeThumbnail}
        alt="About me Thumbnail"
        className="lg:w-1/2 lg:h-screen"
      />
      <div className="flex flex-col gap-y-2 lg:max-w-96 max-w-60 mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold text-center text-slate-800">
          About me
        </h1>
        <div className="w-15 h-2 mx-auto bg-slate-800 rounded-3xl"></div>
        <p className="text-center text-slate-800">
          You're arrived at the right place to learn more about the person
          behind the projects. Here's a closer look at my journey, my passions,
          and the values that shape my works.
        </p>
      </div>
    </div>
  );
};

const SelfDetail: FC = () => {
  return (
    <div className="h-screen w-10/12 mx-auto flex flex-col lg:flex-row mt-50 justify-around items-center gap-y-20">
      <div className="lg:w-5/12 w-50 relative">
        <img src={image1} alt="Image 1" className="lg:w-100 w-200" />
        <img
          src={image2}
          alt="Image 2"
          className="lg:w-100 w-200 absolute top-25 left-25 lg:top-50 lg:left-50 scale-45  "
        />
        <img
          src={image3}
          alt="Image 3"
          className="lg:w-100 w-200 absolute -top-25 -left-25 lg:-top-50 lg:-left-50 scale-45"
        />
      </div>
      <div className="lg:w-5/12 flex flex-col gap-y-5">
        <h1 className="text-5xl font-bold text-center text-slate-800">
          Arel Smith
        </h1>
        <p className="text-center text-slate-800">
          a 17-year old student currently in my final year of vocational high
          school majoring in Visual Communication Design. While my foundation
          lies in the world of design, I've developed a strong passion for web
          development, especially in crafting and building clean, responsive
          interfaces that blend aesthetics with functionality. I enjoy learning
          new technologies, building digital experiences, and constantly
          challenging myself to grow as both designer and web developer. This
          portofolio is a reflection of that journey and I'm just getting
          started.
        </p>
      </div>
    </div>
  );
};

const MySkill: FC = () => {
  const skills = [
    {
      icon: <Box className="w-8 h-8 text-gray-700" />,
      title: "Web Development",
      description: "Building modern, responsive web applications",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-gray-700" />,
      title: "UI/UX and Graphic Design",
      description:
        "Crafting aesthetic and attractive design with decent user experience",
    },
    {
      icon: <Webhook className="w-8 h-8 text-gray-700" />,
      title: "REST API",
      description: "Making each communication between app in convenient way",
    },
  ];
  const stacks = [
    [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "PHP",
      "React",
      "NextJS",
      "TailwindCSS",
      "Bootstrap",
      "NodeJS",
      "ExpressJS",
      "Laravel",
      "Visual Studio Code",
      "Git",
      "GitHub",
      "Figma",
      "Vite",
      "Docker",
    ],
    ["Figma", "Photoshop", "Illustrator", "CorelDraw", "Canva"],
    ["Postman", "Strapi"],
  ];
  const [activeTechStack, setActiveTechStack] = useState<number | null>(null);
  return (
    <div className="h-screen w-10/12 mx-auto flex flex-col gap-y-30 mt-50">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 text-center">
          Skills & Expertise
        </h1>
        <p className="text-slate-800 text-center text-xl">
          All of my technical skills.
        </p>
      </div>
      <div className="flex flex-row mx-auto gap-x-10">
        {skills.map((skill, key) => (
          <div
            key={key}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() =>
              setActiveTechStack((prev) => (prev === key ? null : key))
            }
          >
            <ServiceCard
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          </div>
        ))}
      </div>
      {activeTechStack !== null && (
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 active:border">
            Tech Stack - {skills[activeTechStack].title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {stacks[activeTechStack].map((stack, idx) => (
              <span
                key={idx}
                className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const AboutMe: FC = () => {
  return (
    <Layout>
      <Jumbotron />
      <SelfDetail />
      <MySkill />
    </Layout>
  );
};

export default AboutMe;
