import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../assets/css/whyus.css";
import ic24hrs from "../assets/icon/icon_24hrs.svg";
import icComplete from "../assets/icon/icon_complete.svg";
import icPrice from "../assets/icon/icon_price.svg";
import icProfessional from "../assets/icon/icon_professional.svg";

function WhyUs() {
  return (
    <section id="why-us-section">
      <div className="container mt-per-section">
        <div className="row text-center text-lg-start">
          <h3 className="whyus-title">Why Us?</h3>
        </div>
        <div className="row text-center text-lg-start">
          <p className="whyus-subtitle mb-5">
            Mengapa harus pilih Binar Car Rental?
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={icComplete} alt="" className="mt-2 mb-4" />
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="card-text mb-2">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={icPrice} alt="" className="mt-2 mb-4" />
                <h5 className="card-title">Harga Murah</h5>
                <p className="card-text mb-2">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={ic24hrs} alt="" className="mt-2 mb-4" />
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className="card-text mb-2">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={icProfessional} alt="" className="mt-2 mb-4" />
                <h5 className="card-title">Sopir Profesional</h5>
                <p className="card-text mb-2">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
