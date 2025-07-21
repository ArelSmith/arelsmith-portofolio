import profileTemp from "../../public/profile_temp.jpg";

const Jumbotron = () => {
  return (
    <main>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between mt-5 relative -z-20">
        <div className="max-w-3xl w-full h-full">
          <h1 className="font-semibold text-xl">Arel Smith</h1>
        </div>
        <div className="max-w-3xl w-full h-full">
          <img src={profileTemp} alt="Profile" className="rounded-4xl" />
        </div>
      </div>
    </main>
  );
};

export default Jumbotron;
