import { PhoneIcon, UserCheckIcon, BusIcon, ArrowRightIcon } from "@/components/icons";

const steps = [
  {
    icon: PhoneIcon,
    title: "Contact us",
    description: "Call or WhatsApp us with your pickup location and preferred timings.",
  },
  {
    icon: UserCheckIcon,
    title: "Get your seat",
    description: "We'll confirm your monthly package and assign you to a convenient bus route.",
  },
  {
    icon: BusIcon,
    title: "Commute daily",
    description: "Show up at your pickup point and enjoy a comfortable ride to work and back.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary/30" aria-labelledby="how-it-works-heading">
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Simple process
          </p>
          <h2 id="how-it-works-heading" className="font-display text-display-md md:text-display-lg text-foreground">
            How it works
          </h2>
        </header>

        <ol className="grid md:grid-cols-3 gap-8 md:gap-12" aria-label="Booking process steps">
          {steps.map((step, index) => (
            <li key={step.title} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" aria-hidden="true">
                  <ArrowRightIcon 
                    size={16} 
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground" 
                  />
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Step number & icon */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-surface shadow-md border border-border/50 flex items-center justify-center group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-slow" aria-hidden="true">
                    <step.icon size={32} className="text-primary" />
                  </div>
                  <span 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center shadow-sm"
                    aria-label={`Step ${index + 1}`}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
