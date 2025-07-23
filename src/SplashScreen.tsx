import { useEffect, useState } from "react";

type SplashScreenProps = {
  progress: number;
};

export const SplashScreen: React.FC<SplashScreenProps> = ({ progress }) => {
  const words = ["Hello", "This is arelsmith's portofolio", "Welcome!!"];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    let interval: number | null = null;

    interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex === words.length - 1) {
          if (interval) clearInterval(interval);
        }

        return nextIndex;
      });
    }, 2000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [words.length]);

  return (
    <div className="fixed inset-0 bg-[#EFE4D2] flex flex-col items-center justify-center z-50">
      <div className="text-6xl mb-4"></div>

      <h1 className="text-3xl font-semibold font-jost mb-4 text-center">
        "{words[currentWordIndex]}"
      </h1>
      <p className="text-black text-lg mb-6">
        Loading... {Math.round(progress)}%
      </p>

      <div className="w-4/5 md:w-1/2 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#954C2E] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
