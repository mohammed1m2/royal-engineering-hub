import { Shield, Monitor, Lock, Wifi, Tv, Paintbrush, Wrench, BarChart3, Headphones, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

/* ─── STAT COUNTER ─── */
const StatItem = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { ref, inView } = useInView();
  const value = useCountUp(target, inView);
  return (
    <div ref={ref}>
      <div className="text-xl font-extrabold text-gold">{value}{suffix}</div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
    </div>
  );
};

/* ─── HERO ─── */
const Hero = () => (
  <section className="py-16 md:py-24">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div
          className="inline-flex items-center gap-2 bg-accent/10 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
          style={{ animation: "fade-slide-up 0.6s ease-out both" }}
        >
          <Shield size={14} /> 4× ISO Certified · Established  Kuwait 2007
        </div>
        <h1
          className="text-4xl md:text-5xl lg:text-[3.25rem] leading-tight mb-5"
          style={{ animation: "fade-slide-up 0.7s ease-out 0.1s both" }}
        >
          Your Trusted  Engineering Partner
        </h1>
        <p
          className="text-muted-foreground mb-8 max-w-xl leading-relaxed shadow-none"
          style={{ animation: "fade-slide-up 0.7s ease-out 0.2s both" }}
        >
          Security &amp; Safety · Infrastructure · Audio Visual · Fit-Out · Managed Services · PMO · Maintenance — all under one roof since 2007.
        </p>
        <div
          className="flex flex-wrap gap-3 mb-10"
          style={{ animation: "fade-slide-up 0.7s ease-out 0.3s both" }}
        >
          <Link to="/contact" className="btn-hover bg-royal text-primary-foreground text-sm font-semibold px-6 py-3 rounded-[9px]">
            Request Free Consultation
          </Link>
          <Link to="/references" className="btn-hover border border-border text-foreground text-sm font-semibold px-6 py-3 rounded-[9px] hover:bg-secondary transition-colors">
            View References →
          </Link>
        </div>
        <div
          className="border-t border-border pt-5 flex flex-wrap gap-6 text-center"
          style={{ animation: "fade-slide-up 0.7s ease-out 0.4s both" }}
        >
          <StatItem target={18} suffix="+" label="Years" />
          <StatItem target={200} suffix="+" label="Projects" />
          <StatItem target={8} suffix="" label="Divisions" />
          <StatItem target={30} suffix="+" label="Partners" />
          <StatItem target={4} suffix="" label="ISO Certs" />
        </div>
      </div>

      {/* Control Room Visual */}
      <div className="bg-[#0d0a18] rounded-xl p-6 relative overflow-hidden" style={{ animation: "fade-slide-up 0.8s ease-out 0.2s both" }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] tracking-widest uppercase text-primary-foreground/50">Control Room · Live</span>
          <span className="flex items-center gap-1.5 text-[10px] text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" /> Systems Online
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded-md animate-tile-glow"
              style={{
                backgroundColor: i % 3 === 0 ? "#c8a84b22" : "#3c003c44",
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-6 flex-1 rounded bg-primary-foreground/10" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── ISO BAR ─── */
const isos = [
  ["ISO 9001", "Quality Management"],
  ["ISO/IEC 27001", "Info Security"],
  ["ISO 45001", "Health & Safety"],
  ["ISO 14001", "Environment"],
];

const IsoBar = () => (
  <section className="bg-royal py-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-6">
        {isos.map(([code, label], i) => (
          <div
            key={code}
            className="flex items-center gap-2"
            style={{ animation: `fade-slide-up 0.5s ease-out ${i * 0.1}s both` }}
          >
            <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center">
              <Award size={14} className="text-gold" />
            </div>
            <div>
              <div className="text-xs font-bold text-primary-foreground">{code}</div>
              <div className="text-[10px] text-primary-foreground/50">{label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-primary-foreground/40 tracking-wide">CAPT · CAIT · Category 4 Electrical</div>
    </div>
  </section>
);

/* ─── PARTNERS MARQUEE ─── */
const partners = [
  ["HIKVISION","#c8a84b"],["Avigilon","#3c003c"],["cisco","#049fd9"],["Honeywell","#cc0000"],
  ["IBM","#1f70c1"],["Dell EMC","#007db8"],["AXIS","#3c003c"],["Lenovo","#e2231a"],
  ["Genetec","#009a44"],["Johnson Controls","#cc0000"],["Huawei","#cf0a2c"],["AJAX","#111111"],
  ["HID","#e2231a"],["Milestone","#006fcf"],["Gallagher","#c8a84b"],["Bosch","#444444"],
  ["TP-Link","#e87722"],["Garrett","#3c003c"],["WatchNET","#c8a84b"],["PELCO","#005baa"],
];

const PartnersMarquee = () => (
  <section className="bg-surface py-8">
    <div className="container mb-4">
      <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-semibold text-center">Certified Technology Partners</p>
    </div>
    <div className="marquee-fade overflow-hidden">
      <div className="marquee-track">
        {[...partners, ...partners].map(([name, color], i) => (
          <span key={i} className="mx-6 text-sm font-bold whitespace-nowrap" style={{ color }}>{name}</span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── DIVISIONS ─── */
const divisions = [
  { icon: Lock, name: "Security & Safety", desc: "CCTV · Access · Screening" },
  { icon: Wifi, name: "Infrastructure", desc: "Cabling · Networks · Data Centers" },
  { icon: Tv, name: "Audio Visual", desc: "AV Systems · Signage · IPTV" },
  { icon: Paintbrush, name: "Fit-Out", desc: "Interior Design · Turnkey Build" },
  { icon: Wrench, name: "Managed Services", desc: "MEP · Operations · FM" },
  { icon: BarChart3, name: "PMO", desc: "PMP Certified · Governance" },
  { icon: Headphones, name: "Maintenance", desc: "24/7 IT & Security Support" },
  { icon: ShieldCheck, name: "HSE", desc: "HSE Consulting · Risk Assessment · Compliance" },
  { icon: Monitor, name: "Control Rooms", desc: "ISO-Standard Command Centers", featured: true },
];

const Divisions = () => (
  <section className="py-20">
    <div className="container">
      <AnimatedSection><SectionLabel>Our Divisions</SectionLabel></AnimatedSection>
      <AnimatedSection delay={100}><h2 className="text-3xl md:text-4xl mb-10">Eight Specializations. One Company.</h2></AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {divisions.map((d, i) => (
          <AnimatedSection key={d.name} delay={i * 80}>
            <div
              className={`group p-6 rounded-xl border transition-all cursor-pointer ${
                d.featured
                  ? "border-accent bg-accent/5 hover:bg-accent/10"
                  : "border-border hover:border-primary hover:bg-primary/5"
              }`}
            >
              <d.icon size={28} className={d.featured ? "text-gold mb-3" : "text-primary mb-3"} strokeWidth={1.5} />
              <h3 className="font-bold mb-1">{d.name}</h3>
              <p className="text-sm text-muted-foreground">{d.desc}</p>
              {d.featured && <span className="inline-block mt-2 text-[10px] font-bold tracking-widest uppercase text-gold">Featured</span>}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CONTROL ROOM FEATURE ─── */
const clients = [
  ["Jaber Al-Ahmad International Stadium", "Public Events"],
  ["Kuwait National Guard", "Government"],
  ["Environment Public Authority", "Government"],
  ["Ministry of Commerce & Industry", "10-Day Delivery"],
];

const ControlRoomFeature = () => (
  <section className="py-20">
    <div className="container grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden">
      <div className="bg-[#0d0a18] p-10 flex flex-col justify-center relative min-h-[360px]">
        <div className="absolute top-4 left-4 bg-royal text-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Flagship</div>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-video rounded bg-accent/10 animate-tile-glow" style={{ animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-5 flex-1 rounded bg-primary-foreground/10" />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 bg-accent/20 text-gold text-[10px] font-semibold px-3 py-1 rounded-full">
          Ministry of Commerce · 10 Days
        </div>
      </div>
      <div className="bg-background p-10 flex flex-col justify-center border border-l-0 border-border rounded-r-xl">
        <AnimatedSection><SectionLabel>Control Rooms</SectionLabel></AnimatedSection>
        <AnimatedSection delay={100}><h2 className="text-3xl font-extrabold mb-4">Mission-Critical Command Centers</h2></AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We design, build, and maintain ISO-standard control rooms for government, oil &amp; gas, and enterprise clients — delivered in record time.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <ul className="space-y-3 mb-8">
            {clients.map(([name, tag]) => (
              <li key={name} className="flex items-start gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                <span>{name} <span className="text-muted-foreground">({tag})</span></span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <Link to="/references" className="btn-hover inline-flex bg-accent text-accent-foreground text-sm font-semibold px-6 py-3 rounded-[9px] hover:opacity-90 transition-opacity self-start">
            See All Projects →
          </Link>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── PORTFOLIO PREVIEW ─── */
const projects = [
  { name: "Jaber Al-Ahmad Stadium", scope: "Control Room · AV · Security", sector: "GOVERNMENT", color: "#1a365d" },
  { name: "Kuwait Oil Company", scope: "Access Control · Security · 5 Days", sector: "OIL & GAS", color: "#4a2510" },
  { name: "Kuwait Supply Company", scope: "Interior Fit-Out · Full Turnkey", sector: "FIT-OUT", color: "#2d3748" },
  { name: "Kuwait National Guard", scope: "Control Room · Fit-Out · Security", sector: "GOVERNMENT", color: "#1a365d" },
  { name: "Central Bank of Kuwait", scope: "Security · Infrastructure · Low Voltage", sector: "BANKING", color: "#1c4532" },
  { name: "Australian University", scope: "Security · AV · Infrastructure", sector: "EDUCATION", color: "#553c14" },
];

const PortfolioPreview = () => (
  <section className="bg-surface py-20">
    <div className="container">
      <AnimatedSection><SectionLabel>Our Work</SectionLabel></AnimatedSection>
      <AnimatedSection delay={100}><h2 className="text-3xl md:text-4xl mb-10">Featured Projects</h2></AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 100}>
            <div className="group rounded-xl overflow-hidden bg-background border border-border hover:border-primary hover:shadow-md transition-all">
              <div className="relative h-44" style={{ backgroundColor: p.color }}>
                <span className="absolute bottom-3 left-3 bg-royal text-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {p.sector}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.scope}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CLIENTS ─── */
const vipClients = ["Kuwait Oil Company", "Central Bank of Kuwait", "Kuwait National Guard", "Jaber Al-Ahmad Stadium"];
const regularClients = ["Ministry of Commerce", "Australian University", "Warba Bank", "Schlumberger", "Agility", "Al-Futtaim", "VIVA", "Environment Authority"];

const Clients = () => {
  const { ref, inView } = useInView();
  return (
    <section className="py-20">
      <div className="container">
        <AnimatedSection><SectionLabel>Our Clients</SectionLabel></AnimatedSection>
        <AnimatedSection delay={100}><h2 className="text-3xl md:text-4xl mb-8">Trusted by Kuwait's Leading Organizations</h2></AnimatedSection>
        <div ref={ref} className="flex flex-wrap gap-3">
          {vipClients.map((c, i) => (
            <span
              key={c}
              className="bg-royal text-gold text-sm font-semibold px-4 py-2 rounded-full"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.4s ease-out ${i * 0.08}s, transform 0.4s ease-out ${i * 0.08}s`,
              }}
            >
              {c}
            </span>
          ))}
          {regularClients.map((c, i) => (
            <span
              key={c}
              className="border border-border text-foreground text-sm px-4 py-2 rounded-full hover:border-primary transition-colors"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.4s ease-out ${(vipClients.length + i) * 0.08}s, transform 0.4s ease-out ${(vipClients.length + i) * 0.08}s`,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CONTACT CTA ─── */
const ContactCTA = () => (
  <section className="bg-background py-24 relative overflow-hidden">
    {/* Decorative gold frame lines */}
    <div className="absolute top-0 left-0 right-0 h-px bg-accent/40" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/40" />

    <div className="container">
      <AnimatedSection>
        <div className="max-w-2xl mb-14">
          <div className="w-12 h-0.5 bg-royal mb-5" />
          <SectionLabel>Contact Us</SectionLabel>
          <h2 className="text-3xl md:text-4xl mt-3 mb-4">
            Let's Build <span className="text-gold">Something Great</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tell us about your project and our team will get back to you within 24 hours.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* Left: Form */}
        <AnimatedSection delay={100}>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Your Name"
                className="w-full bg-surface text-foreground placeholder:text-muted-foreground/70 text-sm px-4 py-3 rounded-lg border border-border outline-none focus:border-accent transition-colors"
              />
              <input
                placeholder="Company"
                className="w-full bg-surface text-foreground placeholder:text-muted-foreground/70 text-sm px-4 py-3 rounded-lg border border-border outline-none focus:border-accent transition-colors"
              />
            </div>
            <input
              placeholder="Email"
              type="email"
              className="w-full bg-surface text-foreground placeholder:text-muted-foreground/70 text-sm px-4 py-3 rounded-lg border border-border outline-none focus:border-accent transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full bg-surface text-foreground placeholder:text-muted-foreground/70 text-sm px-4 py-3 rounded-lg border border-border outline-none resize-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="btn-hover bg-accent text-royal font-extrabold text-sm px-8 py-3 rounded-[9px] hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </AnimatedSection>

        {/* Right: Contact Details */}
        <AnimatedSection delay={200}>
          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-5">
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Address</div>
              <p className="text-foreground">Kuwait City, Safat 13122</p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Phone</div>
              <p className="text-foreground">+965 2228 1292</p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Email</div>
              <p className="text-foreground">info@royaleng-me.com</p>
            </div>
            <a
              href="https://wa.me/96522281292"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center gap-2 mt-4 bg-[#22c55e] text-white font-semibold text-sm px-6 py-3 rounded-[9px] hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const HomePage = () => (
  <>
    <Hero />
    <IsoBar />
    <PartnersMarquee />
    <Divisions />
    <ControlRoomFeature />
    <PortfolioPreview />
    <Clients />
    <ContactCTA />
  </>
);

export default HomePage;
