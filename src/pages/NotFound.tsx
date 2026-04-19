import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO title="Page Not Found | Royal Engineering Kuwait" description="The page you're looking for doesn't exist. Return to Royal Engineering — Kuwait's trusted integrated engineering partner." />
      <div className="flex min-h-[70vh] items-center justify-center bg-background px-6">
        <div className="text-center max-w-md" style={{ animation: "fade-slide-up 0.6s ease-out both" }}>
          <h1 className="text-[110px] leading-none font-extrabold text-royal mb-4">404</h1>
          <p className="text-lg text-foreground mb-8">Page not found. Let's get you back on track.</p>
          <Link
            to="/"
            className="btn-hover inline-flex bg-accent text-accent-foreground font-semibold text-sm px-8 py-3 rounded-[9px] hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
