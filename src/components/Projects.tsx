import { ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";

const Projects = () => {
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
  return (
    <section id="projects">
      <div className="max-w-8/12 mx-auto flex flex-col gap-y-5 lg:min-h-screen mt-50 lg:mt-0 items-center justify-center">
        <motion.h1
          ref={itemRef}
          variants={itemVariants}
          initial="close"
          animate={isInView ? "open" : "close"}
          custom={0.1}
          className="text-5xl lg:text-7xl font-bold text-slate-800 text-center"
        >
          Project
        </motion.h1>
        <motion.p
          ref={itemRef}
          variants={itemVariants}
          initial="close"
          animate={isInView ? "open" : "close"}
          custom={0.2}
          className="lg:text-left text-center text-xl text-slate-800 opacity-75 font-medium"
        >
          All of my projects that i have done and currently working on.
        </motion.p>
        <motion.div
          ref={itemRef}
          initial={{ scale: 0 }}
          animate={
            isInView
              ? {
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }
              : { scale: 0 }
          }
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/projects"
            className="text-white bg-tertiary mx-auto lg:mx-0 lg:w-50 w-40 text-center hover:bg-[#5f2f1c] hover:gap-x-6 flex flex-row items-center gap-x-3  transition-all duration-150 px-4 py-2 rounded-2xl shadow-xl lg:text-2xl lg:px-6 lg:py-4"
          >
            Check out <ChevronsRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
