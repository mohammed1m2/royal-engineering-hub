import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "@/components/SEO";

type Project = { name: string; scope: string; sector: string; color: string };

const allProjects: Project[] = [
  { name: "Ministry of Commerce and Industry", scope: "Control Room · Security · Fit-Out", sector: "Government", color: "#1a365d" },
  { name: "Kuwait Oil Company", scope: "Access Control · Security", sector: "Oil and Gas", color: "#4a2510" },
  { name: "Central Bank of Kuwait", scope: "Security · Infrastructure · Low Voltage", sector: "Banking", color: "#1c4532" },
  { name: "Kuwait National Guard", scope: "Control Room · Fit-Out · Security", sector: "Government", color: "#1a365d" },
  { name: "Jaber Al-Ahmad Stadium", scope: "Control Room · AV · Security", sector: "Government", color: "#2c2c54" },
  { name: "Australian University", scope: "Security · AV · Infrastructure", sector: "Education", color: "#553c14" },
  { name: "American University of Kuwait", scope: "Security · Infrastructure", sector: "Education", color: "#5a3a1a" },
  { name: "Kuwait Supply Company", scope: "Interior Fit-Out", sector: "Fit-Out", color: "#2d3748" },
  { name: "Environment Public Authority", scope: "Control Room · Security", sector: "Government", color: "#1a365d" },
  { name: "Bouvardia Medical Center", scope: "Security · Fit-Out", sector: "Healthcare", color: "#4a1d3f" },
  { name: "Kuwait Clinic", scope: "Interior Fit-Out", sector: "Healthcare", color: "#5a2247" },
  { name: "Platinum Health Club", scope: "Access Control · Security", sector: "Healthcare", color: "#3d1a35" },
];

const tabs = ["All", "Government", "Oil and Gas", "Healthcare", "Education", "Banking", "Fit-Out", "Control Rooms"];

const PortfolioPage = () => {
  const [active, setActive] = useState("All");

  const filtered = allProjects.filter((p) => {
    if (active === "All") return true;
    if (active === "Control Rooms") return p.scope.toLowerCase().includes("control room");
    return p.sector === active;
  });

  return (
    <>
      <SEO
        title="Portfolio | Royal Engineering Kuwait Projects"
        description="200+ delivered projects across Kuwait & GCC: government, oil & gas, healthcare, education, banking. ISO certified integrated engineering."
      />
      <section className="bg-royal py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4" style={{ animation: "fade-slide-up 0.7s ease-out both" }}>Our Portfolio</h1>
          <p className="text-primary-foreground/60" style={{ animation: "fade-slide-up 0.7s ease-out 0.1s both" }}>200+ projects delivered across Kuwait and the GCC.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-10">
              {tabs.map((s) => (
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
              <div
                key={p.name}
                className="rounded-xl overflow-hidden bg-background border border-border hover:border-primary hover:shadow-md transition-all group cursor-pointer animate-portfolio-in"
                style={{ animationDelay: `${i * 70}ms` }}
              >
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
