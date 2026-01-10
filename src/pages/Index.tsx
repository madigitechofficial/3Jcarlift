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
        <title>3J Carlift - Monthly Bus Transport Sharjah to Dubai | AED 500/month</title>
        <meta 
          name="description" 
          content="Affordable monthly bus transport between Sharjah and Dubai. AC buses, fixed schedules, multiple pickup points. Starting from AED 500/month. Book your seat today!" 
        />
        <meta name="keywords" content="Sharjah Dubai bus, monthly bus transport, Sharjah to Dubai transport, bus service UAE, commuter bus Dubai, 3J Carlift, affordable transport, daily bus service, AC bus Dubai, office transport" />
        <link rel="canonical" href="https://3jcarlift.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="3J Carlift - Monthly Bus Transport Sharjah to Dubai" />
        <meta property="og:description" content="Affordable monthly bus transport. AC buses, fixed schedules. From AED 500/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://3jcarlift.com/" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="AE-SH" />
        <meta name="geo.placename" content="Sharjah" />
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
