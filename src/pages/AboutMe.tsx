import Layout from "@/Layout";
import aboutMeThumbnail from "@/assets/profile_about_me.jpg";
import type { FC } from "react";

import image1 from "@/assets/image_1.jpg";
import image2 from "@/assets/image_2.jpg";
import image3 from "@/assets/image_3.png";

const Jumbotron: FC = () => {
  return (
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
          behind the projects. Here's a closer look at my journey, my passions,
          and the values that shape my works.
        </p>
      </div>
    </div>
  );
};

const SelfDetail: FC = () => {
  return (
    <div className="h-screen w-10/12 mx-auto flex flex-col lg:flex-row justify-around items-center">
      <div className="lg:w-5/12 w-50 relative">
        <img src={image1} alt="Image 1" className="lg:w-100 w-200" />
        <img
          src={image2}
          alt="Image 2"
          className="lg:w-100 w-200 absolute top-25 left-25 lg:top-50 lg:left-50 scale-45  "
        />
        <img
          src={image3}
          alt="Image 3"
          className="lg:w-100 w-200 absolute -top-25 -left-25 lg:-top-50 lg:-left-50 scale-45"
        />
      </div>
      <div className="">
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

const AboutMe: FC = () => {
  return (
    <Layout>
      <Jumbotron />
      <SelfDetail />
    </Layout>
  );
};

export default AboutMe;
