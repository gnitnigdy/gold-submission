import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../assets/css/landingfooter.css";
import icInstagram from "../assets/icon/icon_instagram.svg";
import icFacebook from "../assets/icon/icon_facebook.svg";
import icMail from "../assets/icon/icon_mail.svg";
import icTwitch from "../assets/icon/icon_twitch.svg";
import icTwitter from "../assets/icon/icon_twitter.svg";

function LandingFooter() {
  return (
    <footer id="web-footer">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-3 text-custom-700">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-12 col-lg-3">
            <ul className="footer-navigation">
              <li>
                <a href="http://">Our Services</a>
              </li>
              <li>
                <a href="http://">Why Us</a>
              </li>
              <li>
                <a href="http://">Testimonial</a>
              </li>
              <li>
                <a href="http://">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-3 mb-sm-4 mb-md-4">
            <div className="row text-custom-700">
              <p>Connect With Us</p>
              <div className="col-1 me-3">
                <img src={icInstagram} alt="Instagram" />
              </div>
              <div className="col-1 me-3">
                <img src={icFacebook} alt="Facebook" />
              </div>
              <div className="col-1 me-3">
                <img src={icTwitter} alt="Twitter" />
              </div>
              <div className="col-1 me-3">
                <img src={icMail} alt="Mail" />
              </div>
              <div className="col-1 me-3">
                <img src={icTwitch} alt="Twitch" />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 text-custom-700">
            <p>Copyright Binar 2022</p>
            <p className="footer-logo">Navbar</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LandingFooter;
