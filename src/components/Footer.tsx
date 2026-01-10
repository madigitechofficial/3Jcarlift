import { PhoneIcon, MailIcon, MessageCircleIcon, MapPinIcon } from "@/components/icons";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 md:py-20" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4" aria-label="3J Carlift - Home">
              <img 
                src={logo} 
                alt="3J Carlift" 
                className="h-12 w-auto brightness-0 invert" 
                width="48"
                height="48"
                loading="lazy"
              />
            </a>
            <p className="text-background/70 mb-6 max-w-md">
              Professional monthly bus transport service between Sharjah and Dubai. 
              Reliable, punctual, and always at your service.
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:+971528215806"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-base"
                aria-label="Call us at +971 52 821 5806"
              >
                <PhoneIcon size={18} aria-hidden="true" />
              </a>
              <a 
                href="mailto:atialikj7@gmail.com"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-base"
                aria-label="Email us at atialikj7@gmail.com"
              >
                <MailIcon size={18} aria-hidden="true" />
              </a>
              <a 
                href="https://wa.me/971528215806"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-base"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircleIcon size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-display text-lg mb-4">Quick links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors duration-base">
                  How it works
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors duration-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/70 hover:text-background transition-colors duration-base">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/70 hover:text-background transition-colors duration-base">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <address className="not-italic space-y-3 text-background/70">
              <div className="flex items-start gap-3">
                <PhoneIcon size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p><a href="tel:+971528215806" className="hover:text-background transition-colors">+971 52 821 5806</a></p>
                  <p><a href="tel:+971529352114" className="hover:text-background transition-colors">+971 52 935 2114</a></p>
                  <p className="text-sm text-background/50">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MailIcon size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href="mailto:atialikj7@gmail.com" className="hover:text-background transition-colors">atialikj7@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Sharjah & Dubai, UAE</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {currentYear} 3J Carlift. All rights reserved.</p>
          <nav className="flex gap-6" aria-label="Legal links">
            <a href="#" className="hover:text-background transition-colors duration-base">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors duration-base">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
