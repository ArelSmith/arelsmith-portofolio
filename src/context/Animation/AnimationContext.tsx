import { createContext } from "react";
import { type Variants } from "motion/react";

interface AnimationContextType {
  jumbotronRef: React.RefObject<HTMLDivElement>;
  selfDetailRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  isInView1: boolean;
  isInView2: boolean;
  isInView3: boolean;
  itemVariants: Variants;
}

export const AnimationContext = createContext<AnimationContextType | null>(
  null
);
