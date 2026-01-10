import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@/components/icons";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      role="banner"
    >
      <div className="container flex items-center justify-between h-16">
        <a 
          href="/" 
          className="flex items-center gap-2"
          aria-label="3J Carlift - Home"
        >
          <img 
            src={logo} 
            alt="3J Carlift - Monthly Bus Transport Sharjah Dubai" 
            className="h-10 w-auto" 
            width="40"
            height="40"
            loading="eager"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          <a 
            href="#how-it-works" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-base"
          >
            How it works
          </a>
          <a 
            href="#services" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-base"
          >
            Services
          </a>
          <a 
            href="#pricing" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-base"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-base"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="tel:+971528215806" 
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-base"
            aria-label="Call us at +971 52 821 5806"
          >
            <PhoneIcon size={16} aria-hidden="true" />
            <span>+971 52 821 5806</span>
          </a>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact" aria-label="Book your bus ride">Book a ride</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
