import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

const NavigationBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hamburgerOpen) {
      gsap.fromTo(
        panelRef.current,
        {
          opacity: 0,
          scale: 1,
          borderRadius: "999px",
          top: "-60em",
          right: "-60em",
        },
        {
          opacity: 1,
          scale: 1,
          borderRadius: "0px",
          duration: 0.6,
          // ease: "circ",
          x: 0,
          top: 0,
          left: 0,
        }
      );
    } else {
      gsap.to(panelRef.current, {
        opacity: 0.8,
        scale: 1,
        borderRadius: "999px",
        top: "-30em",
        right: "-30em",
      });
    }
  }, [hamburgerOpen]);
  return (
    <div>
      <nav className="flex flex-row max-w-11/12 mx-auto justify-between items-center p-5 ">
        <h1
          className={`font-semibold font-jost text-3xl transition duration-500 ${
            hamburgerOpen ? "text-[#EFE4D2]" : "text-black"
          }`}
        >
          ArelSmith.
        </h1>

        <button
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          className="relative w-8 h-8 flex items-center justify-center hover:cursor-pointer"
        >
          <span
            className={`absolute transition-opacity duration-200 ${
              hamburgerOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <FeatherIcon
              icon="menu"
              size={50}
              className={hamburgerOpen ? "text-[#EFE4D2]" : "text-black"}
            />
          </span>
          <span
            className={`absolute transition-opacity duration-200 ${
              hamburgerOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <FeatherIcon
              icon="x"
              size={50}
              className={hamburgerOpen ? "text-[#EFE4D2]" : "text-black"}
            />
          </span>
        </button>
      </nav>
      {hamburgerOpen && (
        <div
          ref={panelRef}
          className="max-w-screen bg-[#954C2E] opacity-75 w-screen h-screen absolute top-0 -z-[100] transition flex items-center justify-center"
        >
          <ul className="max-w-xl text-center flex flex-col gap-y-5">
            <li>
              <Link
                to="/"
                className="text-[#EFE4D2] text-2xl hover:bg-[#131D4F] px-4 py-2 rounded-3xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[#EFE4D2] text-2xl hover:bg-[#131D4F] px-4 py-2 rounded-3xl"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-[#EFE4D2] text-2xl hover:bg-[#131D4F] px-4 py-2 rounded-3xl"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[#EFE4D2] text-2xl hover:bg-[#131D4F] px-4 py-2 rounded-3xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
