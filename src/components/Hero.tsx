import { Button } from "@/components/ui/button";
import { PhoneIcon, ArrowRightIcon, BusIcon } from "@/components/icons";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center pt-16 texture-overlay overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" aria-hidden="true" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-up">
            <BusIcon size={16} aria-hidden="true" />
            <span>Sharjah ↔ Dubai Monthly Bus Transport</span>
          </div>
          
          {/* Main headline */}
          <h1 
            id="hero-heading"
            className="font-display text-display-lg md:text-display-xl text-foreground animate-fade-up delay-100"
          >
            <span className="text-primary">Sharjah and Dubai</span>{" "}
            Daily Bus Pick and Drop Service
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
            Affordable Monthly Pick and Drop Transport Service.
          </p>

          {/* Trust signals */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-up delay-300" aria-label="Service features">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Monthly packages
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              AC buses
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Fixed schedules
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Safe & comfortable
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#pricing" className="flex items-center gap-2">
                View our packages
                <ArrowRightIcon size={18} aria-hidden="true" />
              </a>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <a href="tel:+971528215806" className="flex items-center gap-2" aria-label="Call to book at +971 52 821 5806">
                <PhoneIcon size={18} aria-hidden="true" />
                Call to book
              </a>
            </Button>
          </div>
          
          {/* Price highlight */}
          <div className="animate-fade-up delay-500">
            <p className="text-sm text-muted-foreground">
              Starting from just <span className="text-primary font-semibold text-lg">AED 500</span>/month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
