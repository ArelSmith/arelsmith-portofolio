import { Link } from "react-router-dom";

import profileTemp from "../../public/profile_temp_2.png";

const Jumbotron = () => {
  return (
    <main>
      <div className="max-w-8/12 mx-auto flex flex-col-reverse gap-y-6 lg:flex-row lg:min-h-screen lg:-mt-[76px] items-center justify-between">
        <div className="flex flex-col gap-y-5 lg:max-w-4/12 w-full">
          <div>
            <h3 className="text-lg w-30 mx-auto lg:mx-0 text-center text-bg bg-tertiary rounded-3xl px-3 py-1">
              Arel Smith
            </h3>
            <h1 className="text-5xl lg:text-8xl lg:w-[150%] lg:text-left font-bold text-center text-slate-800">
              Junior Web <br /> Developer
            </h1>
          </div>
          <p className="lg:text-left text-center text-xl text-slate-800 opacity-75 font-medium">
            Hello! I am Arel Smith, a 17-year old Junior Web Developer that
            passionate about building clean, user-friendly websites that blend
            both aesthetic design and functional development. <br />
            Let's build something awesome!
          </p>
          <div className="flex flex-row justify-around lg:justify-start lg:gap-x-5">
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
          </div>
        </div>
        <div className="max-w-2xl">
          <img
            src={profileTemp}
            alt="Profile"
            className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </main>
  );
};

export default Jumbotron;
