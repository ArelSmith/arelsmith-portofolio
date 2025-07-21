import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import AOS from "aos";
import "aos/dist/aos.css";
import Jumbotron from "./components/Jumbotron";

type SplashScreenProps = {
  progress: number;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ progress }) => {
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

function MainScreen() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <NavigationBar />
      <Jumbotron />
    </main>
  );
}

function App() {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoadingComplete(true), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 0); // 50

    return () => clearInterval(timer);
  }, []);

  if (!loadingComplete) {
    return <SplashScreen progress={progress} />;
  }
  return (
    <div>
      <MainScreen />
    </div>
  );
}

export default App;
