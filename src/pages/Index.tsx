import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
            <title>Sharjah to Dubai Bus Pick and Drop Service | 3J Car Lift</title>

            <meta
              name="description"
              content="Affordable monthly bus pick and drop service between Sharjah and Dubai. AC buses, fixed schedules, and convenient pickup points for daily commuters and office staff."
            />

            <link rel="canonical" href="https://3jcarlift.com/" />

            <meta name="geo.region" content="AE-SH" />
            <meta name="geo.placename" content="Sharjah" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://3jcarlift.com/" />
            <meta
              property="og:title"
              content="Sharjah to Dubai Bus Pick and Drop Service | 3J Car Lift"
            />
            <meta
              property="og:description"
              content="Reliable monthly bus pick and drop service between Sharjah and Dubai with AC buses and fixed schedules."
            />
            <meta property="og:locale" content="en_AE" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Sharjah to Dubai Bus Pick and Drop Service | 3J Car Lift"
            />
            <meta
              name="twitter:description"
              content="Affordable monthly bus transport between Sharjah and Dubai for daily commuters."
            />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <Stats />
          <AboutUs />
          <HowItWorks />
          <Services />
          <Pricing />
          <Testimonials />
          <FAQ />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
