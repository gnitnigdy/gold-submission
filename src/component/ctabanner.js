import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../assets/css/ctabanner.css";

function CtaBanner() {
  return (
    <section id="cta-banner-section" className="cta--banner">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mt-5 cta-title">
              Sewa Mobil di (Lokasimu) Sekarang
            </h2>
            <p className="mt-4 cta-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-lg btn-success mt-4 mb-5 cta-button">
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
