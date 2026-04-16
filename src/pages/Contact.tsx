import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import AnimatedSection from "../components/AnimatedSection";

const inputClass = "w-full bg-surface border border-border text-foreground placeholder:text-muted-foreground/50 text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary";
const selectClass = "w-full bg-surface border border-border text-sm px-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-primary text-muted-foreground";

const ContactPage = () => (
  <>
    <section className="py-20 bg-surface">
      <div className="container text-center max-w-3xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl mb-4">Contact Us</h1>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <p className="text-muted-foreground">Ready to discuss your next project? Get in touch with our team.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16">
      <div className="container grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          <AnimatedSection><SectionLabel>Send an Inquiry</SectionLabel></AnimatedSection>
          <AnimatedSection delay={100}><h2 className="text-3xl mb-8">Get a Free Quote</h2></AnimatedSection>
          <AnimatedSection delay={200}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Your Name" className={inputClass} />
                <input placeholder="Company" className={inputClass} />
              </div>
              <select className={selectClass} defaultValue="">
                <option value="" disabled>Select Industry</option>
                <option>Government</option>
                <option>Oil &amp; Gas</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Banking</option>
                <option>Retail</option>
                <option>Industrial</option>
                <option>Other</option>
              </select>
              <select className={selectClass} defaultValue="">
                <option value="" disabled>Service Interested In</option>
                <option>Security &amp; Safety</option>
                <option>Infrastructure</option>
                <option>Audio Visual</option>
                <option>Fit-Out</option>
                <option>Managed Services</option>
                <option>PMO</option>
                <option>Maintenance</option>
                <option>HSE</option>
                <option>Control Rooms</option>
              </select>
              <textarea rows={5} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
              <button type="submit" className="btn-hover bg-accent text-accent-foreground font-semibold text-sm px-8 py-3 rounded-[9px] hover:opacity-90 transition-opacity">
                Submit Inquiry
              </button>
            </form>
          </AnimatedSection>
        </div>

        {/* Info */}
        <div>
          <AnimatedSection><SectionLabel>Our Office</SectionLabel></AnimatedSection>
          <AnimatedSection delay={100}><h2 className="text-3xl mb-8">Visit Us</h2></AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="space-y-5 text-sm mb-8">
              <div className="flex gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Abdullah Al-Mubarak Street, Qibla Block 9, Maseel Pearl Building, 5th Floor Office 504, P.O. Box 26157, Safat 13122, Kuwait</p>
              </div>
              <div className="flex gap-3"><Phone size={18} className="text-gold shrink-0" /><p className="text-muted-foreground">+965 2228 1292 · Fax: +965 2241 3277</p></div>
              <div className="flex gap-3"><Mail size={18} className="text-gold shrink-0" /><p className="text-muted-foreground">info@royaleng-me.com</p></div>
              <div className="flex gap-3"><Clock size={18} className="text-gold shrink-0" /><p className="text-muted-foreground">Sun – Thu: 8:00 AM – 5:00 PM</p></div>
            </div>
            <a
              href="https://wa.me/96522281292"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover inline-flex items-center gap-2 bg-[#22c55e] text-white font-semibold text-sm px-6 py-3 rounded-[9px] hover:opacity-90 transition-opacity mb-8"
            >
              WhatsApp Us
            </a>
            <div className="rounded-xl overflow-hidden">
              <iframe
                title="Royal Engineering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.9!2d47.97!3d29.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzEyLjAiTiA0N8KwNTgnMTIuMCJF!5e0!3m2!1sen!2skw!4v1!5m2!1sen!2skw"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
