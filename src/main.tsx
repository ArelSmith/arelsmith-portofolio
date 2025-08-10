import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import App from "./App.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import Projects from "./pages/Projects.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
