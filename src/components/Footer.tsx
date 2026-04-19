import { Link } from "react-router-dom";
import logoImg from "@/assets/re-logo.png";

const Footer = () => (
  <footer className="bg-royal text-primary-foreground/70 py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Royal Engineering" className="h-8 w-auto brightness-0 invert" />
        <p className="text-xs">© {new Date().getFullYear()} Royal Engineering. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-6 text-xs">
        <Link to="/contact" className="hover:text-primary-foreground transition-colors">Privacy</Link>
        <Link to="/careers" className="hover:text-primary-foreground transition-colors">Careers</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
