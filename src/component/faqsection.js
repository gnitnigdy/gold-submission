import "../assets/css/faqsection.css";

function FaqSection() {
  return (
    <section id="faqs" className="faq-section">
      <div className="container mt-per-section">
        <div className="row">
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <h2 className="section-title">Frequently Asked Question</h2>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-12 col-lg-7">
            <div className="accordion" id="faq-accordion">
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="first-faq">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#first-faq-collapse"
                    aria-expanded="false"
                    aria-controls="first-faq-collapse"
                  >
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="first-faq-collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="first-faq"
                  data-bs-parent="#first-faq"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, corporis.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="second-faq">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#second-faq-collapse"
                    aria-expanded="false"
                    aria-controls="second-faq-collapse"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="second-faq-collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="second-faq"
                  data-bs-parent="#second-faq"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, corporis.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="third-faq">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#third-faq-collapse"
                    aria-expanded="false"
                    aria-controls="third-faq-collapse"
                  >
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="third-faq-collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="third-faq"
                  data-bs-parent="#third-faq"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, corporis.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="fourth-faq">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#fourth-faq-collapse"
                    aria-expanded="false"
                    aria-controls="fourth-faq-collapse"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="fourth-faq-collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="fourth-faq"
                  data-bs-parent="#fourth-faq"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, corporis.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="fifth-faq">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#fifth-faq-collapse"
                    aria-expanded="false"
                    aria-controls="fifth-faq-collapse"
                  >
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div
                  id="fifth-faq-collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="fifth-faq"
                  data-bs-parent="#fifth-faq"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, corporis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
