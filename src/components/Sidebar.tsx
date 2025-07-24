import { Folder, Home, Mail, User } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Sidebar = () => {
  const [currentSection, setCurrentSection] = useState<string>("home");

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
      },
    },
    close: {
      opacity: 0,
      x: -80,
      transition: {
        type: "tween",
      },
    },
  };

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const currentY = window.scrollY;
    if (currentY < window.innerHeight / 2) {
      setCurrentSection("home");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return (
    <div className="hidden lg:flex items-center justify-center fixed top-1/2 transform -translate-y-1/2 left-0 w-20 h-100 bg-amber-600 rounded-r-3xl">
      <ul className="flex flex-col items-center space-y-10 py-4">
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={() => {
              setCurrentSection("home");
            }}
            className="text-white flex flex-col justify-center items-center gap-y-1 hover:cursor-pointer"
          >
            <Home />
            <motion.div
              variants={itemVariants}
              initial="close"
              animate={currentSection == "home" ? "open" : "close"}
              className="w-6 h-1 bg-white rounded-3xl"
            ></motion.div>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={() => {
              setCurrentSection("about");
            }}
            className="text-white flex flex-col justify-center items-center gap-y-1 hover:cursor-pointer"
          >
            <User />
            <motion.div
              variants={itemVariants}
              initial="close"
              animate={currentSection == "about" ? "open" : "close"}
              className="w-6 h-1 bg-white rounded-3xl"
            ></motion.div>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => {
              setCurrentSection("projects");
            }}
            className="text-white flex flex-col justify-center items-center gap-y-1 hover:cursor-pointer"
          >
            <Folder />
            <motion.div
              variants={itemVariants}
              initial="close"
              animate={currentSection == "projects" ? "open" : "close"}
              className="w-6 h-1 bg-white rounded-3xl"
            ></motion.div>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => {
              setCurrentSection("contact");
            }}
            className="text-white flex flex-col justify-center items-center gap-y-1 hover:cursor-pointer"
          >
            <Mail />
            <motion.div
              variants={itemVariants}
              initial="close"
              animate={currentSection == "contact" ? "open" : "close"}
              className="w-6 h-1 bg-white rounded-3xl"
            ></motion.div>
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
