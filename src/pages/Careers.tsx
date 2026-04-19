import { Award, Users, Rocket, Heart } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "../components/SEO";

const values = [
  { icon: Rocket, title: "Innovation First", desc: "We embrace cutting-edge technology and forward-thinking solutions." },
  { icon: Users, title: "Team Culture", desc: "Collaborative environment where every voice matters." },
  { icon: Award, title: "Growth & Learning", desc: "Continuous professional development and certifications." },
  { icon: Heart, title: "Work-Life Balance", desc: "Flexible schedules and a supportive workplace." },
];

const openPositions = [
  { title: "Senior Security Engineer", dept: "Security & Safety", type: "Full-time" },
  { title: "Network Infrastructure Specialist", dept: "Infrastructure", type: "Full-time" },
  { title: "AV Systems Designer", dept: "Audio Visual", type: "Full-time" },
  { title: "Project Manager (PMP)", dept: "PMO", type: "Full-time" },
];

const CareersPage = () => (
  <>
    <SEO
      title="Careers | Join Royal Engineering Kuwait"
      description="Build your career at Kuwait's leading integrated engineering company. Open roles in Security, Infrastructure, AV, PMO and more. ISO-certified employer."
    />
    <section className="bg-royal py-20">
      <div className="container text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4" style={{ animation: "fade-slide-up 0.7s ease-out both" }}>Join Royal Engineering</h1>
        <p className="text-primary-foreground/60" style={{ animation: "fade-slide-up 0.7s ease-out 0.1s both" }}>Build your career with Kuwait's leading integrated engineering company.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <AnimatedSection><SectionLabel>Why Work With Us</SectionLabel></AnimatedSection>
        <AnimatedSection delay={100}><h2 className="text-3xl mb-8">Our Values</h2></AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 100}>
              <div className="border border-border rounded-xl p-6 hover:border-primary transition-colors">
                <v.icon size={28} className="text-gold mb-3" strokeWidth={1.5} />
                <h3 className="font-bold mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-surface py-16">
      <div className="container">
        <AnimatedSection><SectionLabel>Open Positions</SectionLabel></AnimatedSection>
        <AnimatedSection delay={100}><h2 className="text-3xl mb-8">Current Openings</h2></AnimatedSection>
        <div className="space-y-3">
          {openPositions.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 80}>
              <div className="bg-background border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-primary transition-colors">
                <div>
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.dept} · {p.type}</p>
                </div>
                <button className="btn-hover bg-royal text-primary-foreground text-sm font-semibold px-5 py-2 rounded-[9px] self-start">
                  Apply Now
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-2xl">
        <AnimatedSection><SectionLabel>Apply</SectionLabel></AnimatedSection>
        <AnimatedSection delay={100}><h2 className="text-3xl mb-8">Submit Your Application</h2></AnimatedSection>
        <AnimatedSection delay={200}>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Full Name" className="w-full border border-border text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary bg-surface" />
              <input placeholder="Email" type="email" className="w-full border border-border text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary bg-surface" />
            </div>
            <input placeholder="Position of Interest" className="w-full border border-border text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary bg-surface" />
            <div className="border border-border rounded-lg p-6 text-center cursor-pointer hover:bg-secondary transition-colors">
              <p className="text-sm text-muted-foreground">Click to upload your CV (PDF, DOC)</p>
            </div>
            <button type="submit" className="btn-hover bg-royal text-primary-foreground font-semibold text-sm px-8 py-3 rounded-[9px]">
              Submit Application
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default CareersPage;
