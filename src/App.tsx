import { useEffect, useState } from "react";
import { SplashScreen } from "./SplashScreen";

import Layout from "./Layout";
import Jumbotron from "./components/Jumbotron";
import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
function MainScreen() {
  return (
    <Layout>
      <Sidebar />
      <Jumbotron />
      <AboutMe />
      <Projects />
      <Contacts />
    </Layout>
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
    <div className="scroll-smooth">
      <MainScreen />
    </div>
  );
}

export default App;
