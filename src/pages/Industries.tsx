import { Building, Droplets, Heart, GraduationCap, Landmark, ShoppingBag, Factory, Train, Calendar, Zap } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const industries = [
  { icon: Building, name: "Government", desc: "Secure, scalable solutions for ministries and public authorities.", solutions: "Control Rooms · Security · Infrastructure" },
  { icon: Droplets, name: "Oil & Gas", desc: "Critical infrastructure for upstream and downstream operations.", solutions: "Access Control · CCTV · Data Centers" },
  { icon: Heart, name: "Healthcare", desc: "Patient-safe environments with integrated building systems.", solutions: "Security · AV · Infrastructure" },
  { icon: GraduationCap, name: "Education", desc: "Smart campus solutions for universities and schools.", solutions: "AV · Security · Networking" },
  { icon: Landmark, name: "Banking", desc: "High-security, compliance-ready banking infrastructure.", solutions: "Security · Low Voltage · Infrastructure" },
  { icon: ShoppingBag, name: "Retail", desc: "Loss prevention and customer experience technology.", solutions: "CCTV · Digital Signage · Access" },
  { icon: Factory, name: "Industrial", desc: "Rugged, reliable systems for manufacturing and logistics.", solutions: "SCADA · Security · Maintenance" },
  { icon: Train, name: "Transit", desc: "Surveillance and communication for transport networks.", solutions: "CCTV · PA Systems · Control Rooms" },
  { icon: Calendar, name: "Public Events", desc: "Large-venue security and AV for stadiums and conventions.", solutions: "Control Rooms · AV · Security" },
  { icon: Zap, name: "Utilities", desc: "Monitoring and control systems for utility providers.", solutions: "SCADA · Infrastructure · Maintenance" },
];

const IndustriesPage = () => (
  <>
    <section className="bg-royal py-20">
      <div className="container text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4" style={{ animation: "fade-slide-up 0.7s ease-out both" }}>Industries We Serve</h1>
        <p className="text-primary-foreground/60" style={{ animation: "fade-slide-up 0.7s ease-out 0.1s both" }}>Tailored engineering solutions for every sector across Kuwait and the GCC.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 80}>
              <div className="border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group cursor-pointer">
                <ind.icon size={28} className="text-primary mb-3 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <h3 className="font-bold mb-1">{ind.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{ind.desc}</p>
                <p className="text-xs text-gold font-medium">{ind.solutions}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default IndustriesPage;
