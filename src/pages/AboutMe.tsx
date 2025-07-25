import Layout from "@/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutMeRef.current,
      {
        scrollTrigger: {
          trigger: aboutMeRef.current,
          start: "top center", // kapan animasi mulai (elemen masuk 80% viewport)
          end: "bottom 20%", // kapan animasi selesai
          toggleActions: "play none none none", // masuk, keluar, masuk lagi, keluar lagi
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      {
        opacity: 1,
      }
    );
  }, []);
  return (
    <Layout>
      <div className="h-[200vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl lg:text-7xl font-bold" ref={aboutMeRef}>
          About Me Page
        </h1>
      </div>
    </Layout>
  );
};

export default AboutMe;
