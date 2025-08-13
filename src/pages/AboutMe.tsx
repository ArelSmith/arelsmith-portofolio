import Layout from "@/Layout";
import aboutMeThumbnail from "@/assets/profile_about_me.jpg";
import { useContext, useState, type FC } from "react";
import { motion } from "motion/react";
import AnimationProvider from "@/context/Animation/AnimationProvider";
import { Helmet } from "react-helmet-async";

import image1 from "@/assets/image_1.jpg";
import image2 from "@/assets/image_2.jpg";
import image3 from "@/assets/image_3.png";
import { Box, Smartphone } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Marquee from "react-fast-marquee";

// images
import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import javascript from "@/assets/javascript.svg";
import typescript from "@/assets/typescript.svg";
import php from "@/assets/php.svg";
import react from "@/assets/react.svg";
import nextjs from "@/assets/nextjs.svg";
import tailwindcss from "@/assets/tailwindcss.svg";
import bootstrap from "@/assets/bootstrap.svg";
import nodejs from "@/assets/nodejs.svg";
import express from "@/assets/express.svg";
import laravel from "@/assets/laravel.svg";
import vscode from "@/assets/visual-studio-code.svg";
import git from "@/assets/git.svg";
import github from "@/assets/github.svg";
import vite from "@/assets/vitejs.svg";
import docker from "@/assets/docker.svg";
import postman from "@/assets/postman.svg";
import strapi from "@/assets/strapi-icon.svg";

import figma from "@/assets/figma.svg";
import photoshop from "@/assets/photoshop.svg";
import illustrator from "@/assets/illustrator.svg";
import coreldraw from "@/assets/coreldraw.svg";
import canva from "@/assets/canva.svg";
import premiere from "@/assets/premiere.svg";
import capcut from "@/assets/capcut.svg";
import chatgpt from "@/assets/openai-chatgpt.svg";
import Footer from "@/components/Footer";
import { AnimationContext } from "@/context/Animation/AnimationContext";

const Jumbotron: FC = () => {
  const ctx = useContext(AnimationContext);
  if (!ctx) return null;
  const { jumbotronRef, itemVariants, isInView1 } = ctx;
  return (
    <div
      ref={jumbotronRef}
      className="flex flex-col lg:flex-row-reverse lg:items-center mx-auto lg:mt-0 mt-[76px] gap-y-6"
    >
      <img
        src={aboutMeThumbnail}
        alt="About me Thumbnail"
        className="lg:w-1/2 lg:h-screen"
      />
      <div className="flex flex-col gap-y-2 lg:max-w-96 max-w-60 mx-auto">
        <motion.h1
          variants={itemVariants}
          initial="close"
          animate={isInView1 ? "open" : "close"}
          custom={0.1}
          className="text-5xl lg:text-7xl font-bold text-center text-slate-800"
        >
          About me
        </motion.h1>
        <motion.div
          variants={itemVariants}
          initial="close"
          animate={isInView1 ? "open" : "close"}
          custom={0.2}
          className="w-15 h-2 mx-auto bg-slate-800 rounded-3xl"
        ></motion.div>
        <motion.p
          variants={itemVariants}
          initial="close"
          animate={isInView1 ? "open" : "close"}
          custom={0.3}
          className="text-center text-slate-800"
        >
          You're arrived at the right place to learn more about the person
          behind the projects. Here's a closer look at my journey, my passions,
          and the values that shape my works.
        </motion.p>
      </div>
    </div>
  );
};

const SelfDetail: FC = () => {
  const ctx = useContext(AnimationContext);
  if (!ctx) return null;
  const { selfDetailRef, itemVariants, isInView2 } = ctx;
  return (
    <div className="h-screen w-10/12 mx-auto flex flex-col lg:flex-row mt-50 justify-around items-center gap-y-20">
      <div ref={selfDetailRef} className="lg:w-5/12 w-50 relative">
        <motion.img
          variants={itemVariants}
          initial="close"
          animate={isInView2 ? "open" : "close"}
          custom={0.1}
          src={image1}
          alt="Image 1"
          className="lg:w-100 w-200"
        />
        <motion.img
          variants={itemVariants}
          initial="close"
          animate={isInView2 ? "open" : "close"}
          custom={0.2}
          src={image2}
          alt="Image 2"
          className="lg:w-100 w-200 absolute top-25 left-25 lg:top-50 lg:left-50 scale-45  "
        />
        <motion.img
          variants={itemVariants}
          initial="close"
          animate={isInView2 ? "open" : "close"}
          custom={0.3}
          src={image3}
          alt="Image 3"
          className="lg:w-100 w-200 absolute -top-25 -left-25 lg:-top-50 lg:-left-50 scale-45"
        />
      </div>
      <div className="lg:w-5/12 flex flex-col gap-y-5">
        <motion.h1
          variants={itemVariants}
          initial="close"
          animate={isInView2 ? "open" : "close"}
          custom={0.4}
          className="text-5xl font-bold text-center text-slate-800"
        >
          Arel Smith
        </motion.h1>
        <motion.p
          variants={itemVariants}
          initial="close"
          animate={isInView2 ? "open" : "close"}
          custom={0.5}
          className="text-center text-slate-800"
        >
          a 17-year old student currently in my final year of vocational high
          school majoring in Visual Communication Design. While my foundation
          lies in the world of design, I've developed a strong passion for web
          development, especially in crafting and building clean, responsive
          interfaces that blend aesthetics with functionality. I enjoy learning
          new technologies, building digital experiences, and constantly
          challenging myself to grow as both designer and web developer. This
          portofolio is a reflection of that journey and I'm just getting
          started.
        </motion.p>
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
      title: "Visual and Creative",
      description:
        "Giving life to ideas through visual storytelling and my foundation as a Visual Communication Student",
    },
  ];
  const stacks = [
    [
      html,
      css,
      javascript,
      typescript,
      php,
      react,
      nextjs,
      tailwindcss,
      bootstrap,
      nodejs,
      express,
      laravel,
      vscode,
      git,
      github,
      vite,
      docker,
      postman,
      strapi,
    ],
    [
      figma,
      photoshop,
      illustrator,
      coreldraw,
      canva,
      premiere,
      capcut,
      chatgpt,
    ],
  ];
  const [activeTechStack, setActiveTechStack] = useState<number | null>(0);

  const ctx = useContext(AnimationContext);

  if (!ctx) return null;

  const { skillsRef, itemVariants, isInView3 } = ctx;

  return (
    <div ref={skillsRef} className=" flex flex-col gap-y-10">
      <div className=" w-10/12 mx-auto flex flex-col gap-y-30 mt-50">
        <div className="flex flex-col gap-y-5">
          <motion.h1
            variants={itemVariants}
            initial="close"
            animate={isInView3 ? "open" : "close"}
            custom={0.1}
            className="text-5xl lg:text-7xl font-bold text-slate-800 text-center"
          >
            Skills & Expertise
          </motion.h1>
          <motion.p
            variants={itemVariants}
            initial="close"
            animate={isInView3 ? "open" : "close"}
            custom={0.2}
            className="text-slate-800 text-center text-xl"
          >
            All of my technical skills.
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-10 mx-auto gap-x-10">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setActiveTechStack(key)}
            >
              <ServiceCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            </div>
          ))}
        </div>
      </div>
      {activeTechStack !== null && (
        <div className="py-10 text-center flex flex-col gap-y-10">
          <h1 className="text-3xl lg:text-5xl font-semibold text-slate-800 text-center">
            Tools & Language -{" "}
            {skills.map((skill) => skill.title).at(activeTechStack)}
          </h1>
          <Marquee
            className="h-full"
            loop={0}
            speed={200}
            pauseOnHover
            autoFill={true}
          >
            {stacks[activeTechStack].map((stack, idx) => (
              <span
                key={idx}
                className=" text-white px-5 text-sm flex flex-row"
              >
                <img src={stack} alt="" width={64} />
              </span>
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
};

const AboutMe: FC = () => {
  return (
    <AnimationProvider>
      <Layout>
        <Helmet>
          <title>About Me | Arel Smith</title>
          <meta name="description" content="Learn more about Arel Smith" />
        </Helmet>
        <Jumbotron />
        <SelfDetail />
        <MySkill />
        <Footer />
      </Layout>
    </AnimationProvider>
  );
};

export default AboutMe;
