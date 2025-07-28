import Layout from "@/Layout";
import aboutMeThumbnail from "@/assets/profile_about_me.jpg";

const AboutMe = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row-reverse lg:items-center mx-auto lg:mt-0 mt-[76px] gap-y-6">
        <img
          src={aboutMeThumbnail}
          alt="About me Thumbnail"
          className="lg:w-1/2 lg:h-screen"
        />
        <div className="flex flex-col gap-y-2 lg:max-w-96 max-w-60 mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-center text-slate-800">
            About me
          </h1>
          <div className="w-15 h-2 mx-auto bg-black rounded-3xl"></div>
          <p className="text-center ">
            You're arrived at the right place to learn more about the person
            behind the projects. Here's a closer look at my journey, my
            passions, and the values that shape my works.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
