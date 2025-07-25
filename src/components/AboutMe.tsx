import { motion, useInView, type Variants } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import VanillaTilt from "vanilla-tilt";

import profileAboutMe from "../assets/profile_about_me.jpg";
import { useEffect, useRef } from "react";
const AboutMe = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    once: false,
  });

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
    closeReversed: {
      opacity: 0,
      x: 80,
      transition: {
        type: "tween",
      },
    },
  };

  useEffect(() => {
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 25,
        speed: 1000,
        transition: true,
      });
    }
  }, []);
  return (
    <section id="about">
      <div className="max-w-8/12 mx-auto flex flex-col-reverse gap-y-6 mt-50 lg:flex-row lg:min-h-screen lg:-mt-[76px] items-center justify-between">
        <div className="flex flex-col gap-y-5 lg:max-w-4/12 w-full">
          <div>
            <motion.h1
              ref={itemRef}
              variants={itemVariants}
              initial="close"
              animate={isInView ? "open" : "close"}
              custom={0.2}
              className="text-5xl lg:text-7xl lg:w-[150%] lg:text-left font-bold text-center text-slate-800"
            >
              About Me
            </motion.h1>
          </div>
          <motion.p
            ref={itemRef}
            variants={itemVariants}
            initial="close"
            animate={isInView ? "open" : "close"}
            custom={0.3}
            className="lg:text-left text-center text-xl text-slate-800 opacity-75 font-medium"
          >
            An introduction about me and my interest.
          </motion.p>
          <motion.div
            ref={itemRef}
            variants={itemVariants}
            initial="close"
            animate={isInView ? "open" : "close"}
            whileTap={{ scale: 0.9 }}
            custom={0.4}
          >
            <Link
              to="/about"
              className="text-white bg-tertiary mx-auto lg:mx-0 lg:w-50 w-40 text-center hover:bg-[#5f2f1c] hover:gap-x-6 flex flex-row items-center gap-x-3  transition-all duration-150 px-4 py-2 rounded-2xl shadow-xl lg:text-2xl lg:px-6 lg:py-4"
            >
              About me <ChevronsRight />
            </Link>
          </motion.div>
        </div>
        <div
          className="flex flex-col gap-y-5 lg:max-w-4/12 w-full"
          ref={imageRef}
          data-tilt
        >
          <motion.img
            src={profileAboutMe}
            alt="Profile"
            className="rounded-3xl grayscale-0 lg:grayscale hover:grayscale-0 transition"
            ref={itemRef}
            variants={itemVariants}
            initial="closeReversed"
            animate={isInView ? "open" : "closeReversed"}
            custom={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
