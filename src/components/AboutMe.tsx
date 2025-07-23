import { Link } from "react-router-dom";
import { motion, type Variants } from "motion/react";

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
      <div className="max-w-8/12 mx-auto flex flex-col-reverse gap-y-6 lg:flex-row lg:min-h-screen lg:-mt-[76px] items-center justify-between">
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
            Hello! I am Arel Smith, a 17-year old Junior Web Developer that
            passionate about building clean, user-friendly websites that blend
            both aesthetic design and functional development. <br />
            Let's build something awesome!
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial="close"
            animate="open"
            custom={0.5}
            className="flex flex-row justify-around lg:justify-start lg:gap-x-5 lg:w-100"
          >
            <Link
              to="/"
              className="text-white bg-tertiary hover:bg-[#5f2f1c] transition duration-150 px-4 py-2 rounded-2xl shadow-xl lg:text-2xl lg:px-6 lg:py-4"
            >
              Download CV
            </Link>
            <Link
              to="/"
              className="text-tertiary border border-tertiary hover:text-white transition duration-150 hover:bg-tertiary px-4 py-2 rounded-2xl shadow-xl lg:text-2xl lg:px-6 lg:py-4"
            >
              Contact me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
