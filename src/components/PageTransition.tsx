import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const t = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(t);
  }, [location.pathname]);

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transition: "opacity 0.35s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
