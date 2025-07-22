import profileTemp from "../../public/profile_temp_2.png";

const Jumbotron = () => {
  return (
    <main>
      <div className="max-w-8/12 mx-auto flex flex-col-reverse gap-y-6 lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-y-5 lg:max-w-4/12 w-full">
          <div>
            <h3 className="text-lg w-30 mx-auto lg:mx-0 text-center text-[#EFE4D2] bg-[#954C2E] rounded-3xl px-3 py-1">
              Arel Smith
            </h3>
            <h1 className="text-5xl lg:text-8xl lg:w-[150%] lg:text-left font-bold text-center text-slate-800">
              Junior Web <br /> Developer
            </h1>
          </div>
          <p className="lg:text-left text-center text-xl text-slate-800 opacity-75 font-medium">
            Hello! I am Arel Smith, a 17-year old Junior Web Developer and a
            student of Visual Communication Design at Sekolah Bunda Mulia. I'm
            passionate about building clean, user-friendly websites that blend
            both aesthetic design and functional development, A perfect mix of
            my coding skills and creative background. <br />
            Let's build something awesome!
          </p>
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
