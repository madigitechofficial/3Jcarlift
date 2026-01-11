import { useState, useEffect, useCallback } from "react";
import { StarIcon, QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "I've been using 3J Carlift for 8 months now. The bus is always on time, AC works great, and I save so much compared to driving myself. Highly recommend!",
    author: "Ahmed Al Mansouri",
    role: "Dubai",
    rating: 5,
  },
  {
    quote: "As a working mother, I needed reliable transport. 3J Carlift has been a blessing, same pickup point, same time, every single day. No stress at all.",
    author: "Priya Sharma",
    role: "Business Bay",
    rating: 5,
  },
  {
    quote: "The monthly rate is very affordable and the service is excellent. The drivers are professional and the buses are clean and comfortable.",
    author: "Mohammed Rashid",
    role: "JLT",
    rating: 5,
  },
  {
    quote: "I switched from driving to 3J Carlift and I don't regret it. No more parking headaches, no fuel costs, and I can relax during the commute.",
    author: "Sarah Johnson",
    role: "TECOM",
    rating: 5,
  },
  {
    quote: "Best transport service in Sharjah! The pickup points are convenient and the buses are always clean. Great value for money.",
    author: "Fatima Al Hashimi",
    role: "Al Majaz",
    rating: 5,
  },
  {
    quote: "I've tried other services before but 3J Carlift is the most reliable. Been using them for over a year now. The team is very responsive on WhatsApp too.",
    author: "Rajesh Kumar",
    role: "Internet City",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-20 md:py-28 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Testimonials
          </p>
          <h2 id="testimonials-heading" className="font-display text-display-md md:text-display-lg text-foreground">
            What our passengers say
          </h2>
        </header>

        {/* Slider container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          role="region"
          aria-label="Customer testimonials carousel"
        >
          {/* Slides */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <article 
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                  aria-label={`Testimonial from ${testimonial.author}`}
                >
                  <div className="relative p-6 md:p-8 rounded-xl bg-surface border border-border/50 h-full">
                    <QuoteIcon 
                      size={40} 
                      className="absolute top-6 right-6 text-primary/10" 
                      aria-hidden="true"
                    />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <StarIcon key={i} size={16} className="text-gold" aria-hidden="true" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <footer>
                      <cite className="not-italic">
                        <p className="font-medium text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </cite>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <nav className="flex justify-center gap-4 mt-8" aria-label="Testimonial navigation">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="Previous testimonials"
            >
              <ChevronLeftIcon size={20} aria-hidden="true" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground'
                  }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="Next testimonials"
            >
              <ChevronRightIcon size={20} aria-hidden="true" />
            </Button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
