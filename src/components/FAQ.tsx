import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

const faqs = [
  {
    question: "Do you provide daily pick and drop service from Sharjah to Dubai?",
    answer: "3J Carlift provides affordable monthly bus transport between Sharjah and Dubai. We serve thousands of daily commuters with our fleet of comfortable, air-conditioned buses."
  },
  {
    question: "How do I book a seat on the bus?",
    answer: "Simply call us or send a WhatsApp message with your pickup location and preferred timing. We'll confirm your monthly package and assign you to the most convenient route.",
  },
  {
    question: "What are the pickup and drop-off times?",
    answer: "Our buses operate on fixed schedules with morning pickups from Sharjah between 6:30 AM - 8:00 AM and evening returns from Dubai between 5:30 PM - 7:00 PM. Exact times depend on your pickup point. Please do ask for your pickup time while registering for the monthly package.",
  },
  {
    question: "Are the buses air-conditioned?",
    answer: "Yes! All our buses are fully air-conditioned to ensure a comfortable journey, especially during the hot summer months.",
  },
  {
    question: "How do I pay for the monthly package?",
    answer: "Payment can be made via bank transfer or cash at the beginning of each month. We'll provide you with all payment details when you register.",
  },
    {
    question: "Which areas in Sharjah and Dubai do you cover?",
    answer: "In Sharjah, we cover areas of  Abu Shagara, Al Buteena, Al Khan, Al Majaz 1, 2, 3, Al Qassimiya, Al Taawun, Al Wahda, Rolla, and in Dubai, we cover the areas of JLT, TECOM, Media City, Internet City, Emaar Business Park, Mazaya Business Park, Barsha Heights, Business Bay, Sheikh Zayed Road, and all Metro Stations.",
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/30" aria-labelledby="faq-heading">
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            FAQ
          </p>
          <h2 id="faq-heading" className="font-display text-display-md md:text-display-lg text-foreground">
            Common questions
          </h2>
        </header>

        <div className="max-w-3xl mx-auto space-y-3" role="list" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl bg-surface border border-border/50 overflow-hidden"
              role="listitem"
            >
              <h3>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDownIcon 
                    size={20} 
                    className={`flex-shrink-0 text-muted-foreground transition-transform duration-base ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`grid transition-all duration-slow ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
                hidden={openIndex !== index}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
