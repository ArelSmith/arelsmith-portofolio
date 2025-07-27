import { useEffect, useState } from "react";
import { SplashScreen } from "./SplashScreen";
import { useCookies } from "react-cookie";

import Layout from "./Layout";
import Jumbotron from "./components/Jumbotron";
import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function MainScreen() {
  return (
    <Layout>
      <Sidebar />
      <Jumbotron />
      <AboutMe />
      <Projects />
      <Contacts />
      <Footer />
    </Layout>
  );
}

function App() {
  const [cookies, setCookie] = useCookies(["splashSeen"]);
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoadingComplete(true), 300);
          setCookie("splashSeen", true, { path: "/", maxAge: 86400 });
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 50

    if (cookies.splashSeen) {
      setLoadingComplete(true);
      return;
    }

    return () => clearInterval(timer);
  }, [cookies, setCookie]);

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
