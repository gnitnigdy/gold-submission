import "../assets/css/testimonialsliders.css";
import imgMan from "../assets/img/img.man.png";
import imgWoman from "../assets/img/img.woman.png";
function TestimonialSliders() {
  return (
    <section id="testimonials">
      <div className="container-fluid mt-per-section">
        <div className="row text-center">
          <h3 className="section-title">Testimonials</h3>
          <p className="section-subtitle">
            Berbagai review positif dari pelanggan kami
          </p>
        </div>
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-touch="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-4 col-lg-4">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgMan}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 d-none d-md-block">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgWoman}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 d-none d-md-block">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgMan}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-4 col-lg-4">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgWoman}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 d-none d-md-block">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgMan}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 d-none d-md-block">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgWoman}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-4 col-lg-4">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgMan}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 d-none d-md-block">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgWoman}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 d-none d-md-block">
                  <div className="card slider-card">
                    <div className="card-body d-flex">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-3 text-center">
                          <img
                            src={imgMan}
                            alt="img-testi-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-9 text-center text-md-start">
                          <p>⭐⭐⭐⭐⭐</p>
                          <p className="testi-text">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <p className="reviewer">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            className="btn btn-success me-2 slider-button-2"
          >
            &lt;
          </button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            className="btn btn-success slider-button"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSliders;
