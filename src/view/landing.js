import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../component/customnavbar";
import Hero from "../component/hero";
import OurServices from "../component/ourservices";
import WhyUs from "../component/whyus";
import CtaBanner from "../component/ctabanner";
import LandingFooter from "../component/landingfooter";
import FaqSection from "../component/faqsection";
import TestimonialSliders from "../component/testimonialsliders";
function Landing() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <OurServices />
      <WhyUs />
      <TestimonialSliders />
      <CtaBanner />
      <FaqSection />
      <LandingFooter />
    </>
  );
}
export default Landing;
