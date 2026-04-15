import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border h-[60px] flex items-center">
      <div className="container flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname.startsWith(l.path)
                  ? "text-foreground border-b-2 border-accent pb-0.5"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <span className="text-xs text-muted-foreground cursor-pointer">AR | EN</span>
          <Link
            to="/contact"
            className="bg-royal text-gold text-sm font-semibold px-5 py-2 rounded-[9px] hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[60px] left-0 right-0 bg-background border-b border-border lg:hidden z-50">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 ${
                  location.pathname.startsWith(l.path) ? "text-gold" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-royal text-gold text-sm font-semibold px-5 py-2.5 rounded-[9px] text-center mt-2"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
