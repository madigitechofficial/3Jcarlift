import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon, MailIcon } from "@/components/icons";

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background" aria-labelledby="contact-heading">
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Get in touch
          </p>
          <h2 id="contact-heading" className="font-display text-display-md md:text-display-lg text-foreground mb-4">
            Ready to book your ride?
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact us through any of these channels and we'll get you sorted in no time.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left - Contact form */}
          <div className="bg-surface rounded-xl border border-border/50 p-6 md:p-8">
            <h3 className="font-display text-xl text-foreground mb-6">
              Send us a message
            </h3>
            
            <form className="space-y-4" aria-label="Contact form">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-base"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+971 50 123 4567"
                    required
                    autoComplete="tel"
                    className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your ride requirements..."
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-base resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send message
                <ArrowRightIcon size={18} aria-hidden="true" />
              </Button>
            </form>
          </div>

          {/* Right - Contact info */}
          <div className="space-y-6">
            {/* Phone 1 */}
            <div className="bg-surface rounded-xl border border-border/50 p-6 hover:border-primary/20 transition-all duration-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <PhoneIcon size={24} className="text-primary" />
                </div>
                <address className="not-italic">
                  <p className="text-sm text-muted-foreground">Call us (Line 1)</p>
                  <a href="tel:+971528215806" className="font-display text-lg text-foreground hover:text-primary transition-colors">
                    +971 52 821 5806
                  </a>
                </address>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="bg-surface rounded-xl border border-border/50 p-6 hover:border-primary/20 transition-all duration-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <PhoneIcon size={24} className="text-primary" />
                </div>
                <address className="not-italic">
                  <p className="text-sm text-muted-foreground">Call us (Line 2)</p>
                  <a href="tel:+971529352114" className="font-display text-lg text-foreground hover:text-primary transition-colors">
                    +971 52 935 2114
                  </a>
                </address>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-surface rounded-xl border border-border/50 p-6 hover:border-primary/20 transition-all duration-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <address className="not-italic">
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a 
                    href="https://wa.me/971528215806" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-display text-lg text-foreground hover:text-green-600 transition-colors"
                  >
                    +971 52 821 5806
                  </a>
                </address>
              </div>
            </div>

            {/* Email */}
            <div className="bg-surface rounded-xl border border-border/50 p-6 hover:border-primary/20 transition-all duration-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <MailIcon size={24} className="text-primary" />
                </div>
                <address className="not-italic">
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <a href="mailto:atialikj7@gmail.com" className="font-display text-lg text-foreground hover:text-primary transition-colors">
                    atialikj7@gmail.com
                  </a>
                </address>
              </div>
            </div>

            {/* Quick booking CTA */}
            <div className="bg-primary rounded-xl p-6 text-center">
              <p className="text-primary-foreground/80 text-sm mb-2">Prefer to call?</p>
              <p className="font-display text-xl text-primary-foreground mb-4">We're available 24/7</p>
              <Button variant="gold" size="lg" className="w-full" asChild>
                <a href="tel:+971528215806" aria-label="Call now to book at +971 52 821 5806">
                  <PhoneIcon size={18} aria-hidden="true" />
                  Call now to book
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
