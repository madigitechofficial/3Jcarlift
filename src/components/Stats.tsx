const stats = [
  { value: "1000+", label: "Monthly passengers" },
  { value: "50+", label: "Daily trips" },
  { value: "99%", label: "On-time rate" },
  { value: "24/7", label: "Support" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary" aria-label="Company statistics">
      <div className="container">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <dt className="order-2 text-primary-foreground/80 text-sm md:text-base">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-display-md md:text-display-lg text-primary-foreground mb-2">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;
