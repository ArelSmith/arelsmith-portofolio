import { useState } from "react";
import FeatherIcon from "feather-icons-react";

const NavigationBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  return (
    <div>
      <nav className="flex flex-row max-w-11/12 mx-auto justify-between items-center p-5 ">
        <h1 className="font-semibold font-jost text-3xl">ArelSmith.</h1>

        <button
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
          className="relative w-8 h-8 flex items-center justify-center hover:cursor-pointer"
        >
          <span
            className={`absolute transition-opacity duration-200 ${
              hamburgerOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <FeatherIcon icon="menu" size={50} />
          </span>
          <span
            className={`absolute transition-opacity duration-200 ${
              hamburgerOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <FeatherIcon icon="x" size={50} />
          </span>
        </button>
      </nav>
    </div>
  );
};

export default NavigationBar;
