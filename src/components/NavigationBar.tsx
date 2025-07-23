import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "motion/react";

const NavigationBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Ini variant buat navigasi
  const navVariant: Variants = {
    open: {
      clipPath: "circle(3240px at calc(100% - 120px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    close: {
      clipPath: "circle(0 at calc(100% - 120px) 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const navItemVariant: Variants = {
    open: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    }),
    close: {
      opacity: 0,
      x: -80,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  if (isMobile) {
    navVariant.open = {
      clipPath: "circle(3240px at calc(100% - 50px) 40px)",
    };
    navVariant.close = {
      clipPath: "circle(0 at calc(100% - 50px) 40px)",
    };
  }

  return (
    <div>
      <nav className="flex flex-row max-w-11/12 mx-auto justify-between items-center p-5">
        <h1
          className={`font-semibold font-jost text-3xl transition duration-500 z-20 ${
            hamburgerOpen ? "text-bg" : "text-slate-800"
          }`}
        >
          ArelSmith.
        </h1>

        <button
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          className="relative w-8 h-8 flex items-center justify-center hover:cursor-pointer z-20"
        >
          <span className="flex flex-col items-center justify-center gap-y-2">
            <div
              className={`w-10 h-[6px]  rounded-3xl transition-transform duration-300 ${
                hamburgerOpen
                  ? "rotate-45 translate-y-[6.7px] bg-bg"
                  : "bg-slate-800"
              }`}
            ></div>
            <div
              className={`w-10 h-[6px]  rounded-3xl transition-transform duration-300 ${
                hamburgerOpen
                  ? "-rotate-45 -translate-y-[6.7px] bg-bg"
                  : "bg-slate-800"
              }`}
            ></div>
          </span>
        </button>
      </nav>

      <motion.div
        variants={navVariant}
        animate={hamburgerOpen ? "open" : "close"}
        className="max-w-screen bg-tertiary backdrop-blur-sm opacity-95 w-screen h-screen absolute top-0 transition flex items-center justify-center z-10"
      >
        <ul className="max-w-xl text-center flex flex-col gap-y-6">
          <motion.li variants={navItemVariant} custom={0.1}>
            <Link
              to="/"
              className="text-[#EFE4D2] text-3xl hover:bg-secondary px-4 py-2 rounded-3xl transition duration-100"
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={navItemVariant} custom={0.2}>
            <Link
              to="/about"
              className="text-[#EFE4D2] text-3xl hover:bg-secondary px-4 py-2 rounded-3xl transition duration-100"
            >
              About Me
            </Link>
          </motion.li>
          <motion.li variants={navItemVariant} custom={0.3}>
            <Link
              to="/projects"
              className="text-[#EFE4D2] text-3xl hover:bg-secondary px-4 py-2 rounded-3xl transition duration-100"
            >
              Project
            </Link>
          </motion.li>
          <motion.li variants={navItemVariant} custom={0.4}>
            <Link
              to="/contact"
              className="text-[#EFE4D2] text-3xl hover:bg-secondary px-4 py-2 rounded-3xl transition duration-100"
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavigationBar;
