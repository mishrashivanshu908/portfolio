import { Toaster } from "@/components/ui/sonner";
// import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import { StrictMode, useEffect, lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import VisitorTracker from "@/components/VisitorTracker";
import WildLoader from "@/components/WildLoader";
import CyberSidebar from "@/components/CyberSidebar";
import "./index.css";
import "./types/global.d.ts";

// Lazy load route components for better code splitting
const Landing = lazy(() => import("./pages/Landing.tsx"));
const Projects = lazy(() => import("./pages/Projects.tsx"));
const Certifications = lazy(() => import("./pages/Certifications.tsx"));
const Socials = lazy(() => import("./pages/Socials.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Gallery = lazy(() => import("./pages/Gallery.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Simple loading fallback for route transitions
function RouteLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );
}

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Force minimum load time of 3 seconds to ensure smooth experience
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <WildLoader />}
      <div className={showSplash ? "hidden" : "contents"}>
        <VisitorTracker />
        <RouteSyncer />
        <CyberSidebar />
        <Suspense fallback={<WildLoader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <VlyToolbar /> */}
    <InstrumentationProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <Toaster />
      </HelmetProvider>
    </InstrumentationProvider>
  </StrictMode>,
);