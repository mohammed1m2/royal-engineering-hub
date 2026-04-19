import { Shield, Award, MapPin, Phone, Mail, Users, Clock, Building, CheckCircle, Star } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "../components/SEO";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const statsDef = [
  { target: 2007, suffix: "", label: "Founded" },
  { target: 200, suffix: "+", label: "Projects" },
  { target: 8, suffix: "", label: "Divisions" },
  { target: 30, suffix: "+", label: "Partners" },
];

const StatAbout = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { ref, inView } = useInView();
  const value = useCountUp(target, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-extrabold text-gold">{value}{suffix}</div>
      <div className="text-xs text-primary-foreground/50">{label}</div>
    </div>
  );
};

const timeline = [
  { year: "2007", event: "Company founded in Kuwait" },
  { year: "2012", event: "Security, Infrastructure, Services divisions launched" },
  { year: "2013", event: "PMO, AV, Fit-Out, Maintenance and HSE divisions added" },
  { year: "Today", event: "200+ projects, GCC market leader" },
];

const isos = [
  { code: "ISO 9001:2015", label: "Quality Management" },
  { code: "ISO/IEC 27001:2022", label: "Information Security" },
  { code: "ISO 45001:2018", label: "Health & Safety" },
  { code: "ISO 14001:2015", label: "Environmental Management" },
];

const teamCerts = [
  { abbr: "PMP", name: "Project Management Professional", issuer: "PMI" },
  { abbr: "CCNA", name: "Cisco Certified", issuer: "Cisco" },
  { abbr: "AVG", name: "Avigilon Certified", issuer: "Avigilon" },
  { abbr: "IBM", name: "IBM Certified", issuer: "IBM" },
  { abbr: "ATD", name: "ATD Tier Designer", issuer: "ATD" },
  { abbr: "AJAX", name: "Ajax Systems Certified", issuer: "Ajax" },
];

const reasons = [
  { icon: Users, title: "Certified Global Partners", desc: "30+ world-leading brands" },
  { icon: Clock, title: "24/7/365 Support", desc: "Always available" },
  { icon: Building, title: "All 8 Divisions In-House", desc: "One team, one contract" },
  { icon: CheckCircle, title: "Proven Track Record", desc: "200+ projects" },
  { icon: Award, title: "ISO Certified Company", desc: "4 certifications" },
  { icon: Star, title: "Loyal Clients Are Our Asset", desc: "High repeat business rate" },
];

const AboutPage = () => (
  <>
    <SEO
      title="About Royal Engineering | 18 Years of Engineering Excellence in Kuwait"
      description="Founded in 2007, Royal Engineering is Kuwait's ISO-certified integrated engineering leader with 200+ projects across government, oil & gas, banking, and more."
    />
    {/* Hero */}
    <section className="bg-royal py-20">
      <div className="container text-center max-w-3xl">
        <div
          className="inline-flex items-center gap-2 bg-accent/20 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
          style={{ animation: "fade-slide-up 0.6s ease-out both" }}
        >
          <Shield size={14} /> 4× ISO Certified · Established Kuwait 2007
        </div>
        <h1
          className="text-4xl md:text-5xl text-primary-foreground mb-5"
          style={{ animation: "fade-slide-up 0.7s ease-out 0.1s both" }}
        >
          Engineering Excellence Built Over 18 Years
        </h1>
        <p
          className="text-primary-foreground/60 mb-10 leading-relaxed"
          style={{ animation: "fade-slide-up 0.7s ease-out 0.2s both" }}
        >
          From a single-division startup to Kuwait's leading multi-disciplinary engineering firm, Royal Engineering has grown through relentless focus on quality, innovation, and client success.
        </p>
        <div
          className="flex flex-wrap justify-center gap-8"
          style={{ animation: "fade-slide-up 0.7s ease-out 0.3s both" }}
        >
          {statsDef.map((s) => (
            <StatAbout key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>

    {/* Story + Timeline */}
    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-14">
        <div>
          <AnimatedSection><SectionLabel>Our Story</SectionLabel></AnimatedSection>
          <AnimatedSection delay={100}><h2 className="text-3xl mb-6">A Legacy of Engineering Excellence</h2></AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2007, Royal Engineering began with a clear vision: to provide Kuwait and the GCC with world-class integrated engineering solutions. Our founders recognized a gap in the market for a company that could deliver end-to-end services across multiple engineering disciplines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, with over 200 completed projects spanning government, oil &amp; gas, banking, healthcare, and education, we have become the partner of choice for organizations that demand reliability, innovation, and excellence.
            </p>
          </AnimatedSection>
        </div>
        <div>
          <AnimatedSection><h3 className="font-extrabold text-xl mb-8">Milestones</h3></AnimatedSection>
          <div className="relative pl-6 border-l-2 border-accent space-y-8">
            {timeline.map((t, i) => (
              <AnimatedSection key={t.year} delay={i * 150}>
                <div className="relative">
                  <div className="absolute -left-[calc(0.75rem+1px)] top-1 w-3 h-3 rounded-full bg-royal border-2 border-accent timeline-dot" />
                  <div className="text-sm font-bold text-gold">{t.year}</div>
                  <p className="text-sm text-muted-foreground">{t.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ISO Certifications */}
    <section className="bg-primary/5 py-16">
      <div className="container">
        <AnimatedSection><SectionLabel>Certifications</SectionLabel></AnimatedSection>
        <AnimatedSection delay={100}><h2 className="text-3xl mb-8">ISO Certified Operations</h2></AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {isos.map((iso, i) => (
            <AnimatedSection key={iso.code} delay={i * 100}>
              <div className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-3">
                  <Award size={20} className="text-gold" />
                </div>
                <h3 className="font-bold text-sm mb-1">{iso.code}</h3>
                <p className="text-xs text-muted-foreground">{iso.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500}>
          <p className="text-sm text-muted-foreground text-center">Government Accreditations: CAPT · CAIT · Category 4 Electrical</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Team Certifications */}
    <section className="py-16">
      <div className="container">
        <AnimatedSection><SectionLabel>Team Certifications</SectionLabel></AnimatedSection>
        <AnimatedSection delay={100}><h2 className="text-3xl mb-8">Certified Professionals</h2></AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamCerts.map((c, i) => (
            <AnimatedSection key={c.abbr} delay={i * 80}>
              <div className="flex items-center gap-4 border border-border rounded-xl p-5 hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-lg bg-royal flex items-center justify-center shrink-0">
                  <span className="text-gold font-extrabold text-sm">{c.abbr}</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Map + Contact */}
    <section className="py-16 bg-surface">
      <div className="container grid lg:grid-cols-2 gap-10">
        <AnimatedSection>
          <div>
            <SectionLabel>Our Office</SectionLabel>
            <h2 className="text-2xl mb-6">Visit Us</h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Abdullah Al-Mubarak Street, Qibla Block 9, Maseel Pearl Building, 5th Floor Office 504, P.O. Box 26157, Safat 13122, Kuwait</p>
              </div>
              <div className="flex gap-3"><Phone size={18} className="text-gold shrink-0" /><p className="text-muted-foreground">+965 2228 1292 · Fax: +965 2241 3277</p></div>
              <div className="flex gap-3"><Mail size={18} className="text-gold shrink-0" /><p className="text-muted-foreground">info@royaleng-me.com</p></div>
            </div>
            <a
              href="https://wa.me/96522281292"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center gap-2 mt-6 bg-[#22c55e] text-white font-semibold text-sm px-6 py-3 rounded-[9px] hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="rounded-xl overflow-hidden" style={{ borderRadius: 12 }}>
            <iframe
              title="Royal Engineering Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.9!2d47.9774!3d29.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzMzLjIiTiA0N8KwNTgnMzguNiJF!5e0!3m2!1sen!2skw!4v1!5m2!1sen!2skw"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Why Royal */}
    <section className="bg-royal py-16">
      <div className="container">
        <AnimatedSection><h2 className="text-3xl text-primary-foreground mb-10 text-center">Why Royal Engineering</h2></AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 100}>
              <div className="border border-primary-foreground/10 rounded-xl p-6 hover:border-primary-foreground/30 transition-colors">
                <r.icon size={24} className="text-gold mb-3" />
                <h3 className="font-bold text-primary-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-primary-foreground/50">{r.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
