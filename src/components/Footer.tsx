import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-royal text-primary-foreground/70 py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div className="text-lg font-extrabold text-primary-foreground">RÔYAL <span className="text-xs font-normal tracking-widest uppercase">engineering</span></div>
        <p className="text-xs mt-1">© {new Date().getFullYear()} Royal Engineering. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-6 text-xs">
        <Link to="/contact" className="hover:text-primary-foreground transition-colors">Privacy</Link>
        <Link to="/careers" className="hover:text-primary-foreground transition-colors">Careers</Link>
        <span className="cursor-pointer hover:text-primary-foreground transition-colors">Arabic / عربي</span>
      </div>
    </div>
  </footer>
);

export default Footer;
