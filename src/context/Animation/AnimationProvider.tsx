import { useRef } from "react";
import { useInView, type Variants } from "motion/react";
import { AnimationContext } from "./AnimationContext";

const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const jumbotronRef = useRef<HTMLDivElement>(null!);
  const selfDetailRef = useRef<HTMLDivElement>(null!);
  const skillsRef = useRef<HTMLDivElement>(null!);
  const isInView1 = useInView(jumbotronRef, {
    once: false,
  });
  const isInView2 = useInView(selfDetailRef, {
    once: false,
  });
  const isInView3 = useInView(skillsRef, {
    once: false,
  });
  const itemVariants: Variants = {
    open: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom,
        type: "tween",
      },
    }),
    close: {
      opacity: 0,
      x: -80,
      transition: {
        type: "tween",
      },
    },
  };
  return (
    <AnimationContext.Provider
      value={{
        jumbotronRef,
        selfDetailRef,
        skillsRef,
        isInView1,
        isInView2,
        isInView3,
        itemVariants,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
