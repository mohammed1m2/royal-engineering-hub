import { Link } from "react-router-dom";
import { LinkedinIcon, InstagramIcon } from "./SocialIcons";
import logoImg from "@/assets/re-logo.png";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="bg-royal" style={{ padding: "32px 0", color: "#9070a0" }}>
    <div className="container space-y-6">
      {/* Top row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Royal Engineering" className="h-9 w-auto brightness-0 invert" />
          <span className="text-gold font-extrabold tracking-wide text-sm">RÔYAL <span className="font-medium opacity-90">engineering</span></span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
          {navLinks.map((l) => (
            <Link key={l.path} to={l.path} className="hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Middle: tagline + socials */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6">
        <p className="text-xs">Kuwait's Leading Integrated Engineering Partner Since 2007</p>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
            <LinkedinIcon size={14} />
          </a>
          <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
            <InstagramIcon size={14} />
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] border-t border-primary-foreground/10 pt-5">
        <p>© {new Date().getFullYear()} Royal Engineering. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link to="/contact" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link to="/careers" className="hover:text-gold transition-colors">Careers</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
