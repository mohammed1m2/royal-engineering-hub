import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1">
      <PageTransition>
        <Outlet />
      </PageTransition>
    </main>
    <Footer />
  </div>
);

export default Layout;
