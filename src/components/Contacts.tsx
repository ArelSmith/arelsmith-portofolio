import contactImage from "@/assets/contact_image_cropped.jpeg";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  const MotionLink = motion.create(Link);
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
    <section id="contact">
      <div className="max-w-8/12 mx-auto flex flex-col-reverse gap-y-6 mt-50 lg:flex-row lg:min-h-screen lg:-mt-[76px] items-center justify-between">
        <div className="flex flex-col gap-y-5 lg:max-w-4/12 w-full">
          <motion.h1
            ref={itemRef}
            variants={itemVariants}
            initial="close"
            animate={isInView ? "open" : "close"}
            custom={0.1}
            className="text-5xl lg:text-7xl lg:w-[150%] lg:text-left font-bold text-center text-slate-800"
          >
            Let me know!
          </motion.h1>
          <motion.p
            ref={itemRef}
            variants={itemVariants}
            initial="close"
            animate={isInView ? "open" : "close"}
            custom={0.2}
            className="lg:text-left text-center text-xl text-slate-800 opacity-75 font-medium"
          >
            Interested in working together or have a project in mind? Don't
            hesistate to reach out, let's bring your ideas to life! <br />
            <br />
            arelarel576@gmail.com
          </motion.p>
          <div className="flex flex-row gap-x-2 justify-center lg:justify-start">
            <MotionLink
              ref={itemRef}
              initial={{ y: 80, opacity: 0 }}
              animate={
                isInView
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.3,
                      },
                    }
                  : { y: 80, opacity: 0 }
              }
              to="https://www.instagram.com/arelsmith6/"
              target="_blank"
              className="bg-slate-800 text-white p-3 rounded-4xl hover:bg-slate-600 transition"
            >
              <Instagram />
            </MotionLink>
            <MotionLink
              ref={itemRef}
              initial={{ y: 80, opacity: 0 }}
              animate={
                isInView
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                      },
                    }
                  : { y: 80, opacity: 0 }
              }
              to="https://github.com/ArelSmith/"
              target="_blank"
              className="bg-slate-800 text-white p-3 rounded-4xl hover:bg-slate-600 transition"
            >
              <Github />
            </MotionLink>
            <MotionLink
              ref={itemRef}
              initial={{ y: 80, opacity: 0 }}
              animate={
                isInView
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                      },
                    }
                  : { y: 80, opacity: 0 }
              }
              to="mailto:arelarel576@gmail.com"
              className="bg-slate-800 text-white p-3 rounded-4xl hover:bg-slate-600 transition"
            >
              <Mail />
            </MotionLink>
            <MotionLink
              ref={itemRef}
              initial={{ y: 80, opacity: 0 }}
              animate={
                isInView
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.6,
                      },
                    }
                  : { y: 80, opacity: 0 }
              }
              to="https://www.linkedin.com/in/arel-smith-9633b6293/"
              target="_blank"
              className="bg-slate-800 text-white p-3 rounded-4xl hover:bg-slate-600 transition"
            >
              <Linkedin />
            </MotionLink>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 lg:max-w-4/12 w-full">
          <motion.img
            ref={itemRef}
            variants={itemVariants}
            initial="close"
            animate={isInView ? "open" : "closeReversed"}
            custom={0.3}
            src={contactImage}
            alt="Contact Image"
            className="grayscale-0 lg:grayscale hover:grayscale-0 hover:scale-110 transition duration-150"
          />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
