import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../component/customnavbar";
import Hero from "../component/hero";
import OurServices from "../component/ourservices";
import WhyUs from "../component/whyus";
function Landing() {
  return (
    <header>
      <CustomNavbar />
      <Hero />
      <OurServices />
      <WhyUs />
    </header>
  );
}
export default Landing;
