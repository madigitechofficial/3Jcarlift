import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ArrowRightIcon, MapPinIcon, BusIcon } from "@/components/icons";

const pricingOptions = [
  {
    route: "Sharjah → Dubai",
    price: "AED 450",
    period: "/month",
    features: ["Daily pickup & drop", "Fully air-conditioned bus", "Fixed morning & evening schedule", "Multiple pickup points"],
    popular: false,
  },
  // {
  //   route: "Round Trip Package",
  //   price: "AED 500",
  //   period: "/month",
  //   features: ["Sharjah → Dubai → Sharjah", "Morning & evening service", "Fully air-conditioned bus", "Seat reservation", "Flexible pickup points"],
  //   popular: true,
  // },
  {
    route: "Dubai → Sharjah",
    price: "AED 500",
    period: "/month",
    features: ["Daily pickup & drop", "Fully air-conditioned bus", "Fixed morning & evening schedule", "Multiple pickup points"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary/30" aria-labelledby="pricing-heading">
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Monthly packages
          </p>
          <h2 id="pricing-heading" className="font-display text-display-md md:text-display-lg text-foreground mb-4">
            Affordable monthly rates
          </h2>
          <p className="text-muted-foreground text-lg">
            Pay once, commute all month. Simple, predictable pricing with no hidden fees.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Route visualization */}
          <aside className="bg-surface rounded-xl border border-border/50 p-6 md:p-8 order-2 lg:order-1" aria-label="Pickup and drop-off points">
            <h3 className="font-display text-xl text-foreground mb-6">
              Areas Covered in Sharjah & Dubai
            </h3>
            
            {/* Route map visualization */}
            <div className="relative bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg p-6 mb-6" aria-hidden="true">
              <div className="flex items-center justify-between">
                {/* Sharjah */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MapPinIcon size={28} className="text-primary" />
                  </div>
                  <p className="font-display text-lg text-foreground">Sharjah</p>
                  <p className="text-sm text-muted-foreground">Pickup areas</p>
                </div>

                {/* Route line with bus */}
                <div className="flex-1 mx-4 relative">
                  <div className="h-1 bg-gradient-to-r from-primary via-gold to-primary rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg">
                    <BusIcon size={20} className="text-accent-foreground" />
                  </div>
                  {/* <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>~25 km</span>
                    <span>30-45 min</span>
                  </div> */}
                </div>

                {/* Dubai */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
                    <MapPinIcon size={28} className="text-gold" />
                  </div>
                  <p className="font-display text-lg text-foreground">Dubai</p>
                  <p className="text-sm text-muted-foreground">Drop-off areas</p>
                </div>
              </div>
            </div>

            {/* Key areas */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-foreground mb-2">Sharjah pickup:</h4>
                <ul className="text-muted-foreground space-y-1" aria-label="Sharjah pickup locations">
                  <li>• Abu Shagara</li>
                  <li>• Al Buteena</li>
                  <li>• Al Khan</li>
                  <li>• Al Majaz 1, 2, 3</li>
                  <li>• Al Qassimiya</li>
                  <li>• Al Taawun</li>
                  <li>• Al Wahda</li>
                  <li>• Rolla</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Dubai drop-off:</h4>
                <ul className="text-muted-foreground space-y-1" aria-label="Dubai drop-off locations">
                  <li>• JLT</li>
                  <li>• TECOM</li>
                  <li>• Media City</li>
                  <li>• Internet City</li>
                  <li>• Emaar Business Park</li>
                  <li>• Mazaya Business Park</li>
                  <li>• Barsha Heights</li>
                  <li>• Business Bay</li>
                  <li>• Sheikh Zayed Road</li>
                  <li>• All Metro Stations</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Right - Pricing cards */}
          <div className="space-y-4 order-1 lg:order-2" role="list" aria-label="Pricing packages">
            {pricingOptions.map((option) => (
              <article 
                key={option.route}
                className={`relative rounded-xl p-6 transition-all duration-slow ${
                  option.popular 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "bg-surface border border-border/50 hover:border-primary/20 hover:shadow-md"
                }`}
                role="listitem"
              >
                {option.popular && (
                  <span className="absolute -top-3 right-6 px-3 py-1 bg-gold text-accent-foreground text-xs font-semibold rounded-full">
                    Most popular
                  </span>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className={`font-display text-xl ${option.popular ? "text-primary-foreground" : "text-foreground"}`}>
                      {option.route}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className={`font-display text-3xl ${option.popular ? "text-primary-foreground" : "text-foreground"}`}>
                      {option.price}
                    </span>
                    <span className={`text-sm ml-1 ${option.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {option.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4" aria-label={`${option.route} features`}>
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircleIcon 
                        size={16} 
                        className={option.popular ? "text-gold" : "text-primary"} 
                        aria-hidden="true"
                      />
                      <span className={option.popular ? "text-primary-foreground/90" : "text-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={option.popular ? "gold" : "hero-secondary"} 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="#contact" aria-label={`Get started with ${option.route} package`}>
                    Get started
                    <ArrowRightIcon size={16} aria-hidden="true" />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
