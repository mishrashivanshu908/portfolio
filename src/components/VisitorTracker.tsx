import { useEffect } from "react";
import { useLocation } from "react-router";

export default function VisitorTracker() {
  const location = useLocation();

  useEffect(() => {
    // Visitor tracking removed as backend is removed
    console.log("Visitor at:", location.pathname);
  }, [location.pathname]);

  return null;
}