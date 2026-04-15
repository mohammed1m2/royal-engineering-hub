import { Shield, Award, MapPin, Phone, Mail, Users, Clock, Building, CheckCircle, Star } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const stats = [
  ["2007", "Founded"],
  ["200+", "Projects"],
  ["7", "Divisions"],
  ["30+", "Partners"],
];

const timeline = [
  { year: "2007", event: "Company founded in Kuwait" },
  { year: "2012", event: "Security, Infrastructure, Services divisions launched" },
  { year: "2013", event: "PMO, AV, Fit-Out, Maintenance added" },
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
  { icon: Building, title: "All 7 Divisions In-House", desc: "One team, one contract" },
  { icon: CheckCircle, title: "Proven Track Record", desc: "200+ projects" },
  { icon: Award, title: "ISO Certified Company", desc: "4 certifications" },
  { icon: Star, title: "Loyal Clients Are Our Asset", desc: "High repeat business rate" },
];

const AboutPage = () => (
  <>
    {/* Hero */}
    <section className="bg-royal py-20">
      <div className="container text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-accent/20 text-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <Shield size={14} /> 4× ISO Certified · Established Kuwait 2007
        </div>
        <h1 className="text-4xl md:text-5xl text-primary-foreground mb-5">Engineering Excellence Built Over 18 Years</h1>
        <p className="text-primary-foreground/60 mb-10 leading-relaxed">
          From a single-division startup to Kuwait's leading multi-disciplinary engineering firm, Royal Engineering has grown through relentless focus on quality, innovation, and client success.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-extrabold text-gold">{n}</div>
              <div className="text-xs text-primary-foreground/50">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Story + Timeline */}
    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-14">
        <div>
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="text-3xl mb-6">A Legacy of Engineering Excellence</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2007, Royal Engineering began with a clear vision: to provide Kuwait and the GCC with world-class integrated engineering solutions. Our founders recognized a gap in the market for a company that could deliver end-to-end services across multiple engineering disciplines.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, with over 200 completed projects spanning government, oil &amp; gas, banking, healthcare, and education, we have become the partner of choice for organizations that demand reliability, innovation, and excellence.
          </p>
        </div>
        <div>
          <h3 className="font-extrabold text-xl mb-8">Milestones</h3>
          <div className="relative pl-6 border-l-2 border-accent space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[calc(0.75rem+1px)] top-1 w-3 h-3 rounded-full bg-royal border-2 border-accent" />
                <div className="text-sm font-bold text-gold">{t.year}</div>
                <p className="text-sm text-muted-foreground">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ISO Certifications */}
    <section className="bg-primary/5 py-16">
      <div className="container">
        <SectionLabel>Certifications</SectionLabel>
        <h2 className="text-3xl mb-8">ISO Certified Operations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {isos.map((iso) => (
            <div key={iso.code} className="bg-background border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-3">
                <Award size={20} className="text-gold" />
              </div>
              <h3 className="font-bold text-sm mb-1">{iso.code}</h3>
              <p className="text-xs text-muted-foreground">{iso.label}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">Government Accreditations: CAPT · CAIT · Category 4 Electrical</p>
      </div>
    </section>

    {/* Team Certifications */}
    <section className="py-16">
      <div className="container">
        <SectionLabel>Team Certifications</SectionLabel>
        <h2 className="text-3xl mb-8">Certified Professionals</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamCerts.map((c) => (
            <div key={c.abbr} className="flex items-center gap-4 border border-border rounded-xl p-5">
              <div className="w-12 h-12 rounded-lg bg-royal flex items-center justify-center shrink-0">
                <span className="text-gold font-extrabold text-sm">{c.abbr}</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">{c.name}</h3>
                <p className="text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Map + Contact */}
    <section className="py-16 bg-surface">
      <div className="container grid lg:grid-cols-2 gap-10">
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
            className="inline-flex items-center gap-2 mt-6 bg-[#22c55e] text-background font-semibold text-sm px-6 py-3 rounded-[9px] hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </a>
        </div>
        <div className="rounded-xl overflow-hidden min-h-[300px]">
          <iframe
            title="Royal Engineering Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.9!2d47.97!3d29.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzEyLjAiTiA0N8KwNTgnMTIuMCJF!5e0!3m2!1sen!2skw!4v1!5m2!1sen!2skw"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 300 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>

    {/* Why Royal */}
    <section className="bg-royal py-16">
      <div className="container">
        <h2 className="text-3xl text-primary-foreground mb-10 text-center">Why Royal Engineering</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="border border-primary-foreground/10 rounded-xl p-6">
              <r.icon size={24} className="text-gold mb-3" />
              <h3 className="font-bold text-primary-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-primary-foreground/50">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
