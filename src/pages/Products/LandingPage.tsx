import Footer from "../Footer/Footer";
import FetureFacility from "./FetureFacilities";
import HowItWorks from "./HowItWork";
import MapSection from "./Map";
import TestimonialShowcase from "./Testimonial";

const LandingPage = () => {
  return (
    <div>
      <div>
        <FetureFacility />
        <HowItWorks />
        <TestimonialShowcase />
        <MapSection />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
