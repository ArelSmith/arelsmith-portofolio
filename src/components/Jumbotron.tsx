import profileTemp from "../../public/profile_temp.jpg";

const Jumbotron = () => {
  return (
    <main>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between mt-5">
        <div className="w-30 mx-auto">
          <h1 className="text-xl text-center text-[#EFE4D2] bg-[#954C2E] rounded-lg">
            Arel Smith
          </h1>
        </div>
        <div className="max-w-3xl">
          <img src={profileTemp} alt="Profile" className="rounded-4xl" />
        </div>
      </div>
    </main>
  );
};

export default Jumbotron;
