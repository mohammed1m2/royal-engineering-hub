import { Award, Users, Rocket, Heart } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

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
    <section className="bg-royal py-20">
      <div className="container text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4">Join Royal Engineering</h1>
        <p className="text-primary-foreground/60">Build your career with Kuwait's leading integrated engineering company.</p>
      </div>
    </section>

    {/* Values */}
    <section className="py-16">
      <div className="container">
        <SectionLabel>Why Work With Us</SectionLabel>
        <h2 className="text-3xl mb-8">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.title} className="border border-border rounded-xl p-6">
              <v.icon size={28} className="text-gold mb-3" strokeWidth={1.5} />
              <h3 className="font-bold mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section className="bg-surface py-16">
      <div className="container">
        <SectionLabel>Open Positions</SectionLabel>
        <h2 className="text-3xl mb-8">Current Openings</h2>
        <div className="space-y-3">
          {openPositions.map((p) => (
            <div key={p.title} className="bg-background border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.dept} · {p.type}</p>
              </div>
              <button className="bg-royal text-primary-foreground text-sm font-semibold px-5 py-2 rounded-[9px] hover:opacity-90 transition-opacity self-start">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Application Form */}
    <section className="py-16">
      <div className="container max-w-2xl">
        <SectionLabel>Apply</SectionLabel>
        <h2 className="text-3xl mb-8">Submit Your Application</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Full Name" className="w-full border border-border text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary" />
            <input placeholder="Email" type="email" className="w-full border border-border text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary" />
          </div>
          <input placeholder="Position of Interest" className="w-full border border-border text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary" />
          <div className="border border-border rounded-lg p-6 text-center cursor-pointer hover:bg-secondary transition-colors">
            <p className="text-sm text-muted-foreground">Click to upload your CV (PDF, DOC)</p>
          </div>
          <button type="submit" className="bg-royal text-primary-foreground font-semibold text-sm px-8 py-3 rounded-[9px] hover:opacity-90 transition-opacity">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  </>
);

export default CareersPage;
