import { CheckCircleIcon, ShieldIcon, ClockIcon, UsersIcon } from "@/components/icons";

const features = [
  {
    icon: ShieldIcon,
    title: "Licensed & Insured",
    description: "Fully licensed bus transport service with comprehensive insurance for all passengers.",
  },
  {
    icon: ClockIcon,
    title: "Fixed Schedules",
    description: "Reliable departure times you can count on. Our buses run on schedule, every single day.",
  },
  {
    icon: UsersIcon,
    title: "Experienced Drivers",
    description: "Professional, courteous drivers who know the routes and prioritize your safety and comfort.",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <header className="space-y-4">
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                About us
              </p>
              <h2 id="about-heading" className="font-display text-display-md md:text-display-lg text-foreground">
                Your daily commute, made easy
              </h2>
              <p className="text-muted-foreground text-lg">
                3J Carlift provides affordable monthly bus transport between Sharjah and Dubai. 
                We serve thousands of daily commuters with our fleet of comfortable, air-conditioned buses. 
                Forget the stress of traffic — sit back, relax, and let us handle your journey.
              </p>
            </header>

            <ul className="space-y-4" aria-label="Key benefits">
              {["Convenient pickup points across Sharjah & Dubai", "Fully air-conditioned buses", "Affordable monthly packages", "Corporate & group bookings welcome"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircleIcon size={20} className="text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Feature cards */}
          <div className="space-y-4" role="list" aria-label="Our features">
            {features.map((feature, index) => (
              <article 
                key={feature.title}
                className="bg-surface border border-border/50 rounded-xl p-6 hover:border-primary/20 hover:shadow-md transition-all duration-slow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
                role="listitem"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
