import { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";

const allProjects = [
  { name: "Jaber Al-Ahmad Stadium", scope: "Control Room · AV · Security", sector: "Government", color: "#1a365d" },
  { name: "Kuwait Oil Company", scope: "Access Control · Security · 5 Days", sector: "Oil & Gas", color: "#4a2510" },
  { name: "Kuwait Supply Company", scope: "Interior Fit-Out · Full Turnkey", sector: "Fit-Out", color: "#2d3748" },
  { name: "Kuwait National Guard", scope: "Control Room · Fit-Out · Security", sector: "Government", color: "#1a365d" },
  { name: "Central Bank of Kuwait", scope: "Security · Infrastructure · Low Voltage", sector: "Banking", color: "#1c4532" },
  { name: "Australian University", scope: "Security · AV · Infrastructure", sector: "Education", color: "#553c14" },
  { name: "Ministry of Commerce", scope: "Control Room · 10-Day Delivery", sector: "Government", color: "#1a365d" },
  { name: "Environment Public Authority", scope: "Security · Monitoring Systems", sector: "Government", color: "#1a365d" },
  { name: "Warba Bank", scope: "Security · Access Control", sector: "Banking", color: "#1c4532" },
];

const sectors = ["All", "Government", "Oil & Gas", "Banking", "Education", "Fit-Out"];

const ReferencesPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.sector === active);

  return (
    <>
      <section className="bg-royal py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4" style={{ animation: "fade-slide-up 0.7s ease-out both" }}>Our References</h1>
          <p className="text-primary-foreground/60" style={{ animation: "fade-slide-up 0.7s ease-out 0.1s both" }}>200+ projects delivered across Kuwait and the GCC.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-10">
              {sectors.map((s) => (
                <button
                  key={s}
                  onClick={() => setActive(s)}
                  className={`btn-hover text-sm font-medium px-5 py-2 rounded-full transition-colors ${
                    active === s ? "bg-royal text-gold" : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 80}>
                <div className="rounded-xl overflow-hidden bg-background border border-border hover:border-primary hover:shadow-md transition-all group cursor-pointer">
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
    </>
  );
};

export default ReferencesPage;
