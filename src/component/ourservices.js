import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../assets/css/ourservices.css";
import imgServices from "../assets/img/img.service.png";
function OurServices() {
  return (
    <section id="our-services-section">
      <div className="container mt-per-section">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img
              src={imgServices}
              alt="img-services"
              className="img-fluid img-services"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="service-subtitle mb-5 text-center text-md-start">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p className="service-paragraph mb-4">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="custom-ul-list service-paragraph mt-2">
              <li className="img-list mb-3">
                Sewa Mobil Dengan Supir di Bali 12 Jam.
              </li>
              <li className="img-list mb-3">
                Sewa Mobil Lepas Kunci di Bali 24 Jam.
              </li>
              <li className="img-list mb-3">
                Sewa Mobil Jangka Panjang Bulanan.
              </li>
              <li className="img-list mb-3">
                Gratis Antar - Jemput Mobil di Bandara.
              </li>
              <li className="img-list mb-3">
                Layanan Airport Transfer / Drop In Out.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
