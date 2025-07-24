import { motion, type Variants } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";

import profileAboutMe from "../assets/profile_about_me.jpg";
const AboutMe = () => {
  const itemVariants: Variants = {
    open: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom,
        type: "tween",
      },
    }),
    close: {
      opacity: 0,
      x: -80,
      transition: {
        type: "tween",
      },
    },
  };
  return (
    <section id="#about">
      <div className="max-w-8/12 mx-auto flex flex-col-reverse gap-y-6 mt-20 lg:flex-row lg:min-h-screen lg:-mt-[76px] items-center justify-between">
        <div className="flex flex-col gap-y-5 lg:max-w-4/12 w-full">
          <div>
            <h1 className="text-5xl lg:text-7xl lg:w-[150%] lg:text-left font-bold text-center text-slate-800">
              About Me
            </h1>
          </div>
          <motion.p
            variants={itemVariants}
            initial="close"
            animate="open"
            custom={0.4}
            className="lg:text-left text-center text-xl text-slate-800 opacity-75 font-medium"
          >
            An introduction about me and my interest.
          </motion.p>
          <Link
            to="/about"
            className="text-white bg-tertiary mx-auto lg:mx-0 lg:w-50 text-center hover:bg-[#5f2f1c] hover:gap-x-6 flex flex-row items-center gap-x-3  transition-all duration-150 px-4 py-2 rounded-2xl shadow-xl lg:text-2xl lg:px-6 lg:py-4"
          >
            About me <ChevronsRight />
          </Link>
        </div>
        <div className="flex flex-col gap-y-5 lg:max-w-4/12 w-full">
          <img src={profileAboutMe} alt="" className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
