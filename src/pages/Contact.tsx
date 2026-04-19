import { MapPin, Phone, Mail, Clock, Linkedin, Instagram } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SEO from "@/components/SEO";

const inputClass = "w-full text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary";
const inputStyle: React.CSSProperties = {
  backgroundColor: "#f9f9f9",
  border: "1px solid #ebebeb",
  color: "#1a1a1a",
};

const ContactPage = () => (
  <>
    <SEO
      title="Contact Royal Engineering | Kuwait Integrated Engineering"
      description="Get in touch with Royal Engineering — Kuwait's ISO-certified integrated engineering partner. Our team responds within 24 hours."
    />

    {/* Hero — white */}
    <section className="bg-background py-20">
      <div className="container text-center max-w-3xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl mb-4 text-foreground">Get in Touch</h1>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <p className="text-muted-foreground">Our team responds within 24 hours.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Form — white */}
    <section className="bg-background pb-16">
      <div className="container max-w-3xl">
        <AnimatedSection delay={150}>
          <form
            className="space-y-4 bg-background p-6 md:p-8 rounded-xl"
            style={{ border: "1px solid #ebebeb" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Your Name" className={inputClass} style={inputStyle} />
              <input placeholder="Company" className={inputClass} style={inputStyle} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Email" type="email" className={inputClass} style={inputStyle} />
              <input placeholder="Phone" type="tel" className={inputClass} style={inputStyle} />
            </div>
            <select className={inputClass} style={inputStyle} defaultValue="">
              <option value="" disabled>Select Industry</option>
              <option>Government</option>
              <option>Oil and Gas</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Banking</option>
              <option>Retail</option>
              <option>Industrial</option>
              <option>Transit</option>
              <option>Public Events</option>
              <option>Utilities</option>
              <option>Other</option>
            </select>
            <select className={inputClass} style={inputStyle} defaultValue="">
              <option value="" disabled>Service Interested In</option>
              <option>Security and Safety</option>
              <option>Infrastructure</option>
              <option>Audio Visual</option>
              <option>Fit-Out</option>
              <option>HSE</option>
              <option>Managed Services</option>
              <option>PMO</option>
              <option>Maintenance</option>
              <option>Control Rooms</option>
              <option>Other</option>
            </select>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className={`${inputClass} resize-none`}
              style={inputStyle}
            />
            <button
              type="submit"
              className="btn-hover font-semibold text-sm px-8 py-3 rounded-[9px] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c8a84b", color: "#3c003c" }}
            >
              Submit Inquiry
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>

    {/* Info cards row */}
    <section className="bg-background pb-16">
      <div className="container grid sm:grid-cols-3 gap-4">
        {[
          {
            icon: MapPin,
            title: "Address",
            body: "Abdullah Al-Mubarak Street, Qibla Block 9, Maseel Pearl Building, 5th Floor Office 504, P.O. Box 26157, Safat 13122, Kuwait",
          },
          {
            icon: Phone,
            title: "Phone",
            body: "+965 2228 1292\nFax: +965 2241 3277",
          },
          {
            icon: Mail,
            title: "Email",
            body: "info@royaleng-me.com\nwww.royaleng-me.com",
          },
        ].map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 100}>
            <div
              className="bg-background p-6 rounded-xl h-full hover:border-primary transition-colors"
              style={{ border: "1px solid #ebebeb" }}
            >
              <c.icon size={20} className="text-gold mb-3" />
              <h3 className="font-bold text-sm mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{c.body}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Hours + WhatsApp + Socials */}
    <section className="bg-background pb-16">
      <div className="container max-w-3xl flex flex-col items-center text-center gap-6">
        <AnimatedSection>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} className="text-gold" /> Sunday – Thursday · 8:00 AM – 5:00 PM
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <a
            href="https://wa.me/96522281292"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center gap-2 bg-[#22c55e] text-white font-semibold text-sm px-6 py-3 rounded-[9px] hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </a>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="btn-hover w-10 h-10 rounded-full bg-royal flex items-center justify-center text-gold hover:opacity-90 transition-opacity">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="btn-hover w-10 h-10 rounded-full bg-royal flex items-center justify-center text-gold hover:opacity-90 transition-opacity">
              <Instagram size={16} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Map */}
    <section className="bg-background pb-20">
      <div className="container">
        <AnimatedSection>
          <div className="overflow-hidden" style={{ borderRadius: 12, border: "1px solid #e0cce8" }}>
            <iframe
              title="Royal Engineering Kuwait Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.9!2d47.9774!3d29.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzMzLjIiTiA0N8KwNTgnMzguNiJF!5e0!3m2!1sen!2skw!4v1!5m2!1sen!2skw"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ContactPage;
