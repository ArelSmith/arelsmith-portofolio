import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

// import FeatherIcon from "feather-icons-react";

const NavigationBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hamburgerOpen) {
      gsap.set(panelRef.current, {
        opacity: 0,
        scale: 1,
        borderRadius: "999px",
        width: "20em",
        height: "20em",
        top: "-20em",
        right: "-20em",
        left: "auto",
      });

      gsap.to(panelRef.current, {
        opacity: 1,
        scale: 1,
        borderRadius: "0px",
        duration: 0.4,
        ease: "circ.out",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        right: "auto",
      });
    } else {
      gsap.to(panelRef.current, {
        opacity: 0,
        duration: 0.2,
      });
    }
  }, [hamburgerOpen]);
  return (
    <div>
      <nav className="flex flex-row max-w-11/12 mx-auto justify-between items-center p-5 ">
        <h1
          className={`font-semibold font-jost text-3xl transition duration-500 z-10 ${
            hamburgerOpen ? "text-[#EFE4D2]" : "text-black"
          }`}
        >
          ArelSmith.
        </h1>

        <button
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          className="relative w-8 h-8 flex items-center justify-center hover:cursor-pointer z-10"
        >
          <span className="flex flex-col items-center justify-center gap-y-2">
            <div
              className={`w-10 h-[6px]  rounded-3xl transition-transform duration-300 ${
                hamburgerOpen
                  ? "rotate-45 translate-y-[6.7px] bg-[#EFE4D2]"
                  : "bg-black"
              }`}
            ></div>
            <div
              className={`w-10 h-[6px]  rounded-3xl transition-transform duration-300 ${
                hamburgerOpen
                  ? "-rotate-45 -translate-y-[6.7px] bg-[#EFE4D2]"
                  : "bg-black"
              }`}
            ></div>
          </span>
        </button>
      </nav>
      <div
        ref={panelRef}
        className="max-w-screen bg-[#954C2E] opacity-75 w-screen h-screen absolute top-0 transition flex items-center justify-center"
      >
        <ul className="max-w-xl text-center flex flex-col gap-y-5">
          <li>
            <Link
              to="/"
              className="text-[#EFE4D2] text-2xl hover:bg-[#131D4F] px-4 py-2 rounded-3xl transition duration-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#EFE4D2] text-2xl hover:bg-[#131D4F] px-4 py-2 rounded-3xl transition duration-100"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-[#EFE4D2] text-2xl hover:bg-[#131D4F] px-4 py-2 rounded-3xl transition duration-100"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[#EFE4D2] text-2xl hover:bg-[#131D4F] px-4 py-2 rounded-3xl transition duration-100"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
