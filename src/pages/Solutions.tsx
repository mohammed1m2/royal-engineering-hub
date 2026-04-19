import { Link, useParams } from "react-router-dom";
import { Monitor, Lock, Wifi, Tv, Paintbrush, Wrench, BarChart3, Headphones, ShieldCheck } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "../components/SEO";

const divisionsData = [
  {
    slug: "control-rooms", name: "Control Rooms", icon: Monitor, featured: true,
    desc: "ISO-standard mission-critical command centers for government, oil & gas, and enterprise clients.",
    capabilities: ["Video Wall Design & Integration", "Operator Console Design", "Control Room Furniture", "SCADA & BMS Integration", "24/7 Monitoring Solutions"],
    technologies: ["Hikvision", "Avigilon", "Genetec", "Milestone", "Bosch"],
    value: "Delivered in record timelines — including a 10-day turnaround for the Ministry of Commerce.",
  },
  {
    slug: "security-safety", name: "Security & Safety", icon: Lock,
    desc: "Comprehensive security solutions including CCTV, access control, intrusion detection, and screening systems.",
    capabilities: ["CCTV & Video Surveillance", "Access Control Systems", "Intrusion Detection", "X-Ray & Metal Detection", "Perimeter Security"],
    technologies: ["Hikvision", "Avigilon", "HID", "AJAX", "Garrett"],
    value: "Protecting Kuwait's most critical assets with enterprise-grade security infrastructure.",
  },
  {
    slug: "infrastructure", name: "Infrastructure", icon: Wifi,
    desc: "End-to-end IT and low-voltage infrastructure including structured cabling, networking, and data center solutions.",
    capabilities: ["Structured Cabling (Copper & Fiber)", "Network Design & Implementation", "Data Center Build", "Wireless Solutions", "Server Room Setup"],
    technologies: ["Cisco", "Dell EMC", "Lenovo", "TP-Link", "Huawei"],
    value: "Building the digital backbone for Kuwait's leading organizations.",
  },
  {
    slug: "audio-visual", name: "Audio Visual", icon: Tv,
    desc: "Professional AV systems for boardrooms, auditoriums, public spaces, and digital signage.",
    capabilities: ["Video Conferencing", "Digital Signage", "IPTV Systems", "Public Address Systems", "Auditorium AV"],
    technologies: ["Cisco", "Samsung", "LG", "Crestron", "Extron"],
    value: "Creating immersive visual experiences that engage and inform.",
  },
  {
    slug: "fit-out", name: "Fit-Out", icon: Paintbrush,
    desc: "Full turnkey interior fit-out services from design to completion for commercial and government spaces.",
    capabilities: ["Interior Design", "Space Planning", "MEP Works", "Furniture & Fixtures", "Project Handover"],
    technologies: [],
    value: "Transforming spaces with precision craftsmanship and attention to detail.",
  },
  {
    slug: "managed-services", name: "Managed Services", icon: Wrench,
    desc: "Comprehensive facility management, MEP operations, and ongoing support services.",
    capabilities: ["Facility Management", "MEP Operations", "Preventive Maintenance", "Help Desk Support", "Asset Management"],
    technologies: ["IBM", "Johnson Controls", "Honeywell"],
    value: "Keeping your operations running smoothly, 24/7/365.",
  },
  {
    slug: "pmo", name: "PMO", icon: BarChart3,
    desc: "PMP-certified project management office providing governance, planning, and execution oversight.",
    capabilities: ["Project Planning & Scheduling", "Risk Management", "Quality Assurance", "Stakeholder Management", "Reporting & Analytics"],
    technologies: [],
    value: "Delivering projects on time, within budget, and to specification.",
  },
  {
    slug: "maintenance", name: "Maintenance", icon: Headphones,
    desc: "24/7 IT and security maintenance support with rapid response times across Kuwait.",
    capabilities: ["Preventive Maintenance", "Corrective Maintenance", "Remote Monitoring", "Spare Parts Management", "SLA-Based Support"],
    technologies: [],
    value: "Minimizing downtime with proactive maintenance and rapid response.",
  },
  {
    slug: "hse", name: "Health, Safety & Environment (HSE)", icon: ShieldCheck,
    desc: "Comprehensive HSE consulting, risk assessment, and compliance services to ensure workplace safety and regulatory adherence.",
    capabilities: ["HSE Consulting & Advisory", "Risk Assessment & Hazard Identification", "Safety Management Systems", "Regulatory Compliance & Auditing", "Emergency Response Planning", "HSE Training Programs", "Incident Investigation & Reporting"],
    technologies: [],
    value: "Ensuring the highest standards of health, safety, and environmental compliance across all operations.",
  },
];

const SolutionsIndex = () => (
  <>
    <SEO
      title="Solutions | Royal Engineering Kuwait — 8 Integrated Divisions"
      description="Eight specialized divisions: Security, Infrastructure, AV, Fit-Out, Managed Services, PMO, Maintenance, HSE, Control Rooms. ISO-certified Kuwait engineering."
    />
    <section className="bg-royal py-20">
      <div className="container text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4" style={{ animation: "fade-slide-up 0.7s ease-out both" }}>Our Solutions</h1>
        <p className="text-primary-foreground/60" style={{ animation: "fade-slide-up 0.7s ease-out 0.1s both" }}>Eight specialized divisions delivering integrated engineering excellence across Kuwait and the GCC.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {divisionsData.map((d, i) => (
          <AnimatedSection key={d.slug} delay={i * 80}>
            <Link
              to={`/solutions/${d.slug}`}
              className={`block p-6 rounded-xl border transition-all hover:shadow-md hover:border-primary ${
                d.featured ? "border-accent bg-accent/5" : "border-border"
              }`}
            >
              <d.icon size={28} className={d.featured ? "text-gold mb-3" : "text-primary mb-3"} strokeWidth={1.5} />
              <h3 className="font-bold mb-1">{d.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{d.desc}</p>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </>
);

const SolutionDetail = () => {
  const { slug } = useParams();
  const division = divisionsData.find((d) => d.slug === slug);
  if (!division) return <div className="container py-20 text-center">Division not found.</div>;

  return (
    <>
      <SEO title={`${division.name} | Royal Engineering Kuwait`} description={division.desc} />
      <section className="bg-royal py-20">
        <div className="container max-w-3xl">
          <Link to="/solutions" className="text-primary-foreground/50 text-sm hover:text-primary-foreground mb-4 inline-block">← All Solutions</Link>
          <division.icon size={40} className="text-gold mb-4" strokeWidth={1.5} style={{ animation: "fade-slide-up 0.6s ease-out both" }} />
          <h1 className="text-4xl text-primary-foreground mb-4" style={{ animation: "fade-slide-up 0.7s ease-out 0.1s both" }}>{division.name}</h1>
          <p className="text-primary-foreground/60 leading-relaxed" style={{ animation: "fade-slide-up 0.7s ease-out 0.2s both" }}>{division.desc}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-3xl space-y-12">
          <AnimatedSection>
            <div>
              <SectionLabel>Capabilities</SectionLabel>
              <ul className="mt-4 space-y-2">
                {division.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          {division.technologies.length > 0 && (
            <AnimatedSection delay={100}>
              <div>
                <SectionLabel>Technologies & Partners</SectionLabel>
                <div className="flex flex-wrap gap-2 mt-4">
                  {division.technologies.map((t) => (
                    <span key={t} className="border border-border text-sm px-4 py-1.5 rounded-full hover:border-primary transition-colors">{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
          <AnimatedSection delay={200}>
            <div>
              <SectionLabel>Business Value</SectionLabel>
              <p className="text-muted-foreground mt-2">{division.value}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link to="/contact" className="btn-hover inline-flex bg-royal text-primary-foreground font-semibold text-sm px-8 py-3 rounded-[9px]">
              Request a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export { SolutionsIndex, SolutionDetail };
