import { ShieldCheckIcon, ClockIcon, CreditCardIcon, UserCheckIcon, RepeatIcon, CheckCircleIcon } from "@/components/icons";

const features = [
  {
    icon: ClockIcon,
    title: "Fixed schedules",
    description: "Our buses depart on time, every time. Plan your day with confidence knowing exactly when you'll arrive.",
  },
  {
    icon: UserCheckIcon,
    title: "Professional drivers",
    description: "Experienced, courteous drivers who prioritize your safety and comfort throughout the journey.",
  },
  {
    icon: CreditCardIcon,
    title: "Affordable monthly rates",
    description: "Simple monthly packages with no hidden fees. Pay once and commute worry-free all month.",
  },
  {
    icon: ShieldCheckIcon,
    title: "AC buses",
    description: "Beat the UAE heat with our fully air-conditioned buses. Travel in comfort every day.",
  },
  {
    icon: RepeatIcon,
    title: "Daily service",
    description: "Regular daily routes between Sharjah and Dubai. Multiple pickup points for your convenience.",
  },
  {
    icon: CheckCircleIcon,
    title: "Easy to join",
    description: "Simple registration process. Call us or WhatsApp to book your monthly seat today.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28" aria-labelledby="services-heading">
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Why choose us
          </p>
          <h2 id="services-heading" className="font-display text-display-md md:text-display-lg text-foreground mb-4">
            The smarter way to commute
          </h2>
          <p className="text-muted-foreground text-lg">
            Skip the traffic stress and parking hassles. Our daily bus service gets you 
            to work and back comfortably, affordably, and on time.
          </p>
        </header>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Our services">
          {features.map((feature) => (
            <li 
              key={feature.title}
              className="group p-6 rounded-xl bg-surface border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-slow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-base" aria-hidden="true">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
