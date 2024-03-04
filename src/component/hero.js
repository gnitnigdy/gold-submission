import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CarHero from "../assets/img/img.car.png";

function Hero() {
  return (
    <header id="hero-section">
      <div className="container-fluid">
        <div className="row pt-5 align-items-center">
          <div id="hero-text" className="col-md-6 col-lg-6">
            <h1 className="hero-title mb-5">
              Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)
            </h1>
            <h3 className="hero-subtitle mb-5">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </h3>
            <div className="mb-5">
              <button id="hero-button" className="btn btn-lg btn-success">
                Mulai Sewa Mobil
              </button>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 px-0">
            <img src={CarHero} alt="car-hero" className="img-fluid hero-img" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
